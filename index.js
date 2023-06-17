
const caffeCorto = document.querySelector('.caffeCorto');
const caffeLungo = document.querySelector('.caffeLungo');
const avvisi = document.querySelector('.avvisi');
const onOff = document.querySelector('.onOff');
const riempireSerbatoio = document.querySelector('.riempireSerbatoio');


const MacchinaCaffe = function (accesa, LivelloAcqua) {
    this.accesa = accesa;
    this.LivelloAcqua = LivelloAcqua;
}

MacchinaCaffe.prototype.accendi = function () {
    this.accesa = !this.accesa;
    console.log(`${this.accesa ? 'accesa' : 'spenta'}`)
}

MacchinaCaffe.prototype.acquaSerbatoio = function () {
    if (this.LivelloAcqua <= 0) {
        avvisi.innerText = "Il serbatoio d'acqua è vuoto";
        return this.LivelloAcqua = 0;
    }

}

MacchinaCaffe.prototype.riempeSebatoio = function () {
    this.LivelloAcqua += 1;
    if (this.LivelloAcqua >= 1) {
        avvisi.innerText = "";
        if (this.LivelloAcqua >= 10) {
            avvisi.innerText = 'Il serbatoio è pieno';
            return this.LivelloAcqua = 10;
        }
    }
    console.log(this.LivelloAcqua)
}

MacchinaCaffe.prototype.caffeCorto = function () {
    if (this.accesa && this.LivelloAcqua) {
        setTimeout(() => {
            avvisi.innerText = "Caffe corto ☕"
            this.LivelloAcqua -= 1;
            macchinettaCaffe.acquaSerbatoio();
            console.log(this.LivelloAcqua)

        }, 3000);
    }
}

MacchinaCaffe.prototype.caffeLungo = function () {
    if (this.accesa && this.LivelloAcqua) {
        setTimeout(() => {
            avvisi.innerText = "Caffe Lungo ☕"
            this.LivelloAcqua -= 1;
            macchinettaCaffe.acquaSerbatoio();

            console.log(this.LivelloAcqua)


        }, 3000);
    }
}


caffeCorto.addEventListener('click', () => {
    macchinettaCaffe.caffeCorto();
})
caffeLungo.addEventListener('click', () => {
    macchinettaCaffe.caffeLungo();
})

onOff.addEventListener('click', (event) => {
    event.preventDefault();
    macchinettaCaffe.accendi();
})

riempireSerbatoio.addEventListener('click', () => {
    macchinettaCaffe.riempeSebatoio();
})



const macchinettaCaffe = new MacchinaCaffe(false, 1);

macchinettaCaffe.acquaSerbatoio();




