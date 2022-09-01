class Container {

    constructor(width = 'auto', height = 'auto') {

        const container = document.createElement('div')

        this.width = width
        this.height = height
        this.container = container

    }

    render() {

        this.container.style.width = this.width
        this.container.style.height = this.height
        this.container.classList.add('container')

        return this.container


    }

    background(color) {
        this.container.style.backgroundColor = color
    }


}

export default Container