(()=>{
// any me permite usar cualquier valor, pero se aconseja no usarlo

  let myDynamicVar: any;
  myDynamicVar = 110;
  myDynamicVar = null;
  myDynamicVar = {};
  myDynamicVar = '';

  myDynamicVar = 'Hola';
  const rta = (myDynamicVar as string).toLowerCase();
  //                         ^
  //                  cast = transformar
  console.log(rta);


  myDynamicVar = 132;
  const resp = (<number>myDynamicVar).toFixed();
    //              ^
  //           cast = transformar
  console.log(resp);


})();
