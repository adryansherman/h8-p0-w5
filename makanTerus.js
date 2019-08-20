function makanTerusRekursif(waktu) {
    if(waktu < 1){
        return 0
    } else{
        var next = waktu-15
        return 1 + makanTerusRekursif(next)
    }
}
  
  // TEST CASES
  console.log(makanTerusRekursif(66)); // 5
  console.log(makanTerusRekursif(100)); // 7
  console.log(makanTerusRekursif(90)); // 6
  console.log(makanTerusRekursif(10)); // 1
  console.log(makanTerusRekursif(0));
  console.log(makanTerusRekursif(61)); 