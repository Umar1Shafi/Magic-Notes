console.log("Magic notes")
shownotes()
let addBtn = document.getElementById('addBtn')
addBtn.addEventListener("click", function(e) {
    let addTxt2 = document.getElementById('addTxt2')
    let notes = localStorage.getItem("notes")
    notesobj = []
    if (notes == null) {
        notesobj = []
    } else {
        notesobj = JSON.parse(notes)
    }
    notesobj.push(addTxt2.value)
    localStorage.setItem("notes", JSON.stringify(notesobj))
    addTxt2.value = ""
    console.log(notesobj)
    shownotes()
})

function shownotes() {
    let notes = localStorage.getItem("notes")
    notesobj = []
    if (notes == null) {
        notesobj = []
    } else {
        notesobj = JSON.parse(notes)
    }
    let html = ""
    notesobj.forEach(function(element, index) {
        html += ` <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Note ${index + 1}</h5>
            <p class="card-text"> ${element}</p>
            <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
        </div>
    </div>
        `
    });
    let notesElm = document.getElementById("notes")
    if (notesobj == 0) {
        notesElm.innerHTML = "Plz enter something in the box then clixk add note "
    } else {
        notesElm.innerHTML = html
    }
}

function deleteNote(index) {
    let notes = localStorage.getItem("notes")
    notesobj = []
    if (notes == null) {
        notesobj = []
    } else {
        notesobj = JSON.parse(notes)
    }
    notesobj.splice(index, 1)
    localStorage.setItem("notes", JSON.stringify(notesobj))
    shownotes()
}


let search = document.getElementById('searchTxt');
search.addEventListener("input", function() {

    let inputVal = search.value.toLowerCase();
    // console.log('Input event fired!', inputVal);
    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function(element) {
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if (cardTxt.includes(inputVal)) {
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }
        // console.log(cardTxt);
    })
})