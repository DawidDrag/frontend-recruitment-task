import Container from "./ContainerJS.js"

const rootContainer = new Container('1440px', '960px')
document.body.appendChild(rootContainer.render())
rootContainer.background('#E5E5E5')


const containerForImage = new Container('505px', '330px')
rootContainer.render().appendChild(containerForImage.render()).classList.add('containerForImage')
containerForImage.background('red')


const containerForContent = new Container('505px', '330px')
rootContainer.render().appendChild(containerForContent.render()).classList.add('containerForContent')
containerForContent.background('blue')


