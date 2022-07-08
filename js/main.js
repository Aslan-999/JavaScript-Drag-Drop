let dragItem = document.querySelectorAll("#dragArea .drag-item");
let dragArea = document.querySelector("#dragArea");

// DRAGSTART, DRAGOVER, DRAGLEAVE, DRAGEND, DRAG

for (let i = 0; i < dragItem.length; i++) {
    dragItem[i].addEventListener("dragstart", function (aslan) {
        aslan.dataTransfer.setData("aslanId", this.id)
        this.style.background="yellow"
        
    })
}

dropArea.addEventListener ("dragover", function(e){
e.preventDefault();
this.style.background="green";
});

dropArea.addEventListener("draleave", function(){
    this.style.background = "transparent";
}); 

dropArea.addEventListener("drop" , function(e){
    // e.preventDefault()
    let myId = e.dataTransfer.getData("aslanId");
    let drgItem = document.getElementById(myId);
    dropArea.prepend(drgItem);
})