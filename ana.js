/* =======================
   MENU MOBILE
======================= */
const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("open");

    if(menu.classList.contains("open")){
        menuBtn.classList.replace("fa-bars", "fa-times");
    } else {
        menuBtn.classList.replace("fa-times", "fa-bars");
    }
});


/* =======================
   THEME (LIGHT / DARK)
======================= */
const toggle = document.getElementById("theme-toggle");

toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});


/* =======================
   FAQ ABRIR / FECHAR
======================= */
document.querySelectorAll(".faq-item").forEach(item => {
    item.addEventListener("click", () => {
        item.classList.toggle("open");

        if(item.style.height){
            item.style.height = null;
        } else {
            item.style.height = item.scrollHeight + "px";
        }
    });
});


/* =======================
   CHATBOT
======================= */
const chatbot = document.getElementById("chatbot");
const chatWindow = document.getElementById("chat-window");

chatbot.addEventListener("click", () => {
    chatWindow.style.display = chatWindow.style.display === "block" ? "none" : "block";
});


/* =======================
   SCROLL ANIMATION
======================= */
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.style.opacity = 1;
            entry.target.style.transform = "translateY(0)";
        }
    });
});

document.querySelectorAll("section, .card, .plano").forEach(el => {
    el.style.opacity = 0;
    el.style.transform = "translateY(40px)";
    el.style.transition = "0.8s";

    observer.observe(el);
});


/* =======================
   ENVIAR AGENDAMENTO - WHATSAPP
======================= */
document.getElementById("formAgendamento").addEventListener("submit", function(e){
    e.preventDefault();

    let nome = document.getElementById("nome").value;
    let servico = document.getElementById("servico").value;
    let data = document.getElementById("data").value;
    let hora = document.getElementById("hora").value;
    let msg = document.getElementById("msg").value;

    let texto = `
        *Novo Agendamento*%0A
        Nome: ${nome}%0A
        Serviço: ${servico}%0A
        Data: ${data}%0A
        Hora: ${hora}%0A
        Mensagem: ${msg}
    `;

    let telefone = "55XXXXXXXXXX"; // coloque seu número AQUI

    window.open(`https://wa.me/${telefone}?text=${texto}`, "_blank");
});


/* =======================
   ENVIAR AGENDAMENTO - EMAIL
======================= */
function enviarEmail() {
    let nome = document.getElementById("nome").value;
    let servico = document.getElementById("servico").value;
    let data = document.getElementById("data").value;
    let hora = document.getElementById("hora").value;
    let msg = document.getElementById("msg").value;

    window.location.href = `mailto:contato@vitaly.com?subject=Novo Agendamento&body=
        Nome: ${nome}%0A
        Serviço: ${servico}%0A
        Data: ${data}%0A
        Hora: ${hora}%0A
        Mensagem: ${msg}
    `;
}


/* =======================
   BOTÃO DE LIGAÇÃO
======================= */
function ligar(){
    window.location.href = "tel:+55XXXXXXXXXX";
}


/* =======================
   SIMULAÇÃO DE PAINEL (DEMO)
======================= */
console.log("Painel administrativo disponível na versão backend.");
