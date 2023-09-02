(() => {
  //tengo que decirle de forma explicita los tipos de datos que va a soportar
  let userId: string | number;
  userId = 1597;
  userId = 'gurú';

  function greeting(myText: string | number) {
    if (typeof myText === 'string') {
      console.log(`string ${myText.toLowerCase()}`);

    }
    else {
      console.log(`number ${myText.toFixed(1)}`);
    }
  }
  greeting(15.47);
  greeting('gorra');


})();
