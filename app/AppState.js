import { Value } from "./Models/Value.js"
import { Snack } from "./Models/Snack.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { loadState } from "./Utils/Store.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = loadState('values', [Value])
  /** @type {import('./Models/Snack').Snack[]} */
  snacks = [
    new Snack ({name: 'Brussels Sprout', price: 4.25, imgUrl: 'https://www.jessicagavin.com/wp-content/uploads/2018/12/roasted-brussels-sprouts-10-1200.jpg'}),
    new Snack ({name: 'Milk for Shoes', price: 2.25, imgUrl:'https://s-media-cache-ak0.pinimg.com/736x/ce/b8/ea/ceb8ea1bd50278a1a571a262ccbec44f.jpg' }),
    new Snack ({name: 'Tofritos Meatballs', price: 6.25, imgUrl: 'https://th.bing.com/th/id/R.31341a2b15b50d46aa97c78b72c49c7a?rik=0gELv8H4OoC4yA&pid=ImgRaw&r=0'}),
    new Snack ({name: 'Protein Shake', price: 10.50, imgUrl:'https://th.bing.com/th/id/OIP.ZHKwF9SbxiOUPQdRJsVb3gHaHa?pid=ImgDet&rs=1'}),
    new Snack ({name: 'Healthy Boy Bowl', price: 9.75, imgUrl: 'https://th.bing.com/th/id/OIP.eAU0AY-SGX-2LFYZdzcaCwAAAA?pid=ImgDet&rs=1'}),
    new Snack({name: 'Burrito', price: 8.50, imgUrl: 'https://th.bing.com/th/id/OIP.MgA1XuWBVW0cSlz9HQiWWwHaFi?pid=ImgDet&rs=1'})
  ]
  money = 0
}



















export const appState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
