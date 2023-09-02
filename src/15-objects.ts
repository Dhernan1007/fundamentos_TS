(()=>{
  type Size = 'S' | 'M' | 'L';
  type Product = {
    title: String,
    createAt: Date,
    stock: number,
    size?: Size
  }

const products: Product[] = []; //más adelante se verá la forma correcta de tipar un array
const addProduct = (data: Product) => {
  products.push(data);
}

addProduct({
  title: 'Pro1',
  createAt: new Date(1992, 10),
  stock: 27,
})

console.log(products);


products.push({
  title: 'Prod3',
  createAt: new Date(1990, 12),
  stock: 27,
})
console.log(products);

})();
