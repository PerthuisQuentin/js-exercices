class Author {
    constructor(author) {
        this.id = author.id
        this.name = author.name
        this.books = author.books.map(book => new Book(book))
        this.sort(ASC)
        this.totalRead = this.getTotalRead()
    }

    sort(type) {
        this.books.sort((bookA, bookB) => type === ASC ? bookA.read - bookB.read : bookB.read - bookA.read)
    }

    getTotalRead() {
        return this.books
            .map(book => book.read)
            .reduce((a, b) => a + b)
    }

    getHtmlId() {
        return `author-${this.id}`
    }

    getTitle() {
        return `${this.name} - ${this.totalRead}`
    }

    getHtmlElement() {
        const authorDiv = document.createElement('div')
        authorDiv.id = this.getHtmlId()

        const authorTitle = document.createElement('h2')
        authorTitle.innerText = this.getTitle()
        authorDiv.appendChild(authorTitle)

        const bookList = document.createElement('ul')
        this.books
            .map(book => book.getHtmlElement())
            .forEach(bookHtmlElement => bookList.appendChild(bookHtmlElement))
        authorDiv.appendChild(bookList)

        return authorDiv
    }
}