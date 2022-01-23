const quoteText = document.querySelector(".quote"),
authorName = document.querySelector(".author .name")
quoteBtn = document.querySelector("button");
copyBtn = document.querySelector(".copy");

// citações aleatorias
function randomQuote(){
    quoteBtn.classList.add("Carregando");
    quoteBtn.innerText = "Carregando...";
    fetch("https://frases-app.herokuapp.com/frases/random").then(res => res.json()).then(result =>{
        console.log(result)
        quoteText.innerText = result.frase;
        authorName.innerText = result.autor;
        quoteBtn.innerText = "Nova frase";
        quoteBtn.classList.remove("Carregando");
        
    });
}

quoteBtn.addEventListener("click", randomQuote);