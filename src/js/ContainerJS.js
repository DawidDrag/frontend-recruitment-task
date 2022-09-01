class Container {

    constructor() {

        const container = document.createElement('div')
        this.container = container
    }

    render() {

        this.container.classList.add('container')
        return this.container

    }
    background(color) {
        
        this.container.style.backgroundColor = color
    }


}

export default Container