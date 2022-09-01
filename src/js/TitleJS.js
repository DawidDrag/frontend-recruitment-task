class Title {
    constructor(text = 'Title') {

        const title = document.createElement('h1')

        this.text = text
        this.title = title
    }

    render() {

        this.title.innerText = this.text

        return this.title
    }
}

export default Title