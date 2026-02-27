const myLibrary = [];

function Book(book) {
    this.title = book.title,
    this.author = book.author,
    this.pages = book.pages,
    this.read = book.read,
    this.id = crypto.randomUUID()
}

function addBookToLibrary(book) {
    let newBook = new Book(book);
    myLibrary.push(newBook);
    createCard(newBook)
}

function createCard(book) {
    const cardDisplay = document.querySelector(".cardDisplay");
    const newdiv = document.createElement("div");
    newdiv.className = "bookCard";
    newdiv.dataset.bookId = book.id;
    const newParagraph = document.createElement("p");
    newParagraph.textContent = `${book.title} by ${book.author} has ${book.pages} pages. has been ${book.read}`;
    newdiv.appendChild(newParagraph);
    const removeBttn = document.createElement("button");
    removeBttn.textContent = "remove book"
    removeBttn.className = "removeBttn"
    newdiv.appendChild(removeBttn);
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



