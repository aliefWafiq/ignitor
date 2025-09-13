let btnInvestor = document.getElementById('btnInvestor')
let btnStartUp = document.getElementById('btnStartUp')

let formInvestor = document.getElementById('formInvestor')
let formStartUp = document.getElementById('formStartUp')

let investor;
let investasi;
let startUp;

let uptoStartUp = 0;
let uptoInvestasi = 0;
let uptoInvestor = 0;
const scrollOffset = 100;
let isCounting = false;

window.addEventListener("scroll", () => {
    if (window.scrollY > scrollOffset && !isCounting) {
        Investor = setInterval(countInvestor);
        Investasi = setInterval(countInvestasi);
        StartUp = setInterval(countStartUp);
        isCounting = true;
    }
});

function countInvestor() {
    let count = document.getElementById("investor");
    count.innerHTML = ++uptoInvestor;
    if (uptoInvestor === 25000) {
        clearInterval(Investor);
    }
}

function countInvestasi() {
    let count = document.getElementById("investasi");
    count.innerHTML = ++uptoInvestasi;
    if (uptoInvestasi === 500) {
        clearInterval(Investasi);
    }
}

function countStartUp() {
    let count = document.getElementById("startUp");
    count.innerHTML = ++uptoStartUp;
    if (uptoStartUp === 20000) {
        clearInterval(StartUp);
    }
}

function formInvestorClick(){
    btnStartUp.classList.replace('button', 'idle_button')
    btnInvestor.classList.replace('idle_button', 'button')

    formStartUp.classList.replace('block', 'hidden')
    formInvestor.classList.replace('hidden', 'block')
}

function formStartUpClick(){
    btnStartUp.classList.replace('idle_button', 'button')
    btnInvestor.classList.replace('button', 'idle_button')

    formInvestor.classList.replace('block', 'hidden')
    formStartUp.classList.replace('hidden', 'block')
}

document.addEventListener('DOMContentLoaded', () => {
    const buttons = [
        document.getElementById('btnCarousel1'),
        document.getElementById('btnCarousel2'),
        document.getElementById('btnCarousel3'),
    ]

    buttons.forEach((btn) => {
        btn.addEventListener('click', indicator)
    })

    function indicator(event){

        buttons.forEach((btn) => {
            btn.classList.remove('text-opacity-100')
            btn.classList.add('text-opacity-50')
        })

        const clickedId = event.currentTarget
        clickedId.classList.remove('text-opacity-50')
        clickedId.classList.add('text-opacity-100')
    }
})
