function kaliTerusRekursif(angka) {
    var strAngka = String(angka)
    if(strAngka.length === 1){
        return angka
    }else{
        var next = 1;
        for (i=0; i<strAngka.length; i++){
            if(strAngka.length > 1){
               next = next * Number(strAngka[i])
            }
        }
        return kaliTerusRekursif(next)
    }
  }
  
  // TEST CASES
  console.log(kaliTerusRekursif(66)); // 8
  console.log(kaliTerusRekursif(3)); // 3
  console.log(kaliTerusRekursif(24)); // 8 
  console.log(kaliTerusRekursif(654)); // 0
  console.log(kaliTerusRekursif(1231)); // 6

