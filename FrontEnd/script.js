
const img = document.createElement("img");
img.setAttribute("crossorigin","anonymous");



let btnTous = document.getElementById("btn-tous");
let btnObjets = document.getElementById("btn-objets");
let btnApparts = document.getElementById("btn-apparts");
let btnHotel = document.getElementById("btn-hotel");

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

btnTous.addEventListener("click", function() {
    let galleryId = document.getElementById("galleryId");
    galleryId.innerHTML = "";
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
})

btnObjets.addEventListener("click", function() {
    let galleryId = document.getElementById("galleryId");
    galleryId.innerHTML = "";
    for (let n = 0; n < 10; n++){
        fetch("http://localhost:5678/api/works")
        .then(reponse => reponse.json())
        .then(reponse2 => {   
        console.table(reponse2);
        const img = document.createElement("img");
        img.setAttribute("crossorigin","anonymous");
        if(reponse2[n].categoryId == 1) {
            img.src = reponse2[n].imageUrl;
            let gallery = document.querySelector("#portfolio div.gallery")
            let figure = document.createElement("figure");
            let figcaption = document.createElement("figcaption");
            gallery.appendChild(figure);
            figure.appendChild(img);
            figcaption.innerHTML = reponse2[n].title;
            figure.appendChild(figcaption);
        }
    }); 
    };
});

btnApparts.addEventListener("click", function() {
    let galleryId = document.getElementById("galleryId");
    galleryId.innerHTML = "";
    for (let n = 0; n < 10; n++){
        fetch("http://localhost:5678/api/works")
        .then(reponse => reponse.json())
        .then(reponse2 => {   
        console.table(reponse2);
        const img = document.createElement("img");
        img.setAttribute("crossorigin","anonymous");
        if(reponse2[n].categoryId == 2) {
            img.src = reponse2[n].imageUrl;
            let gallery = document.querySelector("#portfolio div.gallery")
            let figure = document.createElement("figure");
            let figcaption = document.createElement("figcaption");
            gallery.appendChild(figure);
            figure.appendChild(img);
            figcaption.innerHTML = reponse2[n].title;
            figure.appendChild(figcaption);
        }
    }); 
    };
});

btnHotel.addEventListener("click", function() {
    let galleryId = document.getElementById("galleryId");
    galleryId.innerHTML = "";
    for (let n = 0; n < 10; n++){
        fetch("http://localhost:5678/api/works")
        .then(reponse => reponse.json())
        .then(reponse2 => {   
        console.table(reponse2);
        const img = document.createElement("img");
        img.setAttribute("crossorigin","anonymous");
        if(reponse2[n].categoryId == 3) {
            img.src = reponse2[n].imageUrl;
            let gallery = document.querySelector("#portfolio div.gallery")
            let figure = document.createElement("figure");
            let figcaption = document.createElement("figcaption");
            gallery.appendChild(figure);
            figure.appendChild(img);
            figcaption.innerHTML = reponse2[n].title;
            figure.appendChild(figcaption);
        }
    }); 
    };
});

let bontonSubmit = document.getElementById("inputConnexion");
bontonSubmit.addEventListener("click", function(event){
    connexion();
    event.preventDefault();
});
let info = document.createElement("p");
function connexion() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("mdp").value;
    let parent = document.getElementById("contact");
    info.classList.remove("success");
    info.classList.remove("erreur");
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
