//Execution Context, Hoisting & Scope

// console.log(nama); 
// var nama = 'Sana';

//hasilnya undefined
//knp hasilnya undefined? ketika dijalankan ada sesuatu yg disebut creation phase. creation phase yg diatas ada pada Global Context.
//js menjalankan perintah dari atas ke bawah.  ketika baris pertama diisi dengan console.log(nama). secara default js akan membuat variable yg diisi undefined. maka ketika dieksekusi akan medapatkan hasil undefined. lalu ketika baris ke dua dijalankan, js akan menyimpan variable yg diisi dgn nama 'Sana'. namun karena console.log sudah terlanjur dijalankan, hasil yg didapatkan tetap undefined 
//nah konsep yg dijelasin itu disebut dengan hoisting
//js mendefinisikan window sebagai global object
//js mendefinisikan this sebagai window


//contoh lain:
// console.log(sayHi)

// var nama = "Nayeon"

// function sayHi(nama) {
//     return `hai ${nama}, selamat datang`
// }

//hasilnya adalah tulisan function yang telah kita buat. knp? karena creation phase untuk function sendiri adalah function yg kita buat. kalau variable kan undefined, nah kalau function ya function yg kita buat. karena kita tidak memanggil function nya(tidak memakai "()"), jd hasilnya persis yaitu -> function sayHi(nama) { return `hai ${nama}, selamat datang`}
//lain hal, ketika kita memanggil functionnya (memakai "()"") maka hasilnya adalah -> hai undefined, selamat datang
//knp undefined? karena konsep hoisting, ketika console.log mengeksekusi function, maka yang diderek keatas adalah functionnya dulu bukan baris berikutnya (variablenya). karena secara default variable diisi undefined, maka  hasil yang didapatkan -> hai undefined. selamat datang
//baru setelah itu baris berikutnya dijalankan, variable nama = 'Nayeon' disimpan di dlm memori. tp lagi2, karena kita memanggil console nya di awal, maka variable yang dikeluarkan adalah undefined.


//contoh lain lagi:
// var nama = 'Im Nayeon';
// var username = 'imnayeon'

// function urlInstagram(username) {
//     var urlIg = 'http://instagram.com/';
//     var username = 'sanaya'
//     return urlIg + username; 
// }

// console.log(urlInstagram(username));

//hasilnya -> http://instagram.com/sanaya
//knp? kerena ketika memanggil function, argument username akan dicari dahulu di dalam function local, ada gak username, kalau ada pakai username yang ada di dalam  function tersebut.
//nah kalau var username dalam function engga ada, maka akan memakai username yg ada pada global scope -> imnayeon
//sama hal kalau parameter dalam function dihilangkan dan var username dalam function dihilangkan, hasilnya -> imnayeon . (memakai yg ada di global scope).


//kalau gini?
// var nama = 'Im Nayeon';
// var username = 'imnayeon';

// function urlInstagram() {
//     var urlIg = 'http://instagram.com/';
//     return urlIg + username; 
    
// }

// console.log(urlInstagram("sanaya"));

//hasilnya -> imnayeon
//knp? karena parameter function kosong dan tidak ada yang ditangkap oleh function maka argument 'sanaya' masuk ke dalam objek arguments.
//dan function mengembalikan username imnayeon karena menangkap username diluar local scope (global scope)
//kalau var username di global scope hilang dan di parameter function kosong, juga di dalam function tidak mendefinisikan variable username, maka hasilnya ReferenceError.


//contoh lagi
function satu() {
    var nama = "sanaya";
    console.log(nama);
}
function dua() {
    console.log(nama);
}
console.log(nama);      //undefined
var nama = 'nayeon';
satu();                //sanaya
dua('erika');          //nayeon
console.log(nama)      //nayeon

//hoisting dulu function satu, function dua, dan var nama.
//lalu jalankan console.log(nama)-> undefined. knp? karena creating phase.
//simpan var nama = 'nayeon' ke dalam memori.
//memanggil function satu() -> sandhika. knp? karena local scope.
//memanggil function dua('doddy') -> nayeon. knp? karena global scope.
//jalankan console.log(nama) -> nayeon. knp? karena global scope.
