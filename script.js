const menu = document.getElementById('menu-despegable');

menu.addEventListener('click', e =>{
    e.preventDefault();
    if(window.innerWidth<=768){
        document.querySelector('.menu .contenedor nav ul li').style.display="inline-bloack"
    }
});


/*



    .menu{
        height: 50px;
    }

    .menu .contenedor {
        height: 50px;
    }

    .menu .contenedor nav {
        width: 28px;
    }
    .menu .contenedor nav ul{
        background-image: url(./imagenes/icons8-menu.svg);
        height: 28px;
        background-repeat: no-repeat;
        margin: 0px 0px;
    }

*/