const MacchinaCaffe = function (accesa, sceltaCaffe) {
    this.accesa = accesa;
    this.sceltaCaffe = sceltaCaffe;
}

MacchinaCaffe.prototype.accendi = function () {
    this.accesa = !this.accesa;
    console.log(`${this.accesa ? 'accesa' : 'spenta'}`)
}

MacchinaCaffe.prototype.selezioneCaffe = function () {
    if (this.accesa) {
        setTimeout(() => {
            //if(){ risultato.innerText = "Caffe corto ☕"}
           // if (this.sceltaCaffe) { risultato.innerText = `${this.sceltaCaffe}` }
           this.sceltaCaffe;
        }, 3000);

    }
}
const risultato = document.querySelector('.risultato');

const sceltaCaffe = document.querySelectorAll('.scelta');
sceltaCaffe.forEach(scelta => {
    scelta.addEventListener('click', () => {
        switch (scelta) {
            case "caffeCorto":
                console.log("caffe corto");
                break;
            case "caffeLungo":
                console.log("caffe lungo");
                break
        }
        macchinetaCaffe.selezioneCaffe();
    })
})


const onOff = document.querySelector('.onOff');
onOff.addEventListener('click', (event) => {
    event.preventDefault();
    macchinetaCaffe.accendi();
})
const macchinetaCaffe = new MacchinaCaffe(false);







