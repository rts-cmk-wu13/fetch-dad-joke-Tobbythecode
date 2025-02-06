fetch("https://icanhazdadjoke.com/",{

headers: {

    "Accept": "application/json"
}
})
.then(response => response.json())
.then(data =>  {

    let bodyElm = document.querySelector("body");

    let divElm = document.createElement("div")

    divElm.innerHTML = `
    <h1>${data.joke}</h1>


    `
bodyElm.append(divElm)
})