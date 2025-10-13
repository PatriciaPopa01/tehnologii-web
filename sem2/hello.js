//ex1: arrow function
let concatMessage = (message) => {
    
    return message.join('');
}

//scris in linia de comanda
let mesaj = process.argv.slice(2);
let rezultat = concatMessage(mesaj)

//parametru
let mesaj2 = ["Hello", " ","world"," ", "!"];

console.log(concatMessage(mesaj2))


//ex2: comparare string-uri
function checkCaractere(str1, str2){
    if(str1.length === str2.length)
    {
        let count =0;
        for(let i =0 ;i<str1.length; i++)
            if(str1[i]===str2[i])
                count++;
        
        return count;
    }
    else
        return -1;

}

let cuv1 = "blabla";
let cuv2 = "cracra";

console.log(checkCaractere(cuv1,cuv2));

//ex3: din lista de numere in array

function listToArray (lista)
{
    let rez = []

    for(let i = 0 ;i< lista.length ; i++)
        rez.push(lista[i])
    return rez
}
let v = [1,2,3,4,5,6]
let copie = listToArray(v)
console.log(copie)


//ex4: functie cu parametrii varargs
function intercalare(array, ...args)
{
    let arrayNou = [];

    if( array.length === args.length)
    {
        for(let i =0; i<array.length;i++)
        {
            arrayNou.push(array[i])
            arrayNou.push(args[i])
        }
    }
    else
        return -1;

    return arrayNou
}

let vect = ["a","b","c"]

console.log(intercalare(vect,"10","20","30"));

//ex5: fibonacci - ordin din linia de comanda

function fibo(ordin)
{
    if( ordin === 0) return 0;
    if(ordin === 1) return 1
    return fibo(ordin-1) + fibo(ordin -2)
}

console.log(fibo(8))


//ex6: frecv relative de aparitie a unor litere intr un txt-fara spatiu

function checkExistentaLitera(frecv,litera)
{
    
    for(let j =0 ;j<frecv.length;j++)
    {
        if(frecv[j][0] === litera )
            return j
    }
    return -1
    
}
function frecventaCaractere (text)
{
    let frecv = [];
    let total =0;

    for(let i =0 ;i<text.length ;i++)
    {
        if(text[i]!== ' ')
        {
            let litera = text[i].toLowerCase();
            let index =checkExistentaLitera(frecv,litera);
            
            if(index === -1)
                frecv.push([litera,1])
            else
                frecv[index][1]++
            total++;
            
        }

    }

     for (let j = 0; j < frecv.length; j++) 
        frecv[j][1] = ((frecv[j][1] / total) * 100).toFixed(2) + '%';
    

    return frecv
}

let text = "Ana are mere"
console.log(frecventaCaractere(text))



