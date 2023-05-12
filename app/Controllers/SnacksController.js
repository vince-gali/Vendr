import { appState } from "../AppState.js";
import { setHTML } from "../Utils/Writer.js";

function _drawSnack(){
    // let snack = appState.snack
    let template = ''
    appState.snacks.forEach(s => template += s.ListTemplate)
    setHTML('snacks',template)
}

function _drawActive(){
    let activeSnack = appState.activeSnack
    setHTML('active', activeSnack.ActiveTemplate)
}

export class SnacksController{
    constructor(){
        _drawSnack()
        console.log('hello from snacks controller')

        // appState.on('activeSnack', _drawActive)
    }

    setActive(snackName){
        snackService.setActive(snackName)
    }
}

function _drawMySnacks(){
    
}