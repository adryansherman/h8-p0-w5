  function changeVocals(str){
    var vowel = 'aiueoAIUEO'
    var ganti = 'bjvfpBJVFP'
    tampung = ''
    for(var i=0; i<str.length;i++){
      for(var j=0; j<vowel.length;j++){
        if(str[i] === vowel[j]){
          tampung +=  ganti[j]
          break
        }
      }
      if(str[i] !== vowel [j]){
        tampung+=str[i]
      }  
    }
    return tampung
  }
 
  
  function reverseWord (str) {
    var balik = ''
    for(var i=0; i<str.length; i++){
        balik = str[i]+balik
    }
    return balik
  }
  
  function setLowerUpperCase (str) {
      var tampung = ''
    for(var i=0; i<str.length; i++){
        if(str[i]=== str[i].toLowerCase()){
            tampung += str[i].toUpperCase()
        }else{
            tampung += str[i].toLowerCase()
        }
    }
    return tampung
  }
  
  function removeSpaces (str) {
      var tanpaSpasi = ''
    for(var i=0; i<str.length; i++ ){
        if(str[i] !== ' '){
            tanpaSpasi += str[i]
        }
    }
    return tanpaSpasi
   
  
   
  }
  
  function passwordGenerator (str) {

    if(str.length < 5){
        return 'Minimal karakter yang diinputkan adalah 5'
    }
    var vokal = changeVocals(str)
    var balik = reverseWord(vokal)
    var gedeKecil = setLowerUpperCase(balik)
    var spasi = removeSpaces(gedeKecil)
    return spasi
  }
  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'
  
  





 