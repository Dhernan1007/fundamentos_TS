(()=>{
  // let myNumber: number;
  // let myString: string;

  let myNull: null = null;
  let myUndefined: undefined = undefined;

  let myNumber: number | null = null; // puedo hacerlo para un número que lo inicializo en nulo

  let myString: string | undefined = undefined;
  myString = 'garfio';

  function hi(name: string | null ){
    let hello = 'Hola ';
    if(name){
      hello += name;
    }else{
      hello += 'nobody';
    }
    console.log(hello);
  }

  function hiV2(name: string | null ){
    let hello = 'Hola ';

      hello += name?.toLowerCase() || 'nobody';

    console.log(hello);
  }

  hi('Darwin');
  hi(null);

  hiV2('Leonardo');
  hiV2(null);

})();
