// fetch("https://api.quotable.io/random").then((res)=>res.json())
const quote=document.querySelector('.quote');
const author=document.querySelector('.person');
const newquote=document.querySelector('#new-quote');
newquote.addEventListener('click',NewQuoteGenerator);
function NewQuoteGenerator(){
    fetch("https://api.quotable.io/random").then((res)=>res.json()).then((data)=>{
        quote.innerText=data.content;
        author.innerText=data.author;
    })
}
