$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive: //trata sobre o comportamento baseado no tamanho da tela
    {
        0:{items:1},
        600:{items:3}, //mais de 600 px de tela
        1000:{items:5}// mais de 1000 px
    }
})