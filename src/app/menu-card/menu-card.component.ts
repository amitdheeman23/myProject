import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-card',
  templateUrl: './menu-card.component.html',
  styleUrls: ['./menu-card.component.css']
})
export class MenuCardComponent implements OnInit {

  pizzaDetails: any = [];
  counter = 0;
  addcrad: any = [];
  price: number;
  customis: any = [];
  count: number;
  customiseData: any = [];
  interests: any = [];
  name: any = [];
  items: any;
  sum = 0;
  constructor() { }
  regular: any;
  ngOnInit(): void {
    // fetch method* fetch data from "ssets/menuList.json"**
    fetch('assets/menuList.json')
      .then(response => response.json())
      .then(json => console.log('pizzaDetails', this.pizzaDetails = json))


      if(JSON.parse(localStorage.getItem('customisCart'))){

      this.customis=JSON.parse(localStorage.getItem('customisCart'))
 
      }
      if(JSON.parse(localStorage.getItem('addcard'))){

      this.addcrad=JSON.parse(localStorage.getItem('addcard'))

      }
  }

    // addToCrat method* addToCrat method for Add cart
  addToCrat(data, i) {

    data['pizzaPrice'] = data.pizzaCost * data.count;
    this.addcrad.push(data);
    localStorage.setItem('addcard',JSON.stringify(this.addcrad))

    

  }




    // incrementAddtoCart method* incrementAddtoCart method for increment quantity in cart
  incrementAddtoCart(i, val) {

    if (val == "addCard") {

      this.addcrad[i].count = this.addcrad[i].count + 1;
      this.addcrad[i].pizzaPrice = this.addcrad[i].pizzaCost * this.addcrad[i].count;

    }

    else if (val == "coustomise") {

      this.customis[i].counts = this.customis[i].counts + 1;
      this.customis[i].customisePrice = this.customis[i].pizzaCost * this.customis[i].counts + this.sum;

    }

  }

    // decrementSubtoCart method* decrementSubtoCart method for increment quantity in cart

  decrementSubtoCart(i, val) {

    if (val == "addCard") {

      this.addcrad[i].count = this.addcrad[i].count - 1;
      this.addcrad[i].pizzaPrice = this.addcrad[i].pizzaCost * this.addcrad[i].count;

    }

    else if (val == "coustomise") {

      this.customis[i].counts = this.customis[i].counts - 1;
      this.customis[i].customisePrice = this.customis[i].pizzaCost * this.customis[i].counts - this.sum;

    }
  }

    // addToCratDelete method* addToCratDelete methof for delete Add catd from the carts
    addToCratDelete(i, val) {

      if (val == "addcrad") {
  
        this.addcrad.splice(i, 1)
        localStorage.removeItem('addcard')

      }
  
      else if (val == "coustomise") {
        this.customis.splice(i, 1)
        localStorage.removeItem('customisCart')
      }
  
    }

    // customiseToCart method* customiseToCart method for customise card modat

  customiseToCart(data) {

    this.customiseData = data
    this.customiseData['customisePrice'] = this.customiseData.pizzaPrice;
    this.customiseData['counts'] = this.customiseData.count;
    console.log('cosPrrice',this.customiseData)
  }

  // onCheckboxChange event* onCheckboxChange event for select topping crust and pizza size*

  onCheckboxChange(e, value, type) {

    if (e.target.checked) {

      this.interests.push(value)
      this.name.push(type)
      console.log('TypeName', this.name)
      this.sum = this.interests.reduce(function (a, b) {
        return a + b;
      }, 0);
      this.customiseData['pizzaPrice'] = this.customiseData.pizzaCost + this.sum;
    }

    else if (!e.target.checked) {

      let index = this.interests.indexOf(value)
      let ind = this.name.indexOf(type)
      if (index > -1) {
        this.interests.splice(index, 1)
        var sum = this.interests.reduce(function (a, b) {
          return a - b;
        }, 0);
        this.customiseData['pizzaPrice'] = this.customiseData.pizzaCost - sum;

      }

      if (ind > -1) {

        this.name.splice(ind, 1)
      }
    }
  }


    // addToCustomisecart method* addToCustomisecart method for add customise in cart

  addToCustomisecart() {

    this.customiseData['items'] = this.name.join(',')
    console.log('customiseObject', this.customiseData)
    this.customiseData['customisePrice'] = this.customiseData.pizzaPrice
    // this.customis.push(this.customiseData)
    console.log('customis',this.customiseData)
    this.customis.push(this.customiseData)
    localStorage.setItem('customisCart',JSON.stringify(this.customis))



  }
}
