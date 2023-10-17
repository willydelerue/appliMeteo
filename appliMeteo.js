let ville = "Paris";

const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + ville + '&appid=da7b3605119c1f7d42a31bc148149844&units=metric';

let request = new XMLHttpRequest();

requete.open('GET', url);
requete.responseType = 'json';
requete.send();

requete.onload = function() {
    if (requete.readyState === XMLHttpRequest.DONE) {
        if (requete.status === 200) {
        let reponse     = requete.response // On stocke la réponse
        console.log(reponse);
        }
    }
    else {
            alert('Un problème est intervenu, merci de revenir plus tard.');
    }
}