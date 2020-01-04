(function() {
    'use strict';

    let diwrap = document.getElementsByClassName("d-item-wrap"),
        diwrap2 = document.getElementsByClassName("d-item-wrap2"),
        diwrap3 = document.getElementsByClassName("d-item-wrap3");
    const toggle = document.getElementById("toggle-menu"),
        togglea = document.getElementById("toggle-menu-after"),
        lmenu = document.getElementById("left-menu"),
        lmenua = document.getElementById("left-menu-after"),
        ic = document.getElementById("inner-content"),
        topnav = document.getElementById("top-nav"),
        di = document.getElementsByClassName("dashboard-item"),
        dinone = document.getElementsByClassName("dashboard-item-none"),
        hbtn = document.getElementById("help-btn");

    // initialization process
    dinone[1].setAttribute('style', "opacity: 0;");
    dinone[2].setAttribute('style', "opacity: 0;");
    dinone[3].setAttribute('style', "opacity: 0;");

    // implement togglemenu
    toggle.addEventListener("click", function() {
        lmenu.setAttribute('style', "display: none;");
        lmenua.setAttribute('style', "display: block;");
        topnav.classList.add("top-nav-after")
        ic.classList.add("inner-content-after");
    });

    togglea.addEventListener("click", function() {
        lmenua.setAttribute('style', "display: none");
        lmenu.setAttribute('style', "display: block;");
        topnav.classList.remove("top-nav-after");
        ic.classList.remove("inner-content-after");
    });

    // deal with responsive3
    if(window.matchMedia("screen and (max-width: 1500px)").matches) {
        resizeContent();
    } 
    // if (window.matchMedia("screen and (max-width: 1050px)").matches) {
    //     // resizeContent();
    //     resizeContent2();
    //     // console.log("hello");
    // }

    window.addEventListener('resize', function(e) {
        if (e.target.innerWidth <= 1500) {
            setTimeout(function() {
                resizeContent();
            }, 0);
        } else if (e.target.innerWidth > 1500) {
            setTimeout(function() {
                revertContent();
            }, 0);
        } 
        // else if (e.target.innerWidth <= 1050) {
        //     setTimeout(function() {
        //         resizeContent2();
        //     }, 0);
        //     if(e.target.innerWidth > 1050) {
        //         setTimeout(function() {
        //             revertContent2();
        //         })
        //     }
        // }
    });
    // window.addEventListener('resize', function(e) {
    //     if (e.target.innerWidth)
    // })

    function resizeContent() {
        let diwrap2 = di[4].parentNode,
            diwrap3 = dinone[3].parentNode;
        diwrap2.insertBefore(di[3], di[4]);
        diwrap3.insertBefore(dinone[2], dinone[3]);
        diwrap3.insertBefore(dinone[1], dinone[2]);
    }

    function revertContent() {
        let diwrap = di[2].parentNode,
            diwrap2 = dinone[0].parentNode;
        diwrap.insertBefore(di[3], null);
        diwrap2.insertBefore(dinone[1], null);
        diwrap2.insertBefore(dinone[2], null);
    }

    // function resizeContent2() {
    //     let diwrap2 = di[3].parentNode,
    //         diwrap3 = dinone[1].parentNode;
    //     diwrap2.insertBefore(di[2], di[3]);
    //     diwrap3.insertBefore(dinone[0], dinone[1]);
    //     diwrap3.insertBefore(di[4], dinone[0]);
    // }

    // function revertContent2() {
    //     let diwrap = di[1].parentNode,
    //         diwrap2 = di[3].parentNode;
    //     diwrap.insertBefore(di[2], null);
    //     diwrap2.insertBefore(di[4], null);
    //     diwrap2.insertBefore(dinone[0], null);
    // }

    // ic.insertBefore(hbtn, null);


})();