import { appState } from "../AppState.js"
import { moneyService } from "../Services/MoneyService.js"
import { setText } from "../Utils/Writer.js"

function _drawMoney(){
    // console.log('is this working')
    // let money = appState.money
    // let template = ''
    // for (let i = 0; i < money;i++){
    //     template += `
    //     💵
    //     `
    
    setText('money', appState.money)
}


export class MoneyController{
    constructor(){
        appState.on('money', _drawMoney)
        _drawMoney()
    }

    addMoney(){
        moneyService.addMoney()
    }
}