import Container from "./ContainerJS.js"
import Title from "./TitleJS.js"
import Text from "./TextJS.js"
import Button from "./ButtonJS.js"

let clickSum = Number()


const rootContainer = new Container()
document.body.appendChild(rootContainer.render()).classList.add('rootContainer')
rootContainer.background('#E5E5E5')


const containerForImage = new Container()
rootContainer.render().appendChild(containerForImage.render()).classList.add('containerForImage')


const containerForContent = new Container()
rootContainer.render().appendChild(containerForContent.render()).classList.add('containerForContent')


const titleForContent = new Title('Lorem Ipsum')
containerForContent.render().appendChild(titleForContent.render()).classList.add('title')

const textForContent = new Text('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.')
containerForContent.render().appendChild(textForContent.render()).classList.add('text')

const buttonForContent = new Button()
containerForContent.render().appendChild(buttonForContent.render()).classList.add('button')


const popup = document.querySelector('.popupBackground')
const popupContent = document.querySelector('.popupContent')


const checkLocalStorage = () => {

    if (localStorage.length === 0) {

        clickSum = 0
        localStorage.setItem('clickSum', clickSum)

    } else {
        clickSum = parseInt(localStorage.getItem('clickSum'))
    }
}

checkLocalStorage()


const closePopup = (e) => {

    if (e.target.classList.value !== 'popup' && e.target.classList.value !== 'popupContent' && e.target.classList.value !== '') {

        popup.classList.remove('popup-open')
    }
}


const showPopup = (e) => {

    const resetBtn = document.createElement('button')
    resetBtn.innerText = 'Reset'
    resetBtn.classList.add('button', 'resetBtn')

    const resetBtnEl = document.querySelector('.resetBtn')

    if (clickSum > 4 && resetBtnEl === null) {

        popupContent.appendChild(resetBtn)
        resetBtn.addEventListener('click', () => {
            clickSum = 0
            popupContent.removeChild(resetBtn)

        })

    }

    clickSum = clickSum + 1

    localStorage.setItem('clickSum', clickSum)

    const clickSumFromStorage = localStorage.getItem('clickSum')

    const spanEle = document.querySelector('.clickSum')

    spanEle.innerText = clickSumFromStorage

    popup.classList.add('popup-open')
}


buttonForContent.render().addEventListener('click', showPopup)
popup.addEventListener('click', closePopup)

