console.log('Hello World');
showNotes();

// If User Add Note

let addBtn = document.getElementById('addBtn');
addBtn.addEventListener("click", function(e) {

        let addTxt = document.getElementById("addTxt");
        let notes = localStorage.getItem("notes");
        if (notes == null) {
            notesObj = [];
        } else {

            notesObj = JSON.parse(notes);
        }
        notesObj.push(addTxt.value);
        localStorage.setItem("notes", JSON.stringify(notesObj));
        addTxt.value = " ";
        console.log(notesObj);
        showNotes();
    })
    // To show elements from local storage
function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {

        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function(element, index) {
        html += `
        <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">What's Sticked! ${index+1}</h5>
            <p class="card-text">${element }</p>
            <button id ="${index}" onclick ="deleteNote(this.id)" class="btn btn-primary">Trash_It</button>
        </div>
    </div>
     `
    });

    let notesEln = document.getElementById('notes');
    if (notesObj.length != 0) {
        notesEln.innerHTML = html;

    } else {
        notesEln.innerHTML = `<h4> Nothing Sticked ! </h4>`
    }

}

// To Delete a note
function deleteNote(index) {
    console.log('Deleted', index);
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {

        notesObj = JSON.parse(notes);
    }

    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();

}

let search = document.getElementById('searchTxt');
search.addEventListener("input", function() {
    let inputVal = search.value.toLowerCase();
    console.log('Input Event', inputVal);
    let noteCard = document.getElementsByClassName('noteCard');
    Array.from(noteCard).forEach(function(element) {
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if (cardTxt.includes(inputVal)) {
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }
        // console.log(cardTxt)
    })



})