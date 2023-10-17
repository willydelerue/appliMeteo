let ville = "Paris";
recevoirTemperature(ville);


let changerDeVille = document.querySelector('#changer');
changerDeVille.addEventListener('click', () => {
    
    ville = prompt("Veuillez entrer votre nom de ville.");
    recevoirTemperature(ville);
});



function recevoirTemperature() {
    
const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + ville + '&appid=da7b3605119c1f7d42a31bc148149844&units=metric';

let requete = new XMLHttpRequest();

requete.open('GET', url);
requete.responseType = 'json';
requete.send();

requete.onload = function() {
    if (requete.readyState === XMLHttpRequest.DONE) {
        if (requete.status === 200) {
        let reponse     = requete.response // On stocke la réponse
        let temperature = reponse.main.temp;
        let ville       = reponse.name;

        

        document.querySelector('#temperature_label').textContent = temperature;
        document.querySelector('#ville').textContent = ville;
        console.log(reponse);
        }
    }
    else {
            alert('Un problème est intervenu, merci de revenir plus tard.');
    }
}
}