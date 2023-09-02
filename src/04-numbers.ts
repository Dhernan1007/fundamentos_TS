(()=>{
  let productPrice = 100;
  productPrice = 12;
  console.log("productPrice ", productPrice);

  let customerAge: number = 28;
  // customerAge = customerAge + '1';// 281
  customerAge = customerAge + 1;
  console.log("customerAge ", customerAge);

  // cuando solo declaro una variable si es necesario declarar su tipo
  let productInStock: number;
  console.log("productInStock ", productInStock);
  if(productInStock > 10){
    console.log('is greater');

  }

  // let discount = parseInt('juez');
  let discount = parseInt('95');
  console.log('discount ', discount);

  if(discount <= 200){
    console.log('apply');

  }else{
    console.log('not apply');

  }

  //hexadecimal
  let hex = 0xfff;
  console.log('hex ', hex);

  //Binario
  let bin = 0b1010;
  console.log('binario ', bin);


  const myNumber: Number = 10; // X no lo hagas así porque acá se hace referencia al objeto Number y no al tipo de dato
//                ^
//           iría n

})();
