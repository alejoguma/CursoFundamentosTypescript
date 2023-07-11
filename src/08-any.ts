(()=>{
   let myDynamicVar: any;
   myDynamicVar = 100;
   myDynamicVar = null;
   myDynamicVar = '';

   myDynamicVar = 'Hola';
   const rta = (myDynamicVar as string).toLowerCase(); //cast forma 1
   console.log(rta);

   myDynamicVar = 1212;
   const rta2 = (<number>myDynamicVar).toFixed(); //cast forma 2
   console.log(rta2);
})();
