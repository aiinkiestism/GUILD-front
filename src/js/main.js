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
        vic = document.getElementById("v-inner-content"),
        topnav = document.getElementById("top-nav"),
        di = document.getElementsByClassName("dashboard-item"),
        dinone = document.getElementsByClassName("dashboard-item-none"),
        hbtn = document.getElementById("help-btn"),
        outp = document.getElementsByClassName("outp"),
        prog = document.getElementsByClassName("prog"),
        modal = document.getElementsByClassName("modal");
    
    // try {
    const vinone = document.getElementById("voting-item-none"),
        ynbtn = document.getElementById("yn-btn"),
        cbtn = document.getElementById("confirm-btn"),
        mbtn = document.getElementById("modify-btn"),
        vbtn = document.getElementById("vote-btn"),
        clbtn = document.getElementById("close-btn"),
        mask = document.getElementById("mask");
    // } catch (e) {
    //     console.log("consts are nowhere");
    // }

    // initialization process
    try {
        dinone[1].setAttribute('style', "opacity: 0;");
        dinone[2].setAttribute('style', "opacity: 0;");
        dinone[3].setAttribute('style', "opacity: 0;");
    } catch (e) {
        console.log("dinones are nowhere.");
    }

    

    // implement togglemenu
    toggle.addEventListener("click", function() {
        lmenu.setAttribute('style', "display: none;");
        lmenua.setAttribute('style', "display: block;");
        topnav.classList.add("top-nav-after")
        try {
            ic.classList.add("inner-content-after");
        } catch (e) {
            console.log("ic is nowhere.");
        }
        try {
            vic.classList.add("v-inner-content-after");
        } catch (e) {
            console.log("vic is nowhere.");
        }
    });

    togglea.addEventListener("click", function() {
        lmenua.setAttribute('style', "display: none");
        lmenu.setAttribute('style', "display: block;");
        topnav.classList.remove("top-nav-after");
        try {
            ic.classList.remove("inner-content-after");
        } catch (e) {
            console.log("ic is nowhere.");
        }
        try {
            vic.classList.remove("v-inner-content-after");
        } catch (e) {
            console.log("vic is nowhere.");
        }
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

    //implement progress bar
    // addEventListener("", function() {
    //     switch(prog.value) {
    //         case :
    //             prog.value = ;
    //             outp.value = ;
    //             break;
    //         case :
    //             prog.value = ;
    //             outp.value = ;
    //             break;
    //         default:
    //             prog.value = ;
    //             outp.value = ;
    //     }
    // });

    // implememt new voting
    // try {
        vinone.addEventListener("click", function() {
            modal[0].classList.toggle('visible');
            mask.classList.toggle('visible');
        });
        ynbtn.addEventListener("click", function() {
            modal[0].classList.toggle('visible');
            modal[1].classList.toggle('visible');
        });
        cbtn.addEventListener("click", function() {
            modal[1].classList.toggle('visible');
            modal[2].classList.toggle('visible');
        });
        mbtn.addEventListener("click", function() {
            modal[1].classList.toggle('visible');
            modal[2].classList.toggle('visible');
        });
        vbtn.addEventListener("click", function() {
            modal[2].classList.toggle('visible');
            modal[3].classList.toggle('visible');
        });
        clbtn.addEventListener("click", function() {
            modal[3].classList.toggle('visible');
            mask.classList.toggle('visible');
        });
        if(mask.classList.contains("visible")) {
            mask.addEventListener("click", function() {
                console.log("clicked");
                modal[0].classList.remove("visible");
                modal[1].classList.remove("visible");
                modal[2].classList.remove("visible");
                modal[3].classList.remove("visible");
                mask.classList.remove("visible");
            });
        }
        // if(modal[0].classList.contains("visible") || 
        // modal[1].classList.contains("visible") ||
        // modal[2].classList.contains("visible") ||
        // modal[3].classList.contains("visible")) {
        //     window.addEventListener("click", function(e) {
        //         if(e.target != modal) {
        //             console.log("clicked");
        //             modal[0].classList.remove("visible");
        //             modal[1].classList.remove("visible");
        //             modal[2].classList.remove("visible");
        //             modal[3].classList.remove("visible");
        //             mask.classList.remove("visible");
        //         } 
        //      });
        // }
    // } catch(e) {
    //     console.log("this is not voting page.");
    // }




    function resizeContent() {
        try {
            let diwrap2 = di[4].parentNode,
                diwrap3 = dinone[3].parentNode;
        diwrap2.insertBefore(di[3], di[4]);
        diwrap3.insertBefore(dinone[2], dinone[3]);
        diwrap3.insertBefore(dinone[1], dinone[2]);
        } catch {
            console.log("diwraps are nowhere.");
        }
    }

    function revertContent() {
        try {
            let diwrap = di[2].parentNode,
                diwrap2 = dinone[0].parentNode;
        diwrap.insertBefore(di[3], null);
        diwrap2.insertBefore(dinone[1], null);
        diwrap2.insertBefore(dinone[2], null);
        } catch {
            console.log("diwraps are nowhere.");
        }
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