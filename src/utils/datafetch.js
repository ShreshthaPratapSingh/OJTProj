import { useEffect, useState } from "react";


async function refreshAccessToken() {
    const refresh = localStorage.getItem("refresh");

    if (!refresh) return null;

    const response = await fetch("https://novaaccounts.pythonanywhere.com/api/token/refresh/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ refresh }),
    });

    if (response.ok) {
        const data = await response.json();
        localStorage.setItem("access", data.access);
        return data.access;
    } else {
        console.log("Refresh token expired. Logging out.");
        localStorage.clear();
        window.location.href = "/";
        return null;
    }
}

async function fetchWithAuth(url, options = {}) {
    let access = localStorage.getItem("access");

    options.headers = {
        ...options.headers,
        Authorization: `Bearer ${access}`,
        "Content-Type": "application/json",
    };

    let response = await fetch(url, options);

    if (response.status === 401) {
        access = await refreshAccessToken();
        if (!access) return;

        options.headers.Authorization = `Bearer ${access}`;
        response = await fetch(url, options);
    }

    return response;
}

async function fetchUserData() {
    const response = await fetchWithAuth('https://novaaccounts.pythonanywhere.com/api/transactions/')
    if (!response.ok) {
        console.log("Failed to fetch")
        return []
    }
    const data = await response.json()
    return data
}

export async function deleteTransaction(id) {
    const response = await fetchWithAuth(
        `https://novaaccounts.pythonanywhere.com/api/transactions/${id}/`,
        {
            method: "DELETE"
        }
    );

    return response; 
}

export async function updateTransaction(id, updatedData) {
    const response = await fetchWithAuth(
        `https://novaaccounts.pythonanywhere.com/api/transactions/${id}/`,
        {
            method: "PATCH",
            body: JSON.stringify(updatedData)
        }
    );

    if (!response.ok) {
        throw new Error("Failed to update transaction");
    }

    return await response.json();
}


export default fetchUserData