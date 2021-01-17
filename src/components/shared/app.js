export function cambiarClase() {

    // Obtengo el "nav" mediante el id
    let siteNav = document.getElementById('site-nav');
        siteNav.classList.toggle('site-nav-open');
    
    let menuOpen = document.getElementById('menu-toggle');
        menuOpen.classList.toggle('menu-open');

    /* let siteNavClose = document.getElementsByClassName('content');
        siteNavClose.classList.remove('site-nav-open');

    let menuClose = document.getElementsByClassName('content');
        menuClose.classList.remove('menu-open'); */

}