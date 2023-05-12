export class Snack {
    constructor(data){
        this.name = data.name
        this.price = data.price
        this.imgUrl = data.imgUrl
    }

    get ListTemplate(){
        return `
        <div class="col-4 card">
        <img src="${this.imgUrl}" alt="">
          <h5>"${this.name}</h5>
          <p>"$${this.price}</p>
        </div>`
    }
}




// get ActiveTemplate(){
//     return `
    
//     `
// }





