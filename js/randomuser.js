const loadUser=()=>{

fetch('https://randomuser.me/api/?results=10')
.then(res =>res.json())
.then(data=>displayUsers(data.results))

}
const displayUsers=users=>{
const usersContainer=document.getElementById('users-container');
for (const u of users) {
    console.log(u)
    const userDiv=document.createElement('div');
    userDiv.classList.add('st')
    userDiv.innerHTML=`
    <h3>Gender:${u.gender}</h3>
    <h4>Name:${u.name.title} ${u.name.first
    } ${u.name.last}</h4>
    <h4>Location:${u.location.city}   ${u.location.country}</h4>
    <h4>Email:${u.email}</h4>
    
    
    `;
    usersContainer.appendChild(userDiv)
    
}


}

loadUser();