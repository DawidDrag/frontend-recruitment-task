import Container from "./ContainerJS.js"
import Title from "./TitleJS.js"

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




