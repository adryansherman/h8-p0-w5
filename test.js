function changeVocals (str) {
    var nama = str.split('')
    var vocal = ['a','i','u','e','o','A','I','U','E','O']
    var change = ['b','j','v','f','p','B','J','V','F','P']
    for (var i=0; i<nama.length; i++) {
        for (var j=0; j<vocal.length; j++) {
            if (nama[i] === vocal[j]) {
                nama[i] = change[j]
            }
        }
    }
    return nama
  }

  console.log(changeVocals('sergei dragunov'))