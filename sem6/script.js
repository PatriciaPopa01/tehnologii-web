let oddRows = document.querySelectorAll("tbody tr:nth-child(odd)")

if(oddRows && oddRows.length > 0)
{
    console.log("da")
    for( let item of oddRows)
        item.bgColor = "violet"

    // {
    //     console.log("nu")
    // }
}

let firstRow = document.querySelector("tbody tr:first-child")
let lastRow = document.querySelector("tbody tr:last-child")

if(firstRow && lastRow)
{
    firstRow.bgColor = "blue"
    lastRow.bgColor ="green"
}

