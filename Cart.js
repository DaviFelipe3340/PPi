// ================ cart products ==========================

function Product(name, storage, ram, price, quantity, category) {
  this.name = name;
  this.sto = storage;
  this.ram = ram;
  this.price = price;
  this.qty = quantity;
  this.category = category;
}

const cart = {
  products_fc: [new Product("Macbook Pro M4", 512, 16, 1599.9, 2, "Macbook")],
  products: [
    {name: "Macbook Pro M4",storage: 512,ram: 16,price: 1599.9,quantity: 2,category: "Macbook",},
    {name: "Macbook Air M4",storage: 256,ram: 16,price: 1099.9,quantity: 5,category: "Macbook",},
    {name: "Apple Watch Series 10 46mm",ram: 0,sto: 64,price: 429.9,quantity: 3,category: "Watch",},
    {name: "iPhone 16",storage: 128,ram: 16,price: 899.9,quantity: 10,category: "iPhone",},
    {name: "iPhone 16 Pro Max",storage: 1024,ram: 16,price: 1199.9,qty: 1,category: "iPhone",},
    {name: "iMac M4",storage: 512,ram: 24,price: 1799.9,quantity: 1,category: "iMac",},
    {name: "iPad Pro 13in",storage: 2048,ram: 8,price: 2199.9,quantity: 1,category: "iPad",},
  ],
  
  calcTotal() {
    return this.products
      .reduce((acc, product) => acc + product.price * product.quantity, 0)
      .toFixed(2);
  },
  orderbyCrescent() {
    return this.products.toSorted((a, b) => a.price - b.price);
  },
  orderbyDescending() {
    return this.products.toSorted((a, b) => b.price - a.price);
  },
  orderbyAZ() {
    return this.products.toSorted((a, b) =>
      a.name.toUpperCase().localeCompare(b.name.toUpperCase())
    );
  },
  orderbyZA() {
    return this.products.toSorted((a, b) =>
      b.name.toUpperCase().localeCompare(a.name.toUpperCase())
    );
  },
  filterPerCategory(category) {
    return this.products.filter(
      (product) => product.category.toUpperCase() === categoria.toUpperCase()
    );
  },
  ordenar(prop, order = "c") {
    return this.products.toSorted((a, b) => {
      const valA = a[prop];
      const valB = b[prop];
      const numbers =
        typeof valA === "number" &&
        typeof valB === "number" &&
        !isNaN(valA) &&
        !isNaN(valB);
      if (numbers) {
        return order === "c" ? valA - valB : valB - valA;
      } else {
        const strA = String(valA).toUpperCase();
        const strB = String(valB).toUpperCase();
        return order === "c"
          ? strA.localeCompare(strB)
          : strB.localeCompare(strA);
      }
    });
  },
};

//console.log(cart.calcularTotal());
console.log(cart.ordenar("ram"));
