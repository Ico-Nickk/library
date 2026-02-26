const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read,
    this.id = crypto.randomUUID()
}

function addBookToLibrary(title, author, pages, read) {
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    console.log(myLibrary);
}

addBookToLibrary("chicken", "fish", "24", "read");
addBookToLibrary("tom and jerry", "mr bean", "400", "read");

const mobbieDick = new Book("mobbie dick", "author", "300", "read")

function createCard(book) {
    const newdiv = document.createElement("div");
    newdiv.className = "bookCard";
    const newParagraph = document.createElement("p")
    newParagraph.textContent = `${book.title} by ${book.author} has ${book.pages} pages. has been ${book.read}`;
    newdiv.appendChild(newParagraph);
    document.body.appendChild(newdiv);
}

function displayBooks() {
    for(book in myLibrary) {
        createCard(book);
    };
}

displayBooks()

