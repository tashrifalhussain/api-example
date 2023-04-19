const loadCounrtries=()=>{

     fetch('https://restcountries.com/v3.1/all')
     .then(res=>res.json())
     .then(data=>displayCountris(data))
}
const displayCountris=countries=>{

// for (const c of countries) {
//     console.log(c);
// }
const countriesContainer=document.getElementById('countries-container');
countries.forEach(c=>{
    console.log(c)
const countryDiv=document.createElement('div');
countryDiv.classList.add('country')
countryDiv.innerHTML=`
<h3>name:${c.name.common}</h3>
<p>Capital:${c.capital ? c.capital[0]:'No Capital' }</p>
<button onclick="loadCountryDetail('${c.cca2}')">Details</button>
`;
countriesContainer.appendChild(countryDiv)

})
}
const loadCountryDetail=(code)=>{
    // console.log('go go go',code)
  const   url=`https://restcountries.com/v3.1/alpha/${code}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayDetialCountry(data[0]))
}
const displayDetialCountry=Detail=>{
const conutryDitels=document.getElementById('conutry-ditels');
conutryDitels.innerHTML=`

<h3>Country Detail:${Detail.name.common}</h3>
<img src="${Detail.flags.png}">
`
}
loadCounrtries();