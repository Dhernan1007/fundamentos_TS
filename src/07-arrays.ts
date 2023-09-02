(()=>{
  let prices = [1,2,3,4,5,6];
  // prices.push('sasa'); // originalmente el array es tipo number y solo puedo ingresar elementos de este tipo

  let prices2 = [1,2,3, 'hola', true];// acá si puede admitir boolean, string o number

  let mixed: (number | string | boolean | Object)[] = ['hola', true, 154];
  mixed.push(false, 1546);
  mixed.push([]);
  mixed.push({});

  prices.map(item => item*2);



})();
