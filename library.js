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

function createCard() {
    const newdiv = document.createElement("div");
    newdiv.className = "bookCard";
    document.body.appendChild(newdiv);
}

createCard();

