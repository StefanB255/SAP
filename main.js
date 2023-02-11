let allLinks = document.querySelectorAll('.link-btn');
let customer = document.querySelector("#customer");
let introLink = document.querySelector("#intro");
let driversPage = document.querySelector("#drivers-page");
let views = document.querySelectorAll('.view');
let toggleBtn = document.querySelector("#toggle");
let operationAreas = document.querySelector('.operation-maps');

for(let i = 0; i < allLinks.length; i++){
    allLinks[i].addEventListener('click',showView);
}

function showView(e){
    e.preventDefault();
    for(let i=0; i < views.length; i++){
        views[i].style.display = "none";
    }
    let id = `#${this.getAttribute("href")}`;
    document.querySelector(id).style.display = "block";
}

toggleBtn.onclick = function(){
 toggleBtn.classList.toggle('active');   
 operationAreas.classList.toggle('active');
}
alert('Morate znati da ce na narednim stranicama raditi samo Home dugme');
alert('You need to know that only home button will work in the next pages');