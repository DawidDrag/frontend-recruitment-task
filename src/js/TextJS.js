class Text {
    constructor(text = 'Text') {
        const paragraph = document.createElement('p')

        this.text = text
        this.paragraph = paragraph
    }

    render() {
        this.paragraph.innerText = this.text
        return this.paragraph
    }
}

export default Text