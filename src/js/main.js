import Container from "./ContainerJS.js"
import Title from "./TitleJS.js"
import Text from "./TextJS.js"

const rootContainer = new Container()
document.body.appendChild(rootContainer.render()).classList.add('rootContainer')
rootContainer.background('#E5E5E5')


const containerForImage = new Container()
rootContainer.render().appendChild(containerForImage.render()).classList.add('containerForImage')


const containerForContent = new Container()
rootContainer.render().appendChild(containerForContent.render()).classList.add('containerForContent')
containerForContent.background('red')

const TitleForContent = new Title('Lorem Ipsum')
containerForContent.render().appendChild(TitleForContent.render()).classList.add('title')

const textForContent = new Text('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.')
containerForContent.render().appendChild(textForContent.render()).classList.add('text')



