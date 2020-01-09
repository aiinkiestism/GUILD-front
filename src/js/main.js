(function() {
    'use strict';

    let diwrap = document.getElementById("d-item-wrap"),
        diwrap2 = document.getElementById("d-item-wrap2"),
        diwrap3 = document.getElementById("d-item-wrap3"),
        toggle = document.getElementById("toggle-menu"),
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
        vi = document.getElementsByClassName("voting-item"),
        ynbtn = document.getElementById("yn-btn"),
        cbtn = document.getElementById("confirm-btn"),
        mbtn = document.getElementById("modify-btn"),
        vbtn = document.getElementById("vote-btn"),
        clbtn = document.getElementById("close-btn"),
        mask = document.getElementById("mask"),
        vbtn2 = document.getElementById("vote-btn2");
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

        ic.setAttribute('style', "display: block;");
        topnav.setAttribute('style', "display: block;");
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

        if (window.matchMedia("screen and (max-width: 450px)").matches) {
            ic.setAttribute('style', "display: none;");
            topnav.setAttribute('style', "display: none;");
        }
    });

    // deal with responsive
    if (window.matchMedia("screen and (max-width: 1500px)").matches) {
        resizeContent();
    } 
    if (window.matchMedia("screen and (max-width: 1250px)").matches) {
        resizeContent();
        resizeContent3();
        resizeContent2();
    } 
    if (window.matchMedia("screen and (max-width: 780px)").matches) {
        lmenu.setAttribute('style', "display: none;");
        lmenua.setAttribute('style', "display: block;");
        topnav.classList.add("top-nav-after")
        try {
            ic.classList.add("inner-content-after");
        } catch (e) {
            console.log("ic is nowhere.");
        }
    }
    if (window.matchMedia("screen and (max-width: 450px)").matches) {
        resizeContent4();
    }

    window.addEventListener('resize', function(e) {
        if (e.target.innerWidth <= 1500) {
            setTimeout(function() {
                resizeContent();
                if (di[2].parentNode == diwrap2) {
                    revertContent2();
                }
                if (dinone[1].parentNode == diwrap2 || dinone[2].parentNode == diwrap2) {
                    diwrap3.insertBefore(dinone[2], null);
                    diwrap3.insertBefore(dinone[1], null);
                }
            }, 0);
        } 
        if (e.target.innerWidth > 1500) {
            setTimeout(function() {
                revertContent();
            }, 0);
        }
        if (e.target.innerWidth <= 1250) {
            setTimeout(function() {
                resizeContent3();
                resizeContent2();
            }, 0);
        }
        if (e.target.innerWidth > 780) {
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
        }
        if (e.target.innerWidth <= 780) {
            lmenu.setAttribute('style', "display: none;");
            lmenua.setAttribute('style', "display: block;");
            topnav.classList.add("top-nav-after")
            try {
                ic.classList.add("inner-content-after");
            } catch (e) {
                console.log("ic is nowhere.");
            }

            if(di[1].parentNode == diwrap2) {
                revertContent4();
            }
        }
        if (e.target.innerWidth <= 450) {
            setTimeout(function() {
                resizeContent4();
            }, 0);
        }
    });

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
    try {
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

        vi[0].addEventListener("click", function() {
            modal[4].classList.toggle("visible");
            mask.classList.toggle('visible');
        });
        vi[1].addEventListener("click", function() {
            modal[4].classList.toggle("visible");
            mask.classList.toggle('visible');
        });
        vi[2].addEventListener("click", function() {
            modal[4].classList.toggle("visible");
            mask.classList.toggle('visible');
        });
        vbtn2.addEventListener("click", function() {
            modal[4].classList.toggle("visible");
            mask.classList.toggle('visible');
        })

    } catch(e) {
        console.log("this is not voting page.");
    }


    function resizeContent() {
        try {
        diwrap2.insertBefore(di[3], di[4]);
        diwrap3.insertBefore(dinone[2], dinone[3]);
        diwrap3.insertBefore(dinone[1], dinone[2]);
        } catch {
            console.log("diwraps are nowhere.");
        }
    }

    function revertContent() {
        try {
        diwrap.insertBefore(di[3], null);
        diwrap2.insertBefore(dinone[1], null);
        diwrap2.insertBefore(dinone[2], null);
        } catch {
            console.log("diwraps are nowhere.");
        }
    }

    function resizeContent2() {
        diwrap2.insertBefore(di[2], di[3]);
        diwrap3.insertBefore(di[4], null);
        diwrap3.insertBefore(dinone[0], null);
    }

    function revertContent2() {
        diwrap.insertBefore(di[2], null);
        diwrap2.insertBefore(di[4], null);
        diwrap2.insertBefore(dinone[0], null);
    }

    // ic.insertBefore(hbtn, null);
    function resizeContent3() {
        let diwrap4 = document.getElementById('d-item-wrap4'),
            diwrap5 = document.getElementById('d-item-wrap5');
        diwrap5.insertBefore(dinone[3], null);
        diwrap4.insertBefore(dinone[2], null);
        diwrap4.insertBefore(dinone[1], null);
    }

    function resizeContent4() {
        let diwrap4 = document.getElementById('d-item-wrap4'),
            diwrap5 = document.getElementById('d-item-wrap5'),
            diwrap6 = document.getElementById('d-item-wrap6'),
            diwrap7 = document.getElementById('d-item-wrap7'),
            diwrap8 = document.getElementById('d-item-wrap8'),
            diwrap9 = document.getElementById('d-item-wrap9'),
            diwrap10 = document.getElementById('d-item-wrap10');

        dinone[1].setAttribute('style', "display: none;");
        dinone[2].setAttribute('style', "display: none;");
        dinone[3].setAttribute('style', "display: none;");

        diwrap6.insertBefore(dinone[0], null);
        diwrap5.insertBefore(di[4], null);
        diwrap4.insertBefore(di[3], null);
        diwrap3.insertBefore(di[2], null);
        diwrap2.insertBefore(di[1], null);
    }

    function revertContent4() {
        let diwrap4 = document.getElementById('d-item-wrap4'),
            diwrap5 = document.getElementById('d-item-wrap5'),
            diwrap6 = document.getElementById('d-item-wrap6'),
            diwrap7 = document.getElementById('d-item-wrap7'),
            diwrap8 = document.getElementById('d-item-wrap8'),
            diwrap9 = document.getElementById('d-item-wrap9'),
            diwrap10 = document.getElementById('d-item-wrap10');

        diwrap.insertBefore(di[1], null);
        diwrap2.insertBefore(di[2], null);
        diwrap2.insertBefore(di[3], null);
        diwrap3.insertBefore(di[4], null);
        diwrap3.insertBefore(dinone[0], null);        
    }

})();