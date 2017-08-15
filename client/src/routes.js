/**
 * Created by einavcarmon on 14/08/2017.
 */
import AboutUsForm from './components/aboutUs/aboutUsForm'
import AboutUsView from './components/aboutUs/aboutUsView'
import ImagesForm from './components/images/imagesForm'
import ImagesView from './components/images/imagesView'

export const routes = [
  {
    name:"about us",
    mainComponent: AboutUsForm,
    viewComponent: AboutUsView
  },
  {
    name:"images",
    mainComponent: ImagesForm,
    viewComponent: ImagesView
  },
  {
    name:"opening hours"
  }
]