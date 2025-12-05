import { useEffect, useState } from 'react'
import './App.css'
import './index.css'
import Layout from './components/Layout'
import Dashboard from './components/Dashboard'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Transactions from './components/Transactions'
import Analytics from './components/Analytics'
import IncomeStatement from './components/IncomeStatement'
import ExpenseReport from './components/ExpenseReport'
import RevenueReport from './components/RevenueReport'
import Settings from './components/Settings'
import LandingPage from './components/LandingPage'
import LoginPage from './components/LoginPage'
import SignupPage from './components/SignupPage'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />
    },
    {
      path: "/loginPage",
      element: <LoginPage />
    },
    {
      path: "/signupPage",
      element: <SignupPage />
    },
    {
      path: "/dashboard",
      element: <Layout><Dashboard /></Layout>
    },
    {
      path: "/transactions",
      element: <Layout><Transactions /></Layout>
    },
    {
      path: "/analytics",
      element: <Layout><Analytics /></Layout>
    },
    {
      path: "/reports/incomeStatement",
      element: <Layout><IncomeStatement /></Layout>
    },
    {
      path: "/reports/Expense",
      element: <Layout><ExpenseReport /></Layout>
    },
    {
      path: "/reports/revenue",
      element: <Layout><RevenueReport /></Layout>
    },
    {
      path: "/settings",
      element: <Layout><Settings /></Layout>
    },
  ])
  return (
    <RouterProvider router={router} />
  )
}

export default App