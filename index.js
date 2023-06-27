
const caffeCorto = document.querySelector('.caffeCorto');
const caffeLungo = document.querySelector('.caffeLungo');
const avvisi = document.querySelector('.avvisi');
const onOff = document.querySelector('.onOff');
const riempireSerbatoio = document.querySelector('.riempireSerbatoio');
const livelloSerbatoio = document.querySelector('.livelloSerbatoio');
const cappuccino = document.querySelector('.cappuccino');
const outputCaffe = document.querySelector('output-caffe')

 livelloSerbatoio.innerText = 0;

const MacchinaCaffe = function (accesa, LivelloAcqua, livelloLatte) {
    this.accesa = accesa;
    this.LivelloAcqua = LivelloAcqua;
    this.livelloLatte = livelloLatte;
}

MacchinaCaffe.prototype.accendi = function () {
    this.accesa = !this.accesa;
    onOff.style.backgroundColor = `${this.accesa ? 'green' : 'red'}`
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
        livelloSerbatoio.innerText = this.LivelloAcqua;
        livelloSerbatoio.style.backgroundColor = '#049ce8'
        if (this.LivelloAcqua >= 10) {
            avvisi.innerText = 'Il serbatoio è pieno';
            return this.LivelloAcqua = 9;
        }
    }
    console.log(this.LivelloAcqua)
}

MacchinaCaffe.prototype.latte = function () { 
  
 if(this.accesa && this.livelloLatte){
    setTimeout(() => {
        avvisi.innerText = "Cappuccino ☕";
        console.log(this.livelloLatte)
    }, 3000) 
 }
}

MacchinaCaffe.prototype.caffeCorto = function () {

    if (this.accesa && this.LivelloAcqua) {
        setTimeout(() => {
            outputCaffe.innerText = "Caffe corto ☕"
        livelloSerbatoio.innerText = this.LivelloAcqua -= 1;
    
            macchinettaCaffe.acquaSerbatoio();

            console.log(this.LivelloAcqua)

        }, 3000);
       
    }
}

MacchinaCaffe.prototype.caffeLungo = function () {
    if (this.accesa && this.LivelloAcqua) {
        setTimeout(() => {
            avvisi.innerText = "Caffe Lungo ☕"
            livelloSerbatoio.innerText = this.LivelloAcqua -= 1;
    

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

cappuccino.addEventListener('click', () => {
         macchinettaCaffe.latte();
})


const macchinettaCaffe = new MacchinaCaffe(false, 0, 2);

macchinettaCaffe.acquaSerbatoio();




