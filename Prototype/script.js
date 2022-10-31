//Prototype
// function Member(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;
// }

// Member.prototype.makan = function(porsi) {
//     this.energi += porsi;
//     return `hai ${this.nama}, selamat maem ya`;
// }

// Member.prototype.maen = function(jam) {
//     this.energi -= jam;
//     return `hai ${this.nama}, jangan maen terooos!`;
// }

// Member.prototype.tidur = function(jam) {
//     this.energi += jam * 2; 
//     return `hai ${this.nama}, met bobo. mimpi indah ya!`;
// }

// let sana = new Member('sana', 10);




//versi Class
class Member {
    constructor(nama, energi) {
        this.nama = nama;
        this.energi = energi;
    }

    makan(porsi) {
        this.energi += porsi; 
        return `hai ${this.nama}, met maem ya..`;
    }
    maen(jam) {
        this.energi -= jam; 
        return `hai ${this.nama}, jangan maen teroos!`;
    }
    tidur(jam) {
        this.energi += jam * 2; 
        return `hai ${this.nama}, met bobo ya.. mimpi indah:)`;
    }
}

let sana = new Member('Sana', 20);