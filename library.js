const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read,
    this.id = crypto.randomUUID()
}
 
let shakespear = new Book("shakespear", "shakespear", "245", "not read")

