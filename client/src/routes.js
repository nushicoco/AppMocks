/**
 * Created by einavcarmon on 14/08/2017.
 */
import React  from 'react';

import AboutUsForm from './components/aboutUs/aboutUsForm'
import AboutUsView from './components/aboutUs/aboutUsView'

export const routes = [
  {
    name:"about us",
    mainComponent: AboutUsForm,
    viewComponent: AboutUsView
  },
  {
    name:"images"
  },
  {
    name:"opening hours"
  }
]