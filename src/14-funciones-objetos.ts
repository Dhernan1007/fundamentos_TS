(()=>{
  type Size = 'S' | 'M' | 'L';
  const login = (data:{email: string, password: number})=>{
    console.log(data.email, data.password);
  }


login({
  email: 'moi@mail.com',
  password: 85462,
});


const products: any[] = []; //más adelante se verá la forma correcta de tipar un array
const addProduct = (data: {
  title: String,
  createAt: Date,
  stock: number,
  size?: Size
}) => {
  products.push(data);
}

addProduct({
  title: 'Pro1',
  createAt: new Date(1992, 10),
  stock: 27,
})

console.log(products);


})();
