(()=>{
  let productTitle = 'My amazing product';
  // productTitle = null;
  // productTitle = ()=>{};
  // productTitle = 123;
  productTitle = 'My amazing product changed';
  console.log('productTitle', productTitle);

  const productDescription = "Gustando el arroz con pollo";
  console.log( 'productDescription', productDescription );

  const text = `
  erre con erre cigarro
  erre con erre barril
  rapido corren los carros
  cargados de zucar al ferrocarril
  `
  let productPrice = 100;
  let isNew: boolean = false;

  const summary = `
  title: ${productTitle}
  description: ${productDescription}
  price: ${productPrice}
  isNew: ${isNew}
  `
  console.log(summary);


})();
