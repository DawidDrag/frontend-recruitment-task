class Button {
    constructor(text = 'Button') {

        const button = document.createElement('button')

        this.button = button
        this.text = text

    }

    render() {
        this.button.innerText = this.text
        return this.button
    }
}

export default Button