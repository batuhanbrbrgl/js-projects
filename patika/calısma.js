let isim = "Batuhan"
let soyisim = "BERBEROĞLU"
let yıl = "1999"
let email = "hanbatu1684@gmail.com"


console.log(isim.toUpperCase())
console.log(soyisim.toLowerCase())
console.log(soyisim)



let DOMAIN = email.slice(email.search("@") + 1)
console.log(DOMAIN)
const handro = DOMAIN.slice(0, DOMAIN.indexOf('.'))

function btt() {
    if (DOMAIN.slice(0, DOMAIN.indexOf('.')) === "gmail") {
        console.log("Mail girildi")
    } else {
        console.log("Mail Yanlış Girildi")
    }

}
btt();