function menuShow() {
    //Seleciona o item que tem a class ".mobile-menu" e atribui a variável
    let menuMobile = document.querySelector('.mobile-menu');

    // Verifica se o menuMobile possui a class ".open"
    if (menuMobile.classList.contains('open')) {
        // Se possui ele exclui quando a função é executada
        menuMobile.classList.remove('open');
        document.querySelector('.icon').scr = "assets/img/menu-mobile.png";
    } else {

        // Se não ele adiciona a class '.open' no item
        menuMobile.classList.add('open');
        document.querySelector('.icon').scr = "assets\img\close.png";
    }
}