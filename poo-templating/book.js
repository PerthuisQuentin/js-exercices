class Book {
    constructor(book) {
        this.is = book.id
        this.name = book.name
        this.read = book.read
    }

    getHtmlId() {
        return `book-${this.id}`
    }

    getText() {
        return `${this.name} - ${this.read}`
    }

    getHtmlElement() {
        const bookItem = document.createElement('li')
        bookItem.id = this.getHtmlId()
        bookItem.innerText = this.getText()

        return bookItem
    }
}