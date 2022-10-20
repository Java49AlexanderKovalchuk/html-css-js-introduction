
const anchors = document.querySelectorAll(".thumbnails-anchor");
const detailsImage = document.querySelector(".detail-image");
const detailsTitle = document.querySelector(".detail-title");
const mainClass = document.querySelector(".main-class");
const HIDDEN = "hidden";  //assignment the classes name "hidden" to variable HIDDEN

function setDetails(anchor) {
    detailsImage.setAttribute("src", anchor.getAttribute("data-details-image"));
    showDetails();
    detailsTitle.innerHTML = anchor.getAttribute("data-details-title");    
}
for(let i = 0; i < anchors.length; i++) {
    anchors[i].addEventListener("click", function() {
        setDetails(anchors[i])
    });
}

function showDetails() {
    mainClass.classList.remove(HIDDEN);
}

function hideDetails() {
    mainClass.classList.add(HIDDEN);
}