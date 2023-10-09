// Your code goes here !
let input = document.getElementById('toDoInput');
let submit = document.getElementById('toDoSubmit');
let list = document.getElementById('toDoList');



function validateToDo(target) {
    target.parentNode.classList.add('done');                    // on cherche le parent de la cible (cible = bouton, parent = le li), et on lui ajoute une classe. Le script de cette classe est défini dans le HTML
    let myData = list.innerHTML;
    setLocalStorage(myData);                                    // pour sauvegarder le contenu de la liste
};

function deleteToDo(target) {
    target.parentNode.remove();                                // on supprime le parent de la cible, soit le li
    let myData = list.innerHTML;
    setLocalStorage(myData);
};

function getLocalStorage() {                                    // récupérer la donnée de l'objet de nom 'to_do' dans le localStorage
    let data = localStorage.getItem('to_do');                    // le déclarer sous la variable 'data'
    return data;
};

function setLocalStorage(data) {                                // enregistrer dans le localStorage la data sous le nom 'toDo'
    localStorage.setItem('to_do', data);
};

window.onload = function () {                                   // fonction pour afficher le contenu du localStorage en ouvrant la page
    let mySavedData = getLocalStorage();
    if (mySavedData != null) {
        list.innerHTML = mySavedData;
    } else {
        list.innerHTML = '';
    }
}


submit.addEventListener('click', function (e) {
    e.preventDefault();
    if (input.value == "") {
        alert("remplissez le formulaire")
        return;
    } else {

        // déclaration d'une tâche qui reprend la valeur rentrée dans le formulaire
        myTask = input.value;
        console.log(myTask);

        // reset du formulaire après le click
        input.value = '';                                       // ou form.reset();

        // déclaration de la création d'un élément type liste qui affiche la chaîne de caractères rentrée dans le formulaire
        let li = document.createElement('li');
        let liContent = `
                    <span>${myTask}</span>
                    <button onclick="deleteToDo(this)">Supprimer</button>
                    <button onclick="validateToDo(this)">Fait</button>
                `;                                                      // pour la mise en forme HTML, avec les boutons pour supprimer la tâche ou afficher en fait
        li.innerHTML = liContent;
        list.appendChild(li);                                           // pour ajouter le li dans la liste
        let myData = list.innerHTML;
        setLocalStorage(myData);
    }
})
