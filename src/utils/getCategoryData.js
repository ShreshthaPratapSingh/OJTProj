export const getCategoryData = (transactions, type)=>{
    const filtered = transactions.filter((t) => t.type.toLowerCase() === type)

    const categoryMap = {}

    filtered.forEach(element => {
        if(!categoryMap[element.category]){
            categoryMap[element.category] = 0
        }
        categoryMap[element.category] += Number(element.amount)
    });

    return{
        labels: Object.keys(categoryMap),
        rawdata: Object.values(categoryMap)
    }
}