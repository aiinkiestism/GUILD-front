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
        lic = document.getElementById("l-inner-content"),
        pic = document.getElementById("p-inner-content"),
        rlic = document.getElementById("rl-inner-content"),
        rdic = document.getElementById("rd-inner-content"),
        reic = document.getElementById("re-inner-content"),
        topnav = document.getElementById("top-nav"),
        di = document.getElementsByClassName("dashboard-item"),
        dinone = document.getElementsByClassName("dashboard-item-none"),
        hbtn = document.getElementById("help-btn"),
        outp = document.getElementsByClassName("outp"),
        prog = document.getElementsByClassName("prog"),
        modal = document.getElementsByClassName("modal"),
        vw = document.getElementsByClassName("voting-wrap"),
        iw = document.getElementById("input-wrap"),
        participant = document.getElementsByClassName("participant"),
        chatwrap = document.getElementsByClassName("chat-wrap"),
        hovercontent = document.getElementsByClassName("hover-content"),
        reportwrap = document.getElementsByClassName("report-wrap"),
        ppc = document.getElementsByClassName("progress-pie-chart");
    
    const vinone = document.getElementById("voting-item-none"),
        vi = document.getElementsByClassName("voting-item"),
        ynbtn = document.getElementById("yn-btn"),
        cbtn = document.getElementById("confirm-btn"),
        mbtn = document.getElementById("modify-btn"),
        vbtn = document.getElementById("vote-btn"),
        clbtn = document.getElementById("close-btn"),
        mask = document.getElementById("mask"),
        vbtn2 = document.getElementById("vote-btn2"),
        sbtn = document.getElementById("save-btn");

         // initialization process
    try {
        dinone[1].setAttribute('style', "opacity: 0;");
        dinone[2].setAttribute('style', "opacity: 0;");
        dinone[3].setAttribute('style', "opacity: 0;");
    } catch (e) {
        console.log("dinones are nowhere.");
    }

    // hover behaviours in left menu
    let currentUrl = location.href;
    // Promise

    // implement togglemenu
    toggle.addEventListener("click", function() {
        lmenu.setAttribute('style', "display: none !important;");
        lmenua.setAttribute('style', "display: block;");
        topnav.classList.add("top-nav-after")
        try {
            ic.classList.add("inner-content-after");
            ic.setAttribute('style', "display: block;");
        } catch (e) {
            console.log("ic is nowhere.");
        }
        try {
            vic.classList.add("v-inner-content-after");
            vic.setAttribute('style', "display: block;");
        } catch (e) {
            console.log("vic is nowhere.");
        }
        try {
            lic.classList.add("l-inner-content-after");
            lic.setAttribute('style', "display: block;");
            iw.classList.add("input-wrap-after");
            iw.setAttribute('style', "display: block;");
        } catch (e) {
            console.log("lic and iw are nowhere.");
        }
        try {
            pic.classList.add("p-inner-content-after");
            pic.setAttribute('style', "display: block;");
        } catch (e) {
            console.log("pic is nowhere.");
        }
        try {
            rlic.classList.add("rl-inner-content-after");
            rlic.setAttribute('style', "display: block;");
        } catch (e) {
            console.log("rlic is nowhere.");
        }
        try {
            rdic.classList.add("rd-inner-content-after");
            rdic.setAttribute('style', "display: block;");
        } catch (e) {
            console.log("rdic is nowhere.");
        }
        try {
            reic.classList.add("re-inner-content-after");
            reic.setAttribute('style', "display: block;");
        } catch (e) {
            console.log("reic is nowhere.");
        }

        topnav.setAttribute('style', "display: block;");
        // if (window.matchMedia("screen and (max-width: 450px)").matches) {
        //     lmenu.classList.add("animation-before");
        //     lmenu.classList.remove("animation-after");
        // }
    });

    togglea.addEventListener("click", function() {
        lmenua.setAttribute('style', "display: none");
        lmenu.setAttribute('style', "display: block !important;");
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
        try {
            lic.classList.remove("l-inner-content-after");
            iw.classList.remove("input-wrap-after");
        } catch (e) {
            console.log("lic iw are nowhere.");
        }
        try {
            pic.classList.remove("p-inner-content-after");
        } catch (e) {
            console.log("pic is nowhere.");
        }
        try {
            rlic.classList.remove("rl-inner-content-after");
        } catch (e) {
            console.log("rlic is nowhere.");
        }
        try {
            rdic.classList.remove("rd-inner-content-after");
        } catch (e) {
            console.log("rdic is nowhere.");
        }
        try {
            reic.classList.remove("re-inner-content-after");
        } catch (e) {
            console.log("reic is nowhere.");
        }

        if (window.matchMedia("screen and (max-width: 700px)").matches) {
            try {
                ic.setAttribute('style', "display: none;");
            } catch (e) {
                console.log("ic is nowhere.");
            }
            try {
                vic.setAttribute('style', "display: none;");
            } catch (e) {
                console.log("vic is nowhere.");
            }
            try {
                lic.setAttribute('style', "display: none;");
            } catch (e) {
                console.log("lic is nowhere.");
            }
            try {
                pic.setAttribute('style', "display: none;");
            } catch (e) {
                console.log("pic is nowhere.");
            }
            try {
                rlic.setAttribute('style', "display: none;");
            } catch (e) {
                console.log("rlic is nowhere.");
            }
            try {
                rdic.setAttribute('style', "display: none;");
            } catch (e) {
                console.log("rdic is nowhere.");
            }
            try {
                reic.setAttribute('style', "display: none;");
            } catch (e) {
                console.log("reic is nowhere.");
            }

            topnav.setAttribute('style', "display: none;");
            // lmenu.classList.add("animation-after");
            // lmenu.classList.remove("animation-before");
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
        lResizeContent();
        pResizeContent();
    } 
    if (window.matchMedia("screen and (max-width: 780px)").matches) {
        lmenu.setAttribute('style', "display: none;");
        lmenua.setAttribute('style', "display: block;");
        topnav.classList.add("top-nav-after");
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
        try {
            lic.classList.add("l-inner-content-after");
            iw.classList.add("input-wrap-after");
        } catch (e) {
            console.log("lic and iw are nowhere.");
        }
        try {
            pic.classList.add("p-inner-content-after");
        } catch (e) {
            console.log("pic is nowhere");
        }
        try {
            rlic.classList.add("rl-inner-content-after");
        } catch (e) {
            console.log("rlic is nowhere.");
        }
        try {
            rdic.classList.add("rd-inner-content-after");
        } catch (e) {
            console.log("rdic is nowhere.");
        }
        try {
            reic.classList.add("re-inner-content-after");
        } catch (e) {
            console.log("reic is nowhere.");
        }
    }
    if (window.matchMedia("screen and (max-width: 580px)").matches) {
        lResizeContent();
        lResizeContent2();
        pResizeContent2();
    }
    if (window.matchMedia("screen and (max-width: 500px)").matches) {
        vResizeContent();
    }
    if (window.matchMedia("screen and (max-width: 450px)").matches) {
        resizeContent4();
        // lmenu.classList.add("animation-before");
        // lmenu.classList.remove("animation-after");
    }


    window.addEventListener('resize', function(e) {
        if (e.target.innerWidth <= 1500) {
            setTimeout(function() {
                resizeContent();
                try {
                    dinone[3].setAttribute('style', "display: none;");
                } catch (e) {
                    console.log("dinone[3] is nowehre.");
                }
                try {
                    if (di[2].parentNode == diwrap2) {
                        revertContent2();
                    }
                } catch (e) {
                    console.log("diwraps are nowhere.");
                }
                try {
                    if (dinone[1].parentNode == diwrap2 || dinone[2].parentNode == diwrap2) {
                        diwrap3.insertBefore(dinone[2], null);
                        diwrap3.insertBefore(dinone[1], null);
                    }
                } catch (e) {
                    console.log("dinones are nowhere.");
                }
                lRevertContent();
                lRevertContent2();
                pRevertContent();
            }, 0);
        } 
        if (e.target.innerWidth > 1500) {
            setTimeout(function() {
                try {
                    if (di[2].parentNode == diwrap2) {
                        revertContent2();
                    }
                } catch (e) {
                    console.log("diwraps are nowhere.");
                }
                revertContent();
                try {
                    dinone[2].setAttribute('style', "display: block; opacity: 0;");
                    dinone[1].setAttribute('style', "display: block; opacity: 0;");
                } catch (e) {
                    console.log("dinone is nowhere.");
                }
                lRevertContent();
                lRevertContent2();
                pRevertContent();
            }, 0);
        }
        if (e.target.innerWidth <= 1250) {
            setTimeout(function() {
                resizeContent3();
                resizeContent2();
                lResizeContent();
                lRevertContent2();
                pResizeContent();
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
            try {
                lic.classList.remove("l-inner-content-after");
                iw.classList.remove("input-wrap-after");
            } catch (e) {
                console.log("lic is nowhere.");
            }
            try {
                pic.classList.remove("p-inner-content-after");
            } catch (e) {
                console.log("pic is nowhere.");
            }
            try {
                rlic.classList.remove("rl-inner-content-after");
            } catch (e) {
                console.log("rlic is nowhere.");
            }
            try {
                rdic.classList.remove("rd-inner-content-after");
            } catch (e) {
                console.log("rdic is nowhere.");
            }
            try {
                reic.classList.remove("re-inner-content-after");
            } catch (e) {
                console.log("reic is nowhere.");
            }

        }
        if (e.target.innerWidth <= 780) {
            lmenu.setAttribute('style', "display: none;");
            lmenua.setAttribute('style', "display: block;");
            topnav.classList.add("top-nav-after");
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

            try {
                lic.classList.add("l-inner-content-after");
                iw.classList.add("input-wrap-after");
            } catch (e) {
                console.log("lic and iw are nowhere.");
            }
            try {
                pic.classList.add("p-inner-content-after");
            } catch (e) {
                console.log("pic is nowhere.");
            }
            try {
                rlic.classList.add("rl-inner-content-after");
            } catch (e) {
                console.log("rlic is nowhere.");
            }
            try {
                rdic.classList.add("rd-inner-content-after");
            } catch (e) {
                console.log("rdic is nowhere.");
            }
            try {
                reic.classList.add("re-inner-content-after");
            } catch (e) {
                console.log("reic is nowhere.");
            }

            try {
                if(di[1].parentNode == diwrap2) {
                    revertContent4();
                    // lmenu.classList.remove("animation-before");
                    // lmenu.classList.remove("animation-after");
                }
            } catch (e) {
                console.log("di[1] is nowhere.");
            }
            try {
                if (vinone.parentNode == vw[3]) {
                    vRevertContent();
                }
            } catch (e) {
                console.log("vi[1] is nowhere.");
            }
            lRevertContent2();
            pRevertContent2();
        }
        if (e.target.innerWidth <= 580) {
            setTimeout(function() {
                lResizeContent2();
                pResizeContent2();
            }, 0)
        } 
        if (e.target.innerWidth <= 500) {
            setTimeout(function() {
                vResizeContent();
            }, 0);
        }
        if (e.target.innerWidth <= 450) {
            setTimeout(function() {
                resizeContent4();
                // lmenu.classList.add("animation-before");
                // lmenu.classList.remove("animation-after");
            }, 0);
        }
    });

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


    // hover event of chat unit in lobby page 
        for (let i = 0; i < 50; i++) {
            try {
                chatwrap[i].addEventListener("mouseenter", function() {
                    hovercontent[i].setAttribute('style', "display: block;");
                }, false);
        
                chatwrap[i].addEventListener("mouseleave", function() {
                    hovercontent[i].setAttribute('style', "display: none;");
                }, false);
            } catch (e) {
                console.log("chatwraps or event is not inspected.");
            }
        }

    
    //click event of report wraps in report list page
        for (let i = 0; i < 50; i++) {
            try {
                reportwrap[i].addEventListener("click", function() {
                    location.replace("/report-detail.html");
                }, false);
            } catch (e) {
                console.log("reportwrap is nowhere.");
            }
        }

    // click event of save btn in report edit page
    if (sbtn != null) {
        sbtn.addEventListener("click", function() {
            location.replace("report-list.html");
        }, false);
    }

    // progress chart alignment in progress page
    try {
        if (ppc != null) {
            for (let i = 0; i < 50; i++) {
                let percent = ppc[i].getAttribute("data-percent"),
                    pieDeg = 360 * percent / 100,
                    ppcProgress = document.getElementsByClassName("ppc-progress"),
                    ppf = document.getElementsByClassName("ppc-progress-fill"),
                    percentNum = document.getElementsByClassName("percent-num");
        
                parseInt(percent);
                if (percent > 50) {
                    ppc[i].classList.add('gt-50');
                    ppcProgress[i].classList.add('gt-50');
                    // ppc[i].setAttribute('style', "background: linear-gradient(" + pieDeg/2 + "deg, #87d7c4, #c2e2a3, #87d7c4);");
                }
                // if (percent <= 50) {
                //     ppf[i].setAttribute('style', "background: linear-gradient(" + pieDeg/2 + "deg, #87d7c4, #c2e2a3, #87d7c4);");
                // }
    
                ppf[i].setAttribute('style', "transform: rotate(" + pieDeg + "deg);");
                percentNum[i].textContent = percent + "%";
            }
        }
    } catch (e) {
        console.log("This is not the progress page.");
    }


    

    // content management functions in top page
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
        try {
            diwrap2.insertBefore(di[2], di[3]);
            diwrap3.insertBefore(di[4], null);
            diwrap3.insertBefore(dinone[0], null);
        } catch (e) {
            console.log("diwraps are nowhere.");
        }
    }

    function revertContent2() {
        diwrap.insertBefore(di[2], null);
        diwrap2.insertBefore(di[4], null);
        diwrap2.insertBefore(dinone[0], null);
    }

    function resizeContent3() {
        try {
            let diwrap4 = document.getElementById('d-item-wrap4'),
                diwrap5 = document.getElementById('d-item-wrap5');
            diwrap5.insertBefore(dinone[3], null);
            diwrap4.insertBefore(dinone[2], null);
            diwrap4.insertBefore(dinone[1], null);
        } catch (e) {
            console.log("diwraps are nowhere.");
        }
    }

    function resizeContent4() {
        try {
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

        ic.insertBefore(hbtn, null);
        } catch (e) {
            console.log("home page's process was ignored.");
        } 
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
        dinone[0].setAttribute('style', "display: block;");   
    }

    // content management functions in voting page
    function vResizeContent() {
        try {
            vw[3].insertBefore(vinone, null);
            vw[2].insertBefore(vi[2], null);
            vw[1].insertBefore(vi[1], null);
        } catch (e) {
            console.log("voitng page's process was ignored");
        }
    }

    function vRevertContent() {
        try {
            vw[0].insertBefore(vi[1], null);
            vw[1].insertBefore(vi[2], null);
            vw[1].insertBefore(vinone, null);
        } catch (e) {
            console.log("voting page's process was ignored.");
        }
    }

    // content management functions in lobby page
    function lResizeContent() {
        try {
            participant[4].setAttribute('style', "display: none;");
            participant[5].setAttribute('style', "display: none;");
        } catch (e) {
            console.log("participant are nowhere.");
        }
    }

    function lRevertContent() {
        try {
            participant[4].setAttribute('style', "display: block;");
            participant[5].setAttribute('style', "display: block;");
        } catch (e) {
            console.log("participant are nowhere.");
        }
    }

    function lResizeContent2() {
        try {
            participant[3].setAttribute('style', "display: none;");
            participant[2].setAttribute('style', "display: none;");
        } catch (e) {
            console.log("participant are nowhere.");
        }
    }

    function lRevertContent2() {
        try {
            participant[3].setAttribute('style', "display: block;");
            participant[2].setAttribute('style', "display: block;");
        } catch (e) {
            console.log("participant are nowhere.");
        }
    }

    // content management functions in progress page
    function pResizeContent() {
        try {
            let pCharts = document.getElementsByClassName("progresses-charts"),
            chartWrap = document.getElementsByClassName("chart-wrap"),
            pList = document.getElementsByClassName("progresses-list"),
            pListInner = document.getElementsByClassName("p-list-inner");

            pCharts[1].setAttribute('style', "display: flex;");
            pList[1].setAttribute('style', "display: flex;");

            pCharts[1].insertBefore(chartWrap[3], null);
            pCharts[1].insertBefore(chartWrap[2], null);
            pList[1].insertBefore(pListInner[1], null);
        } catch (e) {
            console.log("This is not the progress page.");
        }
    }

    function pRevertContent() {
        try {
            let pCharts = document.getElementsByClassName("progresses-charts"),
            chartWrap = document.getElementsByClassName("chart-wrap"),
            pList = document.getElementsByClassName("progresses-list"),
            pListInner = document.getElementsByClassName("p-list-inner");

            pCharts[1].setAttribute('style', "display: none;");
            pList[1].setAttribute('style', "display: none;");

            pCharts[0].insertBefore(chartWrap[2], null);
            pCharts[0].insertBefore(chartWrap[3], null);
            pList[0].insertBefore(pListInner[1], null);
        } catch (e) {
            console.log("This is not the progress page.");
        }
    }

    function pResizeContent2() {
        try {
            let pCharts = document.getElementsByClassName("progresses-charts"),
            chartWrap = document.getElementsByClassName("chart-wrap"),
            pList = document.getElementsByClassName("progresses-list"),
            pListInner = document.getElementsByClassName("p-list-inner");

        pCharts[2].setAttribute('style', "display: flex;");
        pCharts[3].setAttribute('style', "display: flex;");

        pCharts[3].insertBefore(chartWrap[3], null);
        pCharts[2].insertBefore(chartWrap[2], null);
        pCharts[1].insertBefore(chartWrap[1], null);
        } catch (e) {
            console.log("This is not the progress page.");
        }
    }

    function pRevertContent2() {
        try {
            let pCharts = document.getElementsByClassName("progresses-charts"),
            chartWrap = document.getElementsByClassName("chart-wrap"),
            pList = document.getElementsByClassName("progresses-list"),
            pListInner = document.getElementsByClassName("p-list-inner");

        pCharts[2].setAttribute('style', "display: none;");
        pCharts[3].setAttribute('style', "display: none;");

        pCharts[0].insertBefore(chartWrap[1], null);
        pCharts[1].insertBefore(chartWrap[2], null);
        pCharts[1].insertBefore(chartWrap[3], null);
        } catch (e) {
            console.log("This is not the progress page.");
        }
    }



})();