import { addProduct, calcStock, products } from './product.service'


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
  size: 'S'
})
console.log(products);
const total = calcStock();
console.log(total);
