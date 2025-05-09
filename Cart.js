// ================ cart products ==========================

function Items(name, storage, ram, price, quantity, category, totalpp) {
  this.name = name;
  this.storage = storage;
  this.ram = ram;
  this.price = price;
  this.quantity = quantity;
  this.category = category;
  this.totalpp = this.price*this.quantity //totalpp = total per product
}

const prdct1 = new Items ("Macbook Pro M4", 512, 16, 1599.9, 2, "Macbook")
const prdct2 = new Items ("Macbook Air M4", 256, 16, 1099.9, 5, "Macbook") 
const prdct3 = new Items ("Apple Watch Series 10 46mm", 64, null, 429.9, 3, "Watch")
const prdct4 = new Items ("iPhone 16", 128, 16, 899.9, 10, "iPhone")
const prdct5 = new Items ("iPhone 16 Pro Max", 1024, 16, 1199.9, 1, "iPhone")
const prdct6 = new Items ("iMac M4", 512, 24, 1799.9, 1, "iMac")
const prdct7 = new Items ("iPad Pro 13in", 2048, 8, 2199.9, 1, "iPad")

const cart = {
    items: [prdct1, prdct2, prdct3, prdct4, prdct5, prdct6, prdct7],

    calcularTotal(){return this.items.reduce((i, prdct) => {return i + prdct.price * prdct.quantity;} ,0) },

    filtrarPorCategoria(categoria){return this.items.filter((prdct) => prdct.category === categoria)  .map((prdct) => prdct.name);},

    ordenarPorPrecoCrescente(){return this.items.toSorted((a,b) => a.price - b.price) .map((prdct) => prdct.name + " for " + prdct.price );},

    ordenarPorPrecoDecrescente(){return this.items.toSorted((a,b) => b.price - a.price) .map((prdct) => prdct.name + " for " + prdct.price );},

    ordenarPorNome(){{return this.items.toSorted((a, b) => {
      if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
        else if (b.name.toLowerCase() > a.name.toLowerCase()) return -1; 
        else return 0;}) .map((prod) => prod.name)}}
    };

    console.log(cart.calcularTotal())
    console.log(cart.filtrarPorCategoria())
    console.log(cart.ordenarPorPrecoCrescente())
    console.log(cart.ordenarPorPrecoDecrescente())
    console.log(cart.ordenarPorNome())