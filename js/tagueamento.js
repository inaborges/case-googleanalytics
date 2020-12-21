// Preencha este arquivo com qualquer código que você necessite para realizar a
// coleta, desde a biblioteca analytics.js, gtag.js ou o snippet do Google Tag 
// Manager. No último caso, não é necessário implementar a tag <noscript>.

// O ambiente dispõe da jQuery 3.5.1, então caso deseje, poderá utilizá-la
// para fazer a sua coleta.
// Caso tenha alguma dúvida sobre o case, não hesite em entrar em contato.


// Add Event Listeners  

// Links

$(".menu-lista-link.menu-lista-contato").on("click", function(event) {
    ga('send', 'event', 'menu', 'entre_em_contato', 'link_externo');
    console.log("Entre_em_contato");
});

$(".menu-lista-link.menu-lista-download").on("click", function(event) {
    ga('send', 'event', 'menu', 'download_pdf', 'download_pdf');
    console.log("Download_pdf");
}); 

// Buttons

$('.card.card-montadoras[data-id="lorem"]').on("click", function (event) {
        ga('send', 'event', 'analise', 'ver_mais', 'Lorem');
        console.log("Lorem");
});

$('.card.card-montadoras[data-id="ipsum"]').on("click", function (event) {
        ga('send', 'event', 'analise', 'ver_mais', 'Ipsum');
        console.log("Ipsum");
});

$('.card.card-montadoras[data-id="dolor"]').on("click", function (event) {
        ga('send', 'event', 'analise', 'ver_mais', 'Dolor');
        console.log("Dolor");
});


// Form

$("input[id='nome']").on("click",function (event) {
   ga('send', 'event', 'contato', 'nome', 'preencheu');
   console.log("nome");  
});

$("input[id='email']").on("click", function (event) {
   ga('send', 'event', 'contato', 'email', 'preencheu');
   console.log("email");  
});


$("input[id='telefone']").on("click", function (event) {
    ga('send', 'event', 'contato', 'telefone', 'preencheu');
    console.log("telefone");  
});

$("input[id='aceito']").on("click", function (event) {
    ga('send', 'event', 'contato', 'aceito', 'preencheu');
    console.log("aceito");  
});


$("button[type='submit']").on("click", function (event) {
    ga('send', 'event', 'contato', 'enviado', 'enviado');
    console.log("Enviado");
});