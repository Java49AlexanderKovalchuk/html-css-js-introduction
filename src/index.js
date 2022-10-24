
const anchors = document.querySelectorAll(".thumbnails-anchor");
const detailsImage = document.querySelector(".detail-image");
const detailsTitle = document.querySelector(".detail-title");
const mainClass = document.querySelector(".main-class");
const detailsContainer = document.querySelector(".details-container");
const HIDDEN = "hidden";  //assignment the classes name "hidden" to variable HIDDEN
const IS_POINT = "is-point";

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
    detailsContainer.classList.add(IS_POINT);
    setTimeout(function() {
        detailsContainer.classList.remove(IS_POINT)
    }, 1);
}

function hideDetails() {
    mainClass.classList.add(HIDDEN);
}