(()=>{
  const calcTotal = (prices: number[]): string =>{
    let total = 0;
    prices.forEach((item)=>{
      total += item;
    });
    return total.toString();
  }

  //CASO VOID
  const printTotal = (prices: number[]) => {
   const rta = calcTotal(prices);
   console.log(`El total es ${rta}`);
    // si la funcion no retorna nada su tipo será void
  }

  const rta = calcTotal([1,2,3,4,5]);
  console.log(rta);

})();
