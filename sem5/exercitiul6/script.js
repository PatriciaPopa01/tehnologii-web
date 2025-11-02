const apiUrl = "http://localhost:8000/api/"

async function get(url) {
    return (await axios.get(url)).data
}

async function afiseazaDep() {

    const idDep = document.getElementById("idDep")
    const id = Number(idDep.value)

    let listDiv = document.getElementById("listaDetalii")
    listDiv.innerHTML = "";

    if (!id || isNaN(id)) {
        alert("nu exista dep cu id ul introdus");
        return
    }

    try {

        let data = await get(apiUrl + "getList/" + id);
        let htmlCode = []

        htmlCode.push("<ul> Numele departamentului:")
        htmlCode.push("<li>")

        htmlCode.push(data.name)

        htmlCode.push("</li>")
        htmlCode.push("</ul>")

        htmlCode.push("<ul>Numarul de angajati ai departamentului:")
        htmlCode.push("<li>")

        htmlCode.push(data.nrAngajati)

        htmlCode.push("</li>")
        htmlCode.push("</ul>")

        listDiv.innerHTML = htmlCode.join("")

    }
    catch (er) {
        const message = err.response?.data?.error || "A apărut o eroare.";
        alert(message);
    }

}
