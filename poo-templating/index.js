class IndexPage {
    constructor(authors, rootId, selectId) {
        this.rootElement = document.getElementById(rootId)
        this.selectElement = document.getElementById(selectId)

        this.authors = authors.map(author => new Author(author))
        this.sort(ASC)
    }

    sort(type) {
        this.authors.sort((authorA, authorB) => type === ASC ? authorA.totalRead - authorB.totalRead : authorB.totalRead - authorA.totalRead)
        this.authors.forEach(author => author.sort(type))
    }

    buildContent() {
        while (this.rootElement.lastChild) this.rootElement.removeChild(this.rootElement.lastChild)

        this.authors
            .map(author => author.getHtmlElement())
            .forEach(authorHtmlElement => this.rootElement.appendChild(authorHtmlElement))
    } 

    setupSortSelect() {
        this.selectElement.addEventListener('change', () => {
            this.sort(this.selectElement.value)
            this.buildContent()
        })
    } 

    buildPage() {
        this.buildContent()
        this.setupSortSelect()
    }
}

const indexPage = new IndexPage(AUTHORS, 'authors', 'sort')
indexPage.buildPage()

console.log(indexPage)