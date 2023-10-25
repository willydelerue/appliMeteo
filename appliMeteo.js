let ville;

if("geolocation" in navigator) {
    navigator.geolocation.watchPosition((position) => {
        console.log(position.coords.latitude);
        console.log(position.coords.longitude);
      }, error, options);

      function error() {
        alert('Aucune position disponible.');
      }

      var options = {
        enableHighAccuracy: true,  // false par defaut
        maximumAge        : 30000, // dernière position en cache en millisecondes qu'on peut accepter, 0 par defaut
        timeout           : 27000  // durée max en millisecondes pour geolocaliser, infinity par defaut
      }

} else {
    ville = "Paris";
    recevoirTemperature(ville);
}


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