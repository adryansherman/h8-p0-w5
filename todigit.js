function totalDigitRekursif(angka) {
   var strAngka = String(angka)
   if(strAngka.length === 0){
     return 0
   }else{
     var next = strAngka.slice(1)
     return Number(strAngka[0]) + totalDigitRekursif(next)
   } 
}
  
  // TEST CASES
  console.log(totalDigitRekursif(512)); // 8
  console.log(totalDigitRekursif(1542)); // 12
  console.log(totalDigitRekursif(5)); // 5
  console.log(totalDigitRekursif(21)); // 3
  console.log(totalDigitRekursif(11111));
 
   // 5


   