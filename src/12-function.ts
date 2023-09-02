(()=>{
  type Size = 'S' | 'M' | 'L';
  function createProductToJson(
    title: String,
    createAt: Date,
    stock: number,
    size: Size
  ){
    return {
      title,
      createAt,
      stock,
      size
    }
  }


  const producto1 = createProductToJson('P1', new Date(), 12, 'M')
  console.log(producto1);


  //ARROW FUNCTION

  const createProductToJsonV2 =(
    title: String,
    createAt: Date,
    stock: number,
    size?: Size // para decir que la variable es opcional
  )=>{
    return {
      title,
      createAt,
      stock,
      size
    }
  }

  const producto2 = createProductToJsonV2('P2', new Date(), 92)
  console.log(producto2);


})();
