const navLinks = document.querySelectorAll(".sidebar .nav-link");
let btnInvestor = document.getElementById('btnInvestor')
let btnStartUp = document.getElementById('btnStartUp')

let formInvestor = document.getElementById('formInvestor')
let formStartUp = document.getElementById('formStartUp')

let btnRegis = document.getElementById('btnRegis')
let btnLogin = document.getElementById('btnLogin')

let btnLanjut = document.getElementById('btnLanjut')

let formRegis = document.getElementById('formRegis')
let formLogin = document.getElementById('formLogin')

let headingForm = document.getElementById('headingForm')
let subHeadingForm = document.getElementById('subHeadingForm')

let investor;
let investasi;
let startUp;

let uptoStartUp = 0;
let uptoInvestasi = 0;
let uptoInvestor = 0;
const scrollOffset = 100;
let isCounting = false;

let bioPanel = document.getElementById('bioPanel')

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    // hapus active dari semua link
    navLinks.forEach(l => l.classList.remove("active"));
    // tambahkan active ke link yang diklik
    link.classList.add("active");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const chatItems = document.querySelectorAll(".chat-item");

  chatItems.forEach(item => {
    item.addEventListener("click", function() {
      chatItems.forEach(el => el.classList.remove("active"));
      this.classList.add("active");
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector(".chat-footer input");
  const button = document.querySelector(".chat-footer button");
  const chatBody = document.querySelector(".chat-body");

  button.addEventListener("click", () => {
    if (input.value.trim() !== "") {
      const div = document.createElement("div");
      div.className = "message-row d-flex justify-content-end mb-3";
      div.innerHTML = `<div class="message p-2 bg-light rounded">${input.value}</div>`;
      chatBody.appendChild(div);
      chatBody.scrollTop = chatBody.scrollHeight;
      input.value = "";
    }
  });
});

window.addEventListener("scroll", () => {
    if (window.scrollY > scrollOffset && !isCounting) {
        Investor = setInterval(countInvestor);
        Investasi = setInterval(countInvestasi);
        StartUp = setInterval(countStartUp);
        isCounting = true;
    }
});

function countInvestor() {
    let count = document.getElementById("countInvestor");
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
    let count = document.getElementById("countStartUp");
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

btnRegis.addEventListener('click', function(){
    headingForm.innerText = "Create your account"
    subHeadingForm.innerText = "Please fill in the form to continue"

    btnRegis.classList.replace('block', 'hidden')
    btnLogin.classList.replace('hidden', 'block')

    formLogin.classList.replace('block', 'hidden')
    formRegis.classList.replace('hidden', 'block')
})

btnLogin.addEventListener('click', function(){
    headingForm.innerText = "Welcome back!"
    subHeadingForm.innerText = "Please login to continue"

    btnRegis.classList.replace('hidden', 'block')
    btnLogin.classList.replace('block', 'hidden')

    formLogin.classList.replace('hidden', 'block')
    formRegis.classList.replace('block', 'hidden')
})

document.addEventListener('DOMContentLoaded', () => {
    const roleSelect = document.getElementById('role');
    const dynamicFields = document.getElementById('dynamic-fields');
    const dynamicFieldsContainer = document.getElementById('dynamic-fields-container');
    const roleSelection = document.getElementById('role-selection');

    btnRegis.addEventListener('click', function() {
        headingForm.innerText = "Create Your Account";
        subHeadingForm.innerText = "Please fill in the form to continue";

        btnRegis.classList.replace('block', 'hidden');
        btnLogin.classList.replace('hidden', 'block');

        formLogin.classList.replace('block', 'hidden');
        formRegis.classList.replace('hidden', 'block');
    });

    btnLogin.addEventListener('click', function() {
        headingForm.innerText = "Welcome Back";
        subHeadingForm.innerText = "Login to continue";

        btnRegis.classList.replace('hidden', 'block');
        btnLogin.classList.replace('block', 'hidden');

        formLogin.classList.replace('hidden', 'block');
        formRegis.classList.replace('block', 'hidden');
    });

    btnLanjut.addEventListener('click', (event) => {
        event.preventDefault(); 

        const selectedRole = roleSelect.value;
        
        if (!selectedRole) {
            alert('Silakan pilih peran untuk melanjutkan.');
            return;
        }

        if (selectedRole === 'investor') {
            formRegis.action = 'chatInvestor.html';
        } else if (selectedRole === 'startup') {
            formRegis.action = 'chatPerusahaan.html';
        }

        const template = document.getElementById(selectedRole);

        if (template) {
            dynamicFields.innerHTML = ''; 
            
            const clone = template.content.cloneNode(true);
            dynamicFields.appendChild(clone);

            roleSelection.style.display = 'none';
            dynamicFieldsContainer.style.display = 'block';
        } else {
            console.error('Template tidak ditemukan untuk peran:', selectedRole);
        }
    });
});

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

function showBioPanel() {
  let hasClass = bioPanel.classList.contains('position-absolute')

  if(!hasClass){
    bioPanel.classList.replace('d-none', 'd-block')
    bioPanel.classList.add('position-absolute')
    bioPanel.classList.add('shadow-lg')
  }else{
    bioPanel.classList.replace('d-block', 'd-none')
    bioPanel.classList.remove('position-absolute')
    bioPanel.classList.remove('shadow-lg')
  }

}

function showChatList() {
  for(let i = 0; i < 2; i++){
    let chatContainer = document.getElementsByClassName('chatContainer')[i]
    let hasClass = chatContainer.classList.contains('position-absolute')

    if(!hasClass){
      chatContainer.classList.replace('d-none', 'd-block')
      chatContainer.classList.add('position-absolute')
      chatContainer.classList.add('shadow-lg')
    }else{
      chatContainer.classList.replace('d-block', 'd-none')
      chatContainer.classList.remove('position-absolute')
      chatContainer.classList.remove('shadow-lg')
    }
  }
}
