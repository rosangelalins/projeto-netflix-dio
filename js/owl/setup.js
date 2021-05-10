/*$('.owl-carousel').owlCarousel({
    loop:true, //a passagem dos filme fica infinita, 
    //caso coloque false, ele chega a um certo limite para o lado
    margin:10, //distancia de um filme para o outro
    nav:false, //o menu pode ser desabilitado que fica em baixo dos filmes com false ou habilitado true
    responsive:{ //adaptação dos elementos para o tamanho da tela
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})*/

//stagePadding
$('.owl-carousel').owlCarousel({
    stagePadding: 50,
    loop:true, //a passagem dos filme fica infinita, 
    //caso coloque false, ele chega a um certo limite para o lado
    margin:10, //distancia de um filme para o outro
    nav:false, //o menu pode ser desabilitado que fica em baixo dos filmes com false ou habilitado true
    responsive:{ //adaptação dos elementos para o tamanho da tela
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})