/**
 * Created by einavcarmon on 14/08/2017.
 */
import AboutUsForm from './components/aboutUs/aboutUsForm'
import AboutUsView from './components/aboutUs/aboutUsView'
import ImagesForm from './components/images/imagesForm'
import ImagesView from './components/images/imagesView'
import OpeningHoursForm from './components/openingHours/openingHoursForm'
import OpeningHoursView from './components/openingHours/openingHoursView'

import {Brander, EmptyView} from './components/brander'

export const routes = [
  {
    name: 'About Us',
    mainComponent: AboutUsForm,
    viewComponent: AboutUsView
  },
  {
    name: 'Images',
    mainComponent: ImagesForm,
    viewComponent: ImagesView
  },
  {
    name: 'Opening Hours',
    mainComponent: OpeningHoursForm,
    viewComponent: OpeningHoursView
  },
  {
    name: 'Branding',
    mainComponent: Brander,
    viewComponent: EmptyView
  }
]
