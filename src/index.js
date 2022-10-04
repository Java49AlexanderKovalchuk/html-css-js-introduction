
const anchors = document.querySelectorAll(".thumbnails-anchor");
const detailsImage = document.querySelector(".detail-image");
const detailsTitle = document.querySelector(".detail-title");
function setDetails(anchor) {
    detailsImage.setAttribute("src", anchor.getAttribute("data-details-image"));
    detailsTitle.innerHTML = anchor.getAttribute("data-details-title");    
}
for(let i = 0; i < anchors.length; i++) {
    anchors[i].addEventListener("click", function() {
        setDetails(anchors[i])
    });
}