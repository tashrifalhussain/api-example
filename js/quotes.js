const loadQuote=()=>{
    fetch('https://api.kanye.rest/')
    .then(res=>res.json())
    .then(data=>displayQuote(data))
}
const displayQuote=q=>{
const blockQuo=document.getElementById('quo');
blockQuo.innerText=q.quote;
   
}
loadQuote()