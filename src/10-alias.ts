(()=>{
  //se usa type para crear mi propio tipo
  type UserID = string | number | boolean;
//       ^
//   pascalCase

  let userId: UserID;


  // Literal types

  type Size = 'S' | 'M' | 'L';

  let shirtSize: Size;
  shirtSize = 'M';
  shirtSize = 'L';
  shirtSize = 'S';

    function greeting(userId: UserID, size: Size) {
      if (typeof userId === 'string') {
        console.log(`string ${userId.toLowerCase()}`);

      }
    }

    greeting(1567, 'M');
    greeting(5677, 'L');

})();
