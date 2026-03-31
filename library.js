const myLibrary = [];

class Book {
    id = crypto.randomUUID();
    constructor (book){
        this.title = book.title;
        this.author = book.author;
        this.pages = book.pages;
        this.read = book.read;
    }
    readStatus() {
        if (this.read === "read") {
            this.read = "not read";
        } else {
            this.read = "read"
        };
    }
};

function addBookToLibrary(book) {
    let newBook = new Book(book);
    myLibrary.push(newBook);
    createCard(newBook)
};

const cardDisplay = document.querySelector(".cardDisplay");

function createCard(book) {
    const newdiv = document.createElement("div");
    newdiv.className = "bookCard";
    newdiv.dataset.bookId = book.id;

    const newParagraph = document.createElement("p");
    newParagraph.className = "cardPara"
    newParagraph.textContent = `${book.title} by ${book.author} has ${book.pages} pages. has been ${book.read}`;
    newdiv.appendChild(newParagraph);

    const removeBttn = document.createElement("button");
    removeBttn.textContent = "remove book"
    removeBttn.className = "removeBttn"
    newdiv.appendChild(removeBttn);

    const readStatus = document.createElement("button");
    if(book.read === "read") {
        readStatus.textContent = "not read";
    } else {
        readStatus.textContent = "read";
    };
    readStatus.className = "readStatus";
    newdiv.appendChild(readStatus);
    cardDisplay.appendChild(newdiv);
}

function closeMe() {
    document.getElementById("addBook").close();
}

document.getElementById("bookForm").addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formObject = Object.fromEntries(formData.entries())
    addBookToLibrary(formObject);
    alert("Book added to your library, thanks!");
    closeMe();
});

cardDisplay.addEventListener('click', (event) => {
    if(event.target.className === "removeBttn") {
        const clickedDiv = event.target.parentNode;
        const idOfBookToRemove = clickedDiv.dataset.bookId;
        const indexOfBook = myLibrary.findIndex(item => item.id === idOfBookToRemove);
        if (indexOfBook > -1) {
            myLibrary.splice(indexOfBook, 1);
        };
        alert(`book of id ${idOfBookToRemove} has been removed`);
        clickedDiv.remove();
    };

});

cardDisplay.addEventListener('click', (event) => {
    const clickedDiv = event.target.parentNode;
    const idOfBookTochangeReadStatus = clickedDiv.dataset.bookId;
    const indexOfBook = myLibrary.findIndex(item => item.id === idOfBookTochangeReadStatus);
    const cardpara = clickedDiv.querySelector(".cardPara");
    if(event.target.className === "readStatus") {
        if(event.target.textContent === "read") {
            event.target.textContent = "not read"
            myLibrary[indexOfBook].readStatus();
            cardpara.textContent = `${myLibrary[indexOfBook].title} by ${myLibrary[indexOfBook].author} has ${myLibrary[indexOfBook].pages} pages. has been ${myLibrary[indexOfBook].read}`;
        } else {
            event.target.textContent = "read"
            myLibrary[indexOfBook].readStatus();
            cardpara.textContent = `${myLibrary[indexOfBook].title} by ${myLibrary[indexOfBook].author} has ${myLibrary[indexOfBook].pages} pages. has been ${myLibrary[indexOfBook].read}`;
        }
    };
    
})




