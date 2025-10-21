
//ex1
let aniNastere = [2005, 1999, 2010, 1987, 1975, 2012]
let filterAni = (aniNastere,anReferinta) =>
{
    let result = aniNastere.filter((an)=>{
        if(2025 - an >= 18) return true
        else return false
    })
    return result
}
console.log(filterAni(aniNastere,2018))

//ex2
let numere = [3, 5, 10, 12, 15, 18, 20, 25]
let divizor = 5

let sumaNumDiv = (numere,divizor) =>{
    let result = numere.map((numar)=>{
        if(numar % divizor === 0)
            return numar
        else return 0
    }).reduce((prev,current)=>{
        return prev+current
    },0)
    return result
}

console.log(sumaNumDiv(numere,divizor))

//ex3

let formatString =(s, ...format) =>
{
    let modified = s;
    for(let i = 0;i<format.length;i++)
    {
        if(modified.indexOf('{' + i + '}') !== -1){
            modified = modified.replace('{' + i + '}', format[i])
        }
    }
    return modified
}

console.log(formatString("un {0} foarte {1}","catelus","jucaus"))

//ex4
let reduceLeft = (array, transfomation , index) =>
{
    let suma = 0
    for(let i = index ; i<= array.length - 2 ; i+=2)
        suma += transfomation(array[i],array[i+1]) 
    return suma
}

console.log(reduceLeft(numere, (curr,prev) => curr+prev,0))

//ex5

let cenzureazaText = (text, dictionar)=>{
    // let cuvinte = text.split(" ")
    // let result = cuvinte.map((cuvant) => {
    //     if(dictionar.includes(cuvant))
    //         for(let i = 0 ; i< cuvant.length;i++)
    //             cuvant.replace(cuvant[i],'*')
    // })
    // return result

    return text
    .split(" ")
    .map((cuvant) => {
        if(dictionar.includes(cuvant))
            if(cuvant.length > 2)
                return cuvant[0] + "*".repeat(cuvant.length - 2) + cuvant[cuvant.length-1]
            else
                return "*".repeat(cuvant.length)
        return cuvant
    })
    .join(" ")

}

text = "javascript este minunat"
dictionar = ["este"]
console.log(cenzureazaText(text,dictionar))

//ex5

let sorteazaArray = (array, string) => {

    return array.sort((a,b)=>
    {
        if (a[string] < b[string]) return -1;
        if (a[string] > b[string]) return 1;
    return 0;
    })

}

let persoane = [ 
    {nume:"Ana",varsta:23},
    {nume:"Maria",varsta:43},
    {nume:"Ion",varsta:22},
    {nume:"Mihai",varsta:9}
]
let crit = "varsta";

console.log(sorteazaArray(persoane,crit))

//ex7 - optional

let medie = (array) =>
{
    return (array.reduce((prev,curent)=>
    {
        return prev+curent

    },0) / array.length )
}

console.log(medie(numere))


