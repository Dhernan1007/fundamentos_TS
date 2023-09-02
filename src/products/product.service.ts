import { Product } from './product.model'

export const products: Product[] = []; //más adelante se verá la forma correcta de tipar un array
export const addProduct = (data: Product) => {
  products.push(data);
}


export const calcStock = (): number =>{
  let total = 0;
  products.forEach((item)=>{
    total += item.stock;
  });
  return total;
}
