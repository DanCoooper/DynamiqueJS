
const img = document.createElement("img");
img.setAttribute("crossorigin","anonymous");

for (let n = 0; n < 10; n++){
    fetch("http://localhost:5678/api/works")
    .then(reponse => reponse.json())
    .then(reponse2 => {   
    console.table(reponse2);
    const img = document.createElement("img");
    img.setAttribute("crossorigin","anonymous");
    img.src = reponse2[n].imageUrl;
    let gallery = document.querySelector("#portfolio div.gallery")
    let figure = document.createElement("figure");
    let figcaption = document.createElement("figcaption");
    gallery.appendChild(figure);
    figure.appendChild(img);
    figcaption.innerHTML = reponse2[n].title;
    figure.appendChild(figcaption);
}); 
};





let info = document.createElement("p");
function connexion() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("mdp").value;
    let parent = document.getElementById("contact");
    info.innerHTML = "";
    parent.appendChild(info);

    if (email === "sophie.bluel@test.tld" && password === "S0phie") {
        info.innerHTML = "Connecté !";
        info.classList.add("success");
    }else {
        info.innerHTML = "Email ou mot de passe incorrect";
        info.classList.add("erreur");
    }
    
}
