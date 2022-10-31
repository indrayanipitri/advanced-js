//Cara Membuat Object
//1. Object Literal
// let member = {
//     nama : 'Nayeon',
//     energi : 10,
//     makan : function(porsi) {
//         this.energi = this.energi + porsi;
//         console.log(`Hai ${this.nama}, selamat makan!`)
//     }
// }

// let member2 = {
//     nama : 'Sana',
//     energi : 10,
//     makan : function(porsi) {
//         this.energi = this.energi + porsi;
//         console.log(`Hai ${this.nama}, selamat makan!`)
//     }
// }


//2. Function Declaration
// function Member(nama, energi) {
//     let member = {};
    
//     member.nama = nama;
//     member.energi = energi;
//     member.makan = function(porsi) {
//         this.energi += porsi;
//         console.log(`Hai ${this.nama}, selamat makan ya`)
//     };
//     member.maen = function(jam) {
//         this.energi -= jam;
//         console.log(`Hai ${this.nama}, jangan maen teroos!`)
//     };

//     return member;
// }

// let sana = Member('Sanaya', 20);
// let mina = Member('Minaya', 18);



//3. Constructor Function
//pakai keyword new 
// function Member(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;
//     this.makan = function(porsi){
//         this.energi += porsi;
//         console.log(`hai ${this.nama}, met maem ya..`)
//     };
//     this.maen = function(jam) {
//         this.energi -= jam;
//         console.log(`hai ${this.nama}, jangan maen teross!`)
//     }
// }

// let sana = new Member('Sanaya', 30);
// let mina = new Member('Minaya', 32);



//4. Object.create()
const methodMember = {
    makan : function(porsi) {
        this.energi += porsi;
        console.log(`hai ${this.nama}, met maem ya`)
    },
    maen : function(jam) {
        this.energi -= jam;
        console.log(`hai ${this.nama}, jangan maen teroos!`)
    },
    tidur : function(jam) {
        this.energi += jam *2;
        console.log(`hai ${this.nama} sayang, met bobo yaa..`)
    }

}

function Member(nama, energi) {
    let member = Object.create(methodMember)

    member.nama = nama;
    member.energi = energi;

    return member
}

let sana = Member('Sana', 30);