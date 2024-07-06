const APIURL = 'https://api.github.com/users/';
const form = document.getElementById('form');
const search = document.getElementById('search');
let main = document.getElementById('box');
async function getUser(user){
    try{
        const { data } = await axios(APIURL+user);

        console.log(data);
        console.log(user);
        createCard(data);
    }
    catch(err){
        console.log('this is error '+err);
        main.innerHTML='';
        main.innerHTML = `<div class="card">
            <div>
                <img src="random.jpeg" alt="#NONE" class="Profile">
            </div>
            <div class="cart2">
                <h1>NuLL</h1>
                <p>NaN</p>
                <ul id="ul">
                    <li>NaN <strong>Following</strong></li>
                    <li>NaN <strong>Followers</strong></li>
                    <li>NaN <strong>Repos</strong></li>
                </ul>
                <div class="repos">NaN</div>
            </div>
        </div>`;
    }
}
function createCard(user){
    const userId = user.name || user.login;
    const bio = user.bio ? `<p>${user.bio}</p>` : '';
    const cardHTML = `<div class="card">
            <div>
                <img src="${user.avatar_url}" alt="avatar" class="Profile">
            </div>
            <div class="cart2">
                <h1>${userId ? userId : 'none'}</h1>
                ${bio}
                <ul id="ul">
                    <li>${user.following} <strong>Following</strong></li>
                    <li>${user.followers} <strong>Followers</strong></li>
                    <li>${user.public_repos} <strong>Repos</strong></li>
                </ul>
                <div class="repos"></div>
            </div>
        </div>`;
      main.innerHTML = cardHTML;
}
form.addEventListener('submit' , (e)=>{
    e.preventDefault();
    const user = search.value;
    if(user){
        getUser(user);
        search.value = '';
    }
})

