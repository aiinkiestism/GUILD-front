(function (global) {
    'use strict';

    // document.addEventListener('DOMContentLoaded', function() {

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
        tlic = document.getElementById("tl-inner-content"),
        tllic = document.getElementById("tll-inner-content"),
        uic = document.getElementById("u-inner-content"),
        ueic = document.getElementById("ue-inner-content"),
        gmic = document.getElementById("gm-inner-content"),
        gmdic = document.getElementById("gmd-inner-content"),
        gmeic = document.getElementById("gme-inner-content"),
        kdic = document.getElementById("kd-inner-content"),
        ptic = document.getElementById("pt-inner-content"),
        mlic = document.getElementById("ml-inner-content"),
        rlic = document.getElementById("rl-inner-content"),
        rdic = document.getElementById("rd-inner-content"),
        reic = document.getElementById("re-inner-content"),
        topnav = document.getElementById("top-nav"),
        di = document.getElementsByClassName("dashboard-item"),
        dinone = document.getElementsByClassName("dashboard-item-none"),
        hbtn = document.getElementById("help-btn"),
        // outp = document.getElementsByClassName("outp"),
        // prog = document.getElementsByClassName("prog"),
        modal = document.getElementsByClassName("modal"),
        vw = document.getElementsByClassName("voting-wrap"),
        iw = document.getElementById("input-wrap"),
        participant = document.getElementsByClassName("participant"),
        chatwrap = document.getElementsByClassName("chat-wrap"),
        // taskUnit = document.getElementsByClassName("task-unit"),
        hovercontent = document.getElementsByClassName("hover-content"),
        // pthovercontent = document.getElementsByClassName("pt-hover-content"),
        reportwrap = document.getElementsByClassName("report-wrap"),
        ppc = document.getElementsByClassName("progress-pie-chart"),
        pToggle = document.getElementById('progress-toggle'),
        // mkgi = document.getElementById("mkgi"),
        // tagItem = document.getElementsByClassName("tag-item"),
        // mTagItem = document.getElementsByClassName("m-tag-item"),
        indexDetail = document.getElementsByClassName("index-detail"),
        qIndexDetail = document.getElementsByClassName("q-index-detail"),
        kiw = document.getElementsByClassName("kgi-inner-wrap"),
        mkgiTagInput = document.getElementById("mkgi-tag-input");
        // taskWrap = document.getElementsByClassName("task-wrap"),
        // thw = document.getElementsByClassName("task-hover-wrap");        

    const vinone = document.getElementById("voting-item-none"),
        vi = document.getElementsByClassName("voting-item"),
        mkiw = document.getElementsByClassName("mkgi-inner-wrap"),
        qkiw = document.getElementsByClassName("qkgi-inner-wrap"),
        // gmmiw = document.getElementById("gmm-inner-wrap"),
        // gmeiw = document.getElementById("gme-inner-wrap"),
        kaw = document.getElementsByClassName("kgi-addition-wrap"),
        ynbtn = document.getElementById("yn-btn"),
        cbtn = document.getElementById("confirm-btn"),
        mbtn = document.getElementById("modify-btn"),
        vbtn = document.getElementById("vote-btn"),
        clbtn = document.getElementById("close-btn"),
        mask = document.getElementById("mask"),
        // gmMask = document.getElementById("gm-mask"),
        vbtn2 = document.getElementById("vote-btn2"),
        sbtn = document.getElementById("save-btn");
        // khw = document.getElementsByClassName("kgi-hover-wrap"),
        // mkhw = document.getElementsByClassName("mkgi-hover-wrap"),
        // kgiEditBtn = document.getElementsByClassName("kgi-edit-btn"),
        // mkgiEditBtn = document.getElementsByClassName("mkgi-edit-btn");
        // gmdEditBtn = document.getElementById("gmm-edit-btn");

    // tagify setting
    let tagifySetting = {
        whitelist: ["組織全体", "マーケティング"],
        maxTags: 3,
        dropdown: {
            maxItems: 6,
            classname: "tag-dropdwon",
            enabled: 0,
            closeOnSelect: false
        }
    };

    if (mkgiTagInput) {
        new Tagify(mkgiTagInput, tagifySetting);
    }

    // initialization process
    try {
        dinone[1].setAttribute('style', "opacity: 0;");
        dinone[2].setAttribute('style', "opacity: 0;");
        dinone[3].setAttribute('style', "opacity: 0;");
    } catch (e) {
        // console.log("dinones are nowhere.");
    }

    // hover behaviours in left menu
    leftMenuHover();

    // pull-down menu in left menu
    if (pToggle) {
        pToggle.onclick = () => {
            let pullDown = document.getElementById('pull-down');
            pullDown.classList.toggle('open');
            let ba = document.getElementById('b4-arrow');
            ba.classList.toggle('progress-after');
        }
    }

    // implement togglemenu
    toggle.addEventListener("click", function () {
        lmenu.setAttribute('style', "display: none !important;");
        lmenua.setAttribute('style', "display: block;");
        topnav.classList.add("top-nav-after")
        try {
            ic.classList.add("inner-content-after");
            ic.setAttribute('style', "display: block;");
        } catch (e) {
            // console.log("ic is nowhere.");
        }
        try {
            vic.classList.add("v-inner-content-after");
            vic.setAttribute('style', "display: block;");
        } catch (e) {
            // console.log("vic is nowhere.");
        }
        try {
            lic.classList.add("l-inner-content-after");
            lic.setAttribute('style', "display: block;");
            iw.classList.add("input-wrap-after");
            iw.setAttribute('style', "display: block;");
        } catch (e) {
            // console.log("lic and iw are nowhere.");
        }
        try {
            pic.classList.add("p-inner-content-after");
            pic.setAttribute('style', "display: block;");
        } catch (e) {
            // console.log("pic is nowhere.");
        }
        try {
            tlic.classList.add("tl-inner-content-after");
            tlic.setAttribute('style', "display: block;");
        } catch (e) {
            // console.log("tlic is nowhere.");
        }
        try {
            tllic.classList.add("tll-inner-content-after");
            tllic.setAttribute('style', "display: block;");
        } catch (e) {
            // console.log("tllic is nowhere.");
        }
        try {
            uic.classList.add("u-inner-content-after");
            uic.setAttribute('style', "display: block;");
        } catch (e) {
            // console.log("uic is nowhere.");
        }
        try {
            ueic.classList.add("ue-inner-content-after");
            ueic.setAttribute('style', "display: block;");
        } catch (e) {
            // console.log("ueic is nowhere.");
        }
        try {
            gmic.classList.add("gm-inner-content-after");
            gmic.setAttribute('style', "display: block;");
        } catch (e) {
            // console.log("gmic is nowhere.");
        }
        try {
            gmdic.classList.add("gmd-inner-content-after");
            gmdic.setAttribute('style', "display: block;");
        } catch (e) {
            // console.log("gmdic is nowhere.");
        }
        try {
            gmeic.classList.add("gme-inner-content-after");
            gmeic.setAttribute('style', "display: block;");
        } catch (e) {
            // console.log("gmeic is nowhere.");
        }
        try {
            kdic.classList.add("kd-inner-content-after");
            kdic.setAttribute('style', "display: block;");
        } catch (e) {
            // console.log("kdic is nowhere.");
        }
        try {
            ptic.classList.add("pt-inner-content-after");
            ptic.setAttribute('style', "display: block;");
        } catch (e) {
            // console.log("ptic is nowhere.");
        }
        try {
            mlic.classList.add("ml-inner-content-after");
            mlic.setAttribute('style', "display: block;");
        } catch (e) {
            // console.log("mlic is nowhere.");
        }
        try {
            rlic.classList.add("rl-inner-content-after");
            rlic.setAttribute('style', "display: block;");
        } catch (e) {
            // console.log("rlic is nowhere.");
        }
        try {
            rdic.classList.add("rd-inner-content-after");
            rdic.setAttribute('style', "display: block;");
        } catch (e) {
            // console.log("rdic is nowhere.");
        }
        try {
            reic.classList.add("re-inner-content-after");
            reic.setAttribute('style', "display: block;");
        } catch (e) {
            // console.log("reic is nowhere.");
        }

        topnav.setAttribute('style', "display: block;");
        // if (window.matchMedia("screen and (max-width: 450px)").matches) {
        //     lmenu.classList.add("animation-before");
        //     lmenu.classList.remove("animation-after");
        // }
    });

    togglea.addEventListener("click", function () {
        lmenua.setAttribute('style', "display: none");
        lmenu.setAttribute('style', "display: block !important;");
        topnav.classList.remove("top-nav-after");
        try {
            ic.classList.remove("inner-content-after");
        } catch (e) {
            // console.log("ic is nowhere.");
        }
        try {
            vic.classList.remove("v-inner-content-after");
        } catch (e) {
            // console.log("vic is nowhere.");
        }
        try {
            lic.classList.remove("l-inner-content-after");
            iw.classList.remove("input-wrap-after");
        } catch (e) {
            // console.log("lic iw are nowhere.");
        }
        try {
            pic.classList.remove("p-inner-content-after");
        } catch (e) {
            // console.log("pic is nowhere.");
        }
        try {
            tlic.classList.remove("tl-inner-content-after");
        } catch (e) {
            // console.log("tlic is nowhere.");
        }
        try {
            tllic.classList.remove("tll-inner-content-after");
        } catch (e) {
            // console.log("tllic is nowhere.");
        }
        try {
            uic.classList.remove("u-inner-content-after");
        } catch (e) {
            // console.log("uic is nowhere.");
        }
        try {
            ueic.classList.remove("ue-inner-content-after");
        } catch (e) {
            // console.log("ueic is nowhere.");
        }
        try {
            gmic.classList.remove("gm-inner-content-after");
        } catch (e) {
            // console.log("gmic is nowhere.");
        }
        try {
            gmdic.classList.remove("gmd-inner-content-after");
        } catch (e) {
            // console.log("gmdic is nowhere.");
        }
        try {
            gmeic.classList.remove("gme-inner-content-after");
        } catch (e) {
            // console.log("gmeic is nowhere.");
        }
        try {
            kdic.classList.remove("kd-inner-content-after");
        } catch (e) {
            // console.log("kdic is nowhere.");
        }
        try {
            ptic.classList.remove("pt-inner-content-after");
        } catch (e) {
            // console.log("ptic is nowhere.");
        }
        try {
            mlic.classList.remove("ml-inner-content-after");
        } catch (e) {
            // console.log("mlic is nowhere.");
        }
        try {
            rlic.classList.remove("rl-inner-content-after");
        } catch (e) {
            // console.log("rlic is nowhere.");
        }
        try {
            rdic.classList.remove("rd-inner-content-after");
        } catch (e) {
            // console.log("rdic is nowhere.");
        }
        try {
            reic.classList.remove("re-inner-content-after");
        } catch (e) {
            // console.log("reic is nowhere.");
        }

        if (window.matchMedia("screen and (max-width: 700px)").matches) {
            try {
                ic.setAttribute('style', "display: none;");
            } catch (e) {
                // console.log("ic is nowhere.");
            }
            try {
                vic.setAttribute('style', "display: none;");
            } catch (e) {
                // console.log("vic is nowhere.");
            }
            try {
                lic.setAttribute('style', "display: none;");
            } catch (e) {
                // console.log("lic is nowhere.");
            }
            try {
                pic.setAttribute('style', "display: none;");
            } catch (e) {
                // console.log("pic is nowhere.");
            }
            try {
                tlic.setAttribute('style', "display: none;");
            } catch (e) {
                // console.log("tlic is nowhere.");
            }
            try {
                tllic.setAttribute('style', "display: none;");
            } catch (e) {
                // console.log("tllic is nowhere.");
            }
            try {
                uic.setAttribute('style', "display: none;");
            } catch (e) {
                // console.log("uic is nowhere.");
            }
            try {
                ueic.setAttribute('style', "display: none;");
            } catch (e) {
                // console.log("ueic is nowhere.");
            }
            try {
                gmic.setAttribute('style', "display: none;");
            } catch (e) {
                // console.log("gmic is nowhere.");
            }
            try {
                gmdic.setAttribute('style', "display: none;");
            } catch (e) {
                // console.log("gmdic is nowhere.");
            }
            try {
                gmeic.setAttribute('style', "display: none;");
            } catch (e) {
                // console.log("gmeic is nowhere.");
            }
            try {
                kdic.setAttribute('style', "display: none;");
            } catch (e) {
                // console.log("kdic is nowhere.");
            }
            try {
                ptic.setAttribute('style', "display: none;");
            } catch (e) {
                // console.log("ptic is nowhere.");
            }
            try {
                mlic.setAttribute('style', "display: none;");
            } catch (e) {
                // console.log("mlic is nowhere.");
            }
            try {
                rlic.setAttribute('style', "display: none;");
            } catch (e) {
                // console.log("rlic is nowhere.");
            }
            try {
                rdic.setAttribute('style', "display: none;");
            } catch (e) {
                // console.log("rdic is nowhere.");
            }
            try {
                reic.setAttribute('style', "display: none;");
            } catch (e) {
                // console.log("reic is nowhere.");
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
            // console.log("ic is nowhere.");
        }
        try {
            vic.classList.add("v-inner-content-after");
        } catch (e) {
            // console.log("vic is nowhere.");
        }
        try {
            lic.classList.add("l-inner-content-after");
            iw.classList.add("input-wrap-after");
        } catch (e) {
            // console.log("lic and iw are nowhere.");
        }
        try {
            pic.classList.add("p-inner-content-after");
        } catch (e) {
            // console.log("pic is nowhere");
        }
        try {
            tlic.classList.add("tl-inner-content-after");
        } catch (e) {
            // console.log("tlic is nowhere.");
        }
        try {
            tllic.classList.add("tll-inner-content-after");
        } catch (e) {
            // console.log("tllic is nowhere.");
        }
        try {
            uic.classList.add("u-inner-content-after");
        } catch (e) {
            // console.log("uic is nowhere.");
        }
        try {
            ueic.classList.add("ue-inner-content-after");
        } catch (e) {
            // console.log("ueic is nowhere.");
        }
        try {
            gmic.classList.add("gm-inner-content-after");
        } catch (e) {
            // console.log("gmic is nowhere.");
        }
        try {
            gmdic.classList.add("gmd-inner-content-after");
        } catch (e) {
            // console.log("gmdic is nowhere.");
        }
        try {
            gmeic.classList.add("gme-inner-content-after");
        } catch (e) {
            // console.log("gmeic is nowhere.");
        }
        try {
            kdic.classList.add("kd-inner-content-after");
        } catch (e) {
            // console.log("kdic is nowhere.");
        }
        try {
            ptic.classList.add("pt-inner-content-after");
        } catch (e) {
            // console.log("ptic is nowhere.");
        }
        try {
            mlic.classList.add("ml-inner-content-after");
        } catch (e) {
            // console.log("mlic is nowhere.");
        }
        try {
            rlic.classList.add("rl-inner-content-after");
        } catch (e) {
            // console.log("rlic is nowhere.");
        }
        try {
            rdic.classList.add("rd-inner-content-after");
        } catch (e) {
            // console.log("rdic is nowhere.");
        }
        try {
            reic.classList.add("re-inner-content-after");
        } catch (e) {
            // console.log("reic is nowhere.");
        }
    }
    if (window.matchMedia("screen and (max-width: 580px)").matches) {
        lResizeContent();
        lResizeContent2();
        pResizeContent2();

        try {
            let rmChildNodes = document.getElementById("right-menu").childNodes;
            for (let i = 0, max = rmChildNodes.length; i < max; i++) {
                let childNode = rmChildNodes[i]
                if (childNode.nodeType === 1) {
                    childNode.setAttribute('style', "display: none;");
                }
            }


            let rs = document.getElementById("right-select");
            rs.setAttribute('style', "display: block;");
        } catch (e) {
            // console.log("This is not the task-log page.");
        }
    }
    if (window.matchMedia("screen and (max-width: 500px)").matches) {
        vResizeContent();
    }
    if (window.matchMedia("screen and (max-width: 450px)").matches) {
        resizeContent4();
        // lmenu.classList.add("animation-before");
        // lmenu.classList.remove("animation-after");
    }


    window.addEventListener('resize', function (e) {
        if (e.target.innerWidth <= 1500) {
            // The link below should be changed on release!!!!
            // if (currentUrl === 'https://guild-dev.sakura.ne.jp/personal-tasks.html' ||
            // 'http://guild-dev.sakura.ne.jp/personal-tasks.html') {
            //     location.reload();
            // }

            setTimeout(function () {
                resizeContent();
                try {
                    dinone[3].setAttribute('style', "display: none;");
                } catch (e) {
                    // console.log("dinone[3] is nowehre.");
                }
                try {
                    if (di[2].parentNode === diwrap2) {
                        revertContent2();
                    }
                } catch (e) {
                    // console.log("diwraps are nowhere.");
                }
                try {
                    if (dinone[1].parentNode === diwrap2 || dinone[2].parentNode === diwrap2) {
                        diwrap3.insertBefore(dinone[2], null);
                        diwrap3.insertBefore(dinone[1], null);
                    }
                } catch (e) {
                    // console.log("dinones are nowhere.");
                }
                lRevertContent();
                lRevertContent2();
                pRevertContent();
            }, 0);
        }
        if (e.target.innerWidth > 1500) {
            setTimeout(function () {
                try {
                    if (di[2].parentNode === diwrap2) {
                        revertContent2();
                    }
                } catch (e) {
                    // console.log("diwraps are nowhere.");
                }
                revertContent();
                try {
                    dinone[2].setAttribute('style', "display: block; opacity: 0;");
                    dinone[1].setAttribute('style', "display: block; opacity: 0;");
                } catch (e) {
                    // console.log("dinone is nowhere.");
                }
                lRevertContent();
                lRevertContent2();
                pRevertContent();
            }, 0);
        }
        if (e.target.innerWidth <= 1250) {
            setTimeout(function () {
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
                // console.log("ic is nowhere.");
            }
            try {
                vic.classList.remove("v-inner-content-after");
            } catch (e) {
                // console.log("vic is nowhere.");
            }
            try {
                lic.classList.remove("l-inner-content-after");
                iw.classList.remove("input-wrap-after");
            } catch (e) {
                // console.log("lic is nowhere.");
            }
            try {
                pic.classList.remove("p-inner-content-after");
            } catch (e) {
                // console.log("pic is nowhere.");
            }
            try {
                tlic.classList.remove("tl-inner-content-after");
            } catch (e) {
                // console.log("tlic is nowhere.");
            }
            try {
                tllic.classList.remove("tll-inner-content-after");
            } catch (e) {
                // console.log("tllic is nowhere.");
            }
            try {
                uic.classList.remove("u-inner-content-after");
            } catch (e) {
                // console.log("uic is nowhere.");
            }
            try {
                ueic.classList.remove("ue-inner-content-after");
            } catch (e) {
                // console.log("ueic is nowhere.");
            }
            try {
                gmic.classList.remove("gm-inner-content-after");
            } catch (e) {
                // console.log("gmic is nowhere.");
            }
            try {
                gmdic.classList.remove("gmd-inner-content-after");
            } catch (e) {
                // console.log("gmdic is nowhere.");
            }
            try {
                gmeic.classList.remove("gme-inner-content-after");
            } catch (e) {
                // console.log("gmeic is nowhere.");
            }
            try {
                kdic.classList.remove("kd-inner-content-after");
            } catch (e) {
                // console.log("kdic is nowhere.");
            }
            try {
                ptic.classList.remove("pt-inner-content-after");
            } catch (e) {
                // console.log("ptic is nowhere.");
            }
            try {
                mlic.classList.remove("ml-inner-content-after");
            } catch (e) {
                // console.log("mlic is nowhere.");
            }
            try {
                rlic.classList.remove("rl-inner-content-after");
            } catch (e) {
                // console.log("rlic is nowhere.");
            }
            try {
                rdic.classList.remove("rd-inner-content-after");
            } catch (e) {
                // console.log("rdic is nowhere.");
            }
            try {
                reic.classList.remove("re-inner-content-after");
            } catch (e) {
                // console.log("reic is nowhere.");
            }

        }
        if (e.target.innerWidth <= 780) {
            // The link below should be changed on release!!!! why members-list page is also reloading
            // if (currentUrl === 'https://guild-dev.sakura.ne.jp/personal-tasks.html' ||
            // 'http://guild-dev.sakura.ne.jp/personal-tasks.html') {
            //     location.reload();
            // }
            
            lmenu.setAttribute('style', "display: none;");
            lmenua.setAttribute('style', "display: block;");
            topnav.classList.add("top-nav-after");
            try {
                ic.classList.add("inner-content-after");
            } catch (e) {
                // console.log("ic is nowhere.");
            }

            try {
                vic.classList.add("v-inner-content-after");
            } catch (e) {
                // console.log("vic is nowhere.");
            }

            try {
                lic.classList.add("l-inner-content-after");
                iw.classList.add("input-wrap-after");
            } catch (e) {
                // console.log("lic and iw are nowhere.");
            }
            try {
                pic.classList.add("p-inner-content-after");
            } catch (e) {
                // console.log("pic is nowhere.");
            }
            try {
                tlic.classList.add("tl-inner-content-after");
            } catch (e) {
                // console.log("tlic is nowhere.");
            }
            try {
                tllic.classList.add("tll-inner-content-after");
            } catch (e) {
                // console.log("tllic is nowhere.");
            }
            try {
                uic.classList.add("u-inner-content-after");
            } catch (e) {
                // console.log("uic is nowhere.");
            }
            try {
                ueic.classList.add("ue-inner-content-after");
            } catch (e) {
                // console.log("ueic is nowhere.");
            }
            try {
                gmic.classList.add("gm-inner-content-after");
            } catch (e) {
                // console.log("gmic is nowhere.");
            }
            try {
                gmdic.classList.add("gmd-inner-content-after");
            } catch (e) {
                // console.log("gmdic is nowhere.");
            }
            try {
                gmeic.classList.add("gme-inner-content-after");
            } catch (e) {
                // console.log("gmeic is nowhere.");
            }
            try {
                kdic.classList.add("kd-inner-content-after");
            } catch (e) {
                // console.log("kdic is nowhere.");
            }
            try {
                ptic.classList.add("pt-inner-content-after");
            } catch (e) {
                // console.log("ptic is nowhere.");
            }
            try {
                mlic.classList.add("ml-inner-content-after");
            } catch (e) {
                // console.log("mlic is nowhere.");
            }
            try {
                rlic.classList.add("rl-inner-content-after");
            } catch (e) {
                // console.log("rlic is nowhere.");
            }
            try {
                rdic.classList.add("rd-inner-content-after");
            } catch (e) {
                // console.log("rdic is nowhere.");
            }
            try {
                reic.classList.add("re-inner-content-after");
            } catch (e) {
                // console.log("reic is nowhere.");
            }
            e.stopPropagation();
            try {
                if (di[1].parentNode === diwrap2) {
                    revertContent4();
                    // lmenu.classList.remove("animation-before");
                    // lmenu.classList.remove("animation-after");
                }
            } catch (e) {
                // console.log("di[1] is nowhere.");
            }
            try {
                if (vinone.parentNode === vw[3]) {
                    vRevertContent();
                }
            } catch (e) {
                // console.log("vi[1] is nowhere.");
            }
            lRevertContent2();
            pRevertContent2();

            try {
                let rmChildNodes = document.getElementById("right-menu").childNodes;
                for (let i = 0, max = rmChildNodes.length; i < max; i++) {
                    let childNode = rmChildNodes[i];
                    if (childNode.nodeType === 1) {
                        childNode.setAttribute('style', "display: inline-block;");
                    }
                }

                let rs = document.getElementById("right-select");
                rs.setAttribute('style', "display: none;");
            } catch (e) {
                // console.log("This is not the task-log page.");
            }
        }
        if (e.target.innerWidth <= 580) {
            setTimeout(function () {
                lResizeContent2();
                pResizeContent2();

                try {
                    let rmChildNodes = document.getElementById("right-menu").childNodes;
                    for (let i = 0, max = rmChildNodes.length; i < max; i++) {
                        let childNode = rmChildNodes[i];
                        if (childNode.nodeType === 1) {
                            childNode.setAttribute('style', "display: none;");
                        }
                    }

                    let rs = document.getElementById("right-select");
                    rs.setAttribute('style', "display: block;");
                } catch (e) {
                    // console.log("This is not the task-log page.");
                }
            }, 0)
        }
        if (e.target.innerWidth <= 500) {
            setTimeout(function () {
                vResizeContent();
            }, 0);
        }
        if (e.target.innerWidth <= 450) {
            setTimeout(function () {
                resizeContent4();
                // lmenu.classList.add("animation-before");
                // lmenu.classList.remove("animation-after");
            }, 0);
        }
    });

    // implememt new voting
    try {
        window.addEventListener("click", function (e) {
            if (e.target === mask) {
                for (let i = 0, max = modal.length; i < max; i++) {
                    modal[i].classList.remove("visible");
                    // console.log("clicked")
                }
                mask.classList.remove("visible");
                // console.log("clicked2")
            }
        });

        vinone.addEventListener("click", function (e) {
            modal[0].classList.toggle('visible');
            mask.classList.toggle('visible');
            e.stopPropagation();
            // console.log(mask.classList.contains("visible"));
        });
        ynbtn.addEventListener("click", function (e) {
            modal[0].classList.toggle('visible');
            modal[1].classList.toggle('visible');
            e.stopPropagation();
            // console.log(mask.classList.contains("visible"));
        });
        cbtn.addEventListener("click", function (e) {
            modal[1].classList.toggle('visible');
            modal[2].classList.toggle('visible');
            e.stopPropagation();
            // console.log(mask.classList.contains("visible"));
        });
        mbtn.addEventListener("click", function (e) {
            modal[1].classList.toggle('visible');
            modal[2].classList.toggle('visible');
            e.stopPropagation();
        });
        vbtn.addEventListener("click", function (e) {
            modal[2].classList.toggle('visible');
            modal[3].classList.toggle('visible');
            e.stopPropagation();
        });
        clbtn.addEventListener("click", function (e) {
            modal[3].classList.toggle('visible');
            mask.classList.toggle('visible');
            e.stopPropagation();
        });

        vi[0].addEventListener("click", function (e) {
            modal[4].classList.toggle("visible");
            mask.classList.toggle('visible');
            e.stopPropagation();
        });
        vi[1].addEventListener("click", function (e) {
            modal[4].classList.toggle("visible");
            mask.classList.toggle('visible');
            e.stopPropagation();
        });
        vi[2].addEventListener("click", function (e) {
            modal[4].classList.toggle("visible");
            mask.classList.toggle('visible');
            e.stopPropagation();
        });
        vbtn2.addEventListener("click", function (e) {
            modal[4].classList.toggle("visible");
            mask.classList.toggle('visible');
            e.stopPropagation();
        });

    } catch (e) {
        // console.log("this is not voting page.");
    }

    // implement modal behaviors in the goal manager page
    // try {
    //     window.addEventListener("click", function (e) {
    //         // console.log(e.target);
    //         if (e.target === gmMask) {
    //             gmmiw.classList.remove("visible");
    //             gmeiw.classList.remove("visible");
    //             // console.log("clicked3");
    //             gmMask.classList.remove("visible");
    //             // console.log("clicked2");
    //         }
    //     }, false);

    //     for (let i = 0, max = kiw.length; i < max; i++) {
    //         kiw[i].addEventListener("click", function (e) {
    //             gmmiw.classList.add("visible");
    //             // console.log("clicked4")
    //             gmMask.classList.add('visible');
    //             // console.log("clicked5");
    //             e.stopPropagation();
    //             // console.log("clicked");
    //         }, false);
    //     }

    //     gmdEditBtn.onclick = e => {
    //         gmmiw.classList.remove("visible");
    //         gmeiw.classList.add("visible");
    //         e.stopPropagation();
    //     }

    //     // for (let i = 0, max = kaw.length; i < max; i++) {
    //     //     kaw[i].addEventListener("click", function(e) {
    //     //         gmeiw.classList.add("visble");
    //     //         e.stopPropagation();
    //     //     }, false);
    //     // }

    // } catch (e) {
    //     // console.log("This is not goal manager page.");
    // }

    // hover event of task unit in personal tasks page
    // try {   
    //     for (let i = 0, max = taskUnit.length; i < max; i++) {
    //         taskUnit[i].addEventListener("mouseenter", function(e) {
    //             console.log(pthovercontent[i]);
    //             pthovercontent[i].setAttribute('style', "display: block !important;");
    //             e.target.firstElementChild.setAttribute('style', "opacity: 0.6;");
    //         }, false);

    //         taskUnit[i].addEventListener("mouseleave", function(e) {
    //             pthovercontent[i].setAttribute('style', "display: none !important;");
    //             e.target.firstElementChild.setAttribute('style', "opacity: 1;");
    //         }, false);
    //     }
    // } catch (e) {
    //     // console.log("taskUnits or event is not inspected.");
    // }

    //hover event of task unit in task list page
    // try {
    //     for (let i = 0, max = taskWrap.length; i < max; i++) {
    //         taskWrap[i].addEventListener("mouseenter", function() {
    //             thw[i].setAttribute("style", "display: block;");
    //         }, false);

    //         taskWrap[i].addEventListener("mouseleave", function() {
    //             thw[i].setAttribute("style", "display: none;");
    //         }, false);
    //     }
    // } catch (e) {
    //     // console.log("This is not the task list page.");
    // }

    // hover event of chat unit in lobby page 
    for (let i = 0, max = chatwrap.length; i < max; i++) {
        try {
            chatwrap[i].addEventListener("mouseenter", function () {
                hovercontent[i].setAttribute('style', "display: block;");
            }, false);

            chatwrap[i].addEventListener("mouseleave", function () {
                hovercontent[i].setAttribute('style', "display: none;");
            }, false);
        } catch (e) {
            // console.log("chatwraps or event is not inspected.");
        }
    }


    //click event of report wraps in report list page
    for (let i = 0, max = reportwrap.length; i < max; i++) {
        try {
            reportwrap[i].addEventListener("click", function () {
                location.replace("/report-detail.html");
            }, false);
        } catch (e) {
            // console.log("reportwrap is nowhere.");
        }
    }

    // click event of save btn in report edit page
    if (sbtn != null) {
        sbtn.addEventListener("click", function () {
            location.replace("report-list.html");
        }, false);
    }

    // progress chart alignment in progress page
    try {
        if (ppc != null) {
            for (let i = 0, max = ppc.length; i < max; i++) {
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
        // console.log("This is not the progress page.");
    }

    // new kgi addition behaviors in goal manager pages
    try {

        for (let i = 0, max = kaw.length; i < max; i++) {
            
            if (i === 0) {
                
                kaw[i].addEventListener("click", function() {
                    let kgiEditWrap = document.createElement("div"),
                        kgiTextarea = document.createElement("textarea"),
                        // kgiEditProgressWrap = document.createElement("div"),
                        // progressBar = document.createElement("progress"),
                        tagInput = document.createElement("input"),
                        kgiAddBtn = document.createElement("div"),
                        kgiAddBtnTxt = document.createElement("p");
    
                    
                    kaw[i].parentNode.insertBefore(kgiEditWrap, kaw[i]);
                    kgiEditWrap.setAttribute("id", "kgi-edit-wrap");
        
                    kaw[i].setAttribute("style", "display: none;");
        
                    kgiEditWrap.insertBefore(kgiTextarea, null);
                    kgiTextarea.setAttribute("name", "kgi-edit-title");
                    kgiTextarea.setAttribute("id", "kgi-edit-title");
                    kgiTextarea.setAttribute("placeholder", "KGIのタイトル");
        
                    // kgiEditWrap.insertBefore(kgiEditProgressWrap, null);
                    // kgiEditProgressWrap.setAttribute("id", "kgi-edit-progress-wrap");
                    // kgitEditProgressWrap.insertBefore(progressBar, null);
        
                    kgiEditWrap.insertBefore(tagInput, null);
                    tagInput.setAttribute("id", "tag-input");
                    // tagInput.setAttribute("value", "");
                    tagInput.setAttribute("placeholder", "KGIのタグ");
                    new Tagify(tagInput, tagifySetting);
                    // Tagify(tagInput, tagifySetting);
                    
                    kgiEditWrap.insertBefore(kgiAddBtn, null);
                    kgiAddBtn.setAttribute("id", "kgi-add-btn");
                    kgiAddBtn.insertBefore(kgiAddBtnTxt, null);
                    kgiAddBtnTxt.textContent = '追加する';
        
                    kgiAddBtn.addEventListener("click", function(e) {
                        let newKiw = kiw[i].cloneNode(true);
                        // if (indexDetail[i].parentNode.parentNode.parentNode === newKiw) {
                            indexDetail[i].textContent = kgiTextarea.value;
                        // }
    
                        kaw[i].parentNode.replaceChild(kaw[i], kgiEditWrap);
                        kaw[i].setAttribute("style", "display: block; width: 347px;");
    
                        kaw[i].parentNode.insertBefore(newKiw, kiw[i]);
                        kaw[i].parentNode.insertBefore(kiw[1], kaw[i]);

                        slickResize();
                        
                    }, false);
    
                }, false);

            }

            if (i === 1) {
                
                kaw[i].addEventListener("click", function() {
                    let kgiEditWrap = document.createElement("div"),
                        kgiTextarea = document.createElement("textarea"),
                        // kgiEditProgressWrap = document.createElement("div"),
                        // progressBar = document.createElement("progress"),
                        tagInput = document.createElement("input"),
                        kgiAddBtn = document.createElement("div"),
                        kgiAddBtnTxt = document.createElement("p");
    
                    console.log(kaw[i].parentNode);
                    kaw[i].parentNode.insertBefore(kgiEditWrap, kaw[i]);
                    kgiEditWrap.setAttribute("id", "kgi-edit-wrap");
        
                    kaw[i].setAttribute("style", "display: none;");
        
                    kgiEditWrap.insertBefore(kgiTextarea, null);
                    kgiTextarea.setAttribute("name", "kgi-edit-title");
                    kgiTextarea.setAttribute("id", "kgi-edit-title");
                    kgiTextarea.setAttribute("placeholder", "KGIのタイトル");
        
                    // kgiEditWrap.insertBefore(kgiEditProgressWrap, null);
                    // kgiEditProgressWrap.setAttribute("id", "kgi-edit-progress-wrap");
                    // kgitEditProgressWrap.insertBefore(progressBar, null);
        
                    kgiEditWrap.insertBefore(tagInput, null);
                    tagInput.setAttribute("id", "tag-input");
                    // tagInput.setAttribute("value", "");
                    tagInput.setAttribute("placeholder", "KGIのタグ");
                    new Tagify(tagInput, tagifySetting);
                    // Tagify(tagInput, tagifySetting);
                    
                    kgiEditWrap.insertBefore(kgiAddBtn, null);
                    kgiAddBtn.setAttribute("id", "kgi-add-btn");
                    kgiAddBtn.insertBefore(kgiAddBtnTxt, null);
                    kgiAddBtnTxt.textContent = '追加する';
        
                    kgiAddBtn.addEventListener("click", function(e) {
                        let newQkiw = qkiw[i].cloneNode(true);
                        // if (indexDetail[i].parentNode.parentNode.parentNode === newKiw) {
                            qIndexDetail[i].textContent = kgiTextarea.value;
                        // }
    
                        kaw[i].parentNode.replaceChild(kaw[i], kgiEditWrap);
                        kaw[i].setAttribute("style", "display: block; width: 347px;");
    
                        kaw[i].parentNode.insertBefore(newQkiw, qkiw[i]);
                        // kaw[i].parentNode.insertBefore(qkiw[1], kaw[i]);
                        // kaw[i].parentNode.insertBefore(qkiw, kaw[1]);

                        slickResize();
                        
                    }, false);
    
                }, false);

            }
            if (i === 2) {
                break;
            }

        }
        
    } catch (e) {
        // console.log("This is not the goal manager pages.");
    }

    // kgi hover wrap behaviors in the goal manager pages
    // try {
    //     for (let i = 0, max = kiw.length; i < max; i++) {
    //         kiw[i].addEventListener("mouseenter", function() {
    //             khw[i].setAttribute("style", "display: block; opacity: 1;");
    //         });

    //         kiw[i].addEventListener("mouseleave", function() {
    //             khw[i].setAttribute("style", "display: none;");
    //         });
    //     }

    //     for (let i = 0, max = mkiw.length; i < max; i++) {
    //         mkiw[i].addEventListener("mouseenter", function() {
    //             mkhw[i].setAttribute("style", "display: block; opacity: 1;");
    //         });

    //         mkiw[i].addEventListener("mouseleave", function() {
    //             mkhw[i].setAttribute("style", "display: none");
    //         })
    //     }
    // } catch (e) {
    //     // console.log("This is not the goal pages.");
    // }

    // kgi edit behaviors in the goal manager pages
    // try {
    //     for (let i = 0, max = kgiEditBtn.length; i < max; i++) {
    //         kgiEditBtn[i].addEventListener("click", function() {
    //             let kgiEditWrap = document.createElement("div"),
    //                 kgiTextarea = document.createElement("textarea"),
    //                 // kgiEditProgressWrap = document.createElement("div"),
    //                 // progressBar = document.createElement("progress"),
    //                 tagInput = document.createElement("input"),
    //                 kgiUpdateBtn = document.createElement("div"),
    //                 kgiUpdateBtnTxt = document.createElement("p");

    //             kgiEditBtn[i].parentNode.parentNode.parentNode.insertBefore(kgiEditWrap, kiw[i]);
    //             kgiEditWrap.setAttribute("id", "kgi-edit-wrap");
    
    //             kiw[i].setAttribute("style", "display: none;");
    
    //             kgiEditWrap.insertBefore(kgiTextarea, null);
    //             kgiTextarea.setAttribute("name", "kgi-edit-title");
    //             kgiTextarea.setAttribute("id", "kgi-edit-title");
    //             kgiTextarea.setAttribute("placeholder", "KGIのタイトル");
    //             kgiTextarea.textContent = indexDetail[i].textContent;
    //             kgiTextarea.focus();
    
    //             // kgiEditWrap.insertBefore(kgiEditProgressWrap, null);
    //             // kgiEditProgressWrap.setAttribute("id", "kgi-edit-progress-wrap");
    //             // kgitEditProgressWrap.insertBefore(progressBar, null);
    
    //             kgiEditWrap.insertBefore(tagInput, null);
    //             tagInput.setAttribute("id", "tag-input");
    //             // tagInput.setAttribute("value", "");
    //             tagInput.setAttribute("placeholder", "KGIのタグ");
    //             // tagInput.value = 
    //             new Tagify(tagInput, tagifySetting);
                
    //             kgiEditWrap.insertBefore(kgiUpdateBtn, null);
    //             kgiUpdateBtn.setAttribute("id", "kgi-update-btn");
    //             kgiUpdateBtn.insertBefore(kgiUpdateBtnTxt, null);
    //             kgiUpdateBtnTxt.textContent = '更新する';
    
    //             kgiUpdateBtn.addEventListener("click", function(e) {
    //                 indexDetail[i].textContent = kgiTextarea.value;
    //                 kgiEditWrap.parentNode.replaceChild(kiw[i], kgiEditWrap);
    //                 kiw[i].setAttribute("style", "display: block; width: 347px");
    //             }, false);
    //         }, false);
    //     }

    //     for (let i = 0, max = mkgiEditBtn.length; i < max; i++) {
    //         mkgiEditBtn[i].addEventListener("click", function() {
    //             // location.replace("monthly-kgi-edit.html");
    //             location.href = 'monthly-kgi-edit.html';
    //         }, false);
    //     }
    // } catch (e) {
    //     console.log("This is not the goal manager pages.");
    // }


    function leftMenuHover() {
        let progressToggle = document.getElementById("progress-toggle"),
        lMenuProgressImg = document.getElementById("l-menu-progress-img"),
        // lmLobbyLink = document.getElementById("lm-lobby-link"),
        // lMenuLobbyImg = document.getElementById("l-menu-lobby-img"),
        // lmReportLink = document.getElementById("lm-report-link"),
        // lMenuReportImg = document.getElementById("l-menu-report-link"),
        lmVotingLink = document.getElementById("lm-voting-link"),
        lMenuVotingImg = document.getElementById("l-menu-voting-img");

        progressToggle.addEventListener("mouseenter", function() {
            lMenuProgressImg.src = 'img/chart-hover.png';
        });
        progressToggle.addEventListener("mouseleave", function() {
            lMenuProgressImg.src = 'img/chart.png';
        });
        // lmLobbyLink.addEventListener("mouseenter", function() {
        //     lMenuLobbyImg.src = 'img/comment-alt-hover.png';
        // });
        // lmLobbyLink.addEventListener("mouseleave", function() {
        //     lMenuLobbyImg.src = 'img/comment-alt.png';
        // });
        // lmReportLink.addEventListener("mouseenter", function() {
        //     lMenuReportImg.src = 'img/clipboard-hover.png';
        // });
        // lmReportLink.addEventListener("mouseleave", function() {
        //     lMenuReportImg.src = 'img/clipboard.png';
        // });
        lmVotingLink.addEventListener("mouseenter", function() {
            lMenuVotingImg.src = 'img/write-hover.png';
        });
        lmVotingLink.addEventListener("mouseleave", function() {
            lMenuVotingImg.src = 'img/write.png';
        });
    }

    // slick update function
    
    function slickResize() {
        var ykgi = document.getElementsByClassName("yearly-kgi"),
            qkgi = document.getElementsByClassName("quarterly-kgi"),
            mkgi = document.getElementsByClassName("monthly-kgi");
        
        for(var i = 0, max = ykgi.length; i < max; i++) {
            // console.log(max);
            if (max <= 4) {
                if (window.matchMedia("screen and (max-width: 580px)").matches) {
                    // break;
                    setTimeout(function() {
                        $(".ykgi-regular").slick({
                            // dots: true,
                            infinite: true,
                            slidesToShow: 4,
                            slidesToScroll: 4,
                            // arrows: false,
                            // mobileFirst: true,
                            responsive: [
                                {
                                    breakpoint: 1250,
                                    settings: {
                                        // infinite: true,
                                        slidesToShow: 3,
                                        slidesToScroll: 3,
                                    }
                                },
                                {
                                    breakpoint: 580,
                                    settings: {
                                        slidesToShow: 1,
                                        slidesToScroll: 1,
                                    }
                                }
                            ]
                        });
                    }, 400);
                } else {
                    $(".top-slider").slick({
                        infinite: true,
                        slideToShow: 1,
                        slideToScroll: 1,
                        accessibility: false,
                        autoplay: true,
                        autoplaySpeed: 4000,
                        arrows: false,
                        draggable: false,
                        swipe: false,
                    });
                }
                for (var i = 0, max = ykgi.length; i < max; i++) {
                    ykgi[i].setAttribute("style", "width: 347px");
                }
                // console.log("max3");
                break;
            } else {
                if (window.matchMedia("screen and (max-width: 580px)").matches) {
                    setTimeout(function() {
                        $(".ykgi-regular").slick({
                            // dots: true,
                            infinite: true,
                            slidesToShow: 4,
                            slidesToScroll: 4,
                            // arrows: false,
                            // mobileFirst: true,
                            responsive: [
                                {
                                    breakpoint: 1250,
                                    settings: {
                                        // infinite: true,
                                        slidesToShow: 3,
                                        slidesToScroll: 3,
                                    }
                                },
                                {
                                    breakpoint: 580,
                                    settings: {
                                        slidesToShow: 1,
                                        slidesToScroll: 1,
                                    }
                                }
                            ]
                        });
                    }, 400);						
                } else {
                    $(".top-slider").slick({
                        infinite: true,
                        slideToShow: 1,
                        slideToScroll: 1,
                        accessibility: false,
                        autoplay: true,
                        autoplaySpeed: 4000,
                        arrows: false,
                        draggable: false,
                        swipe: false,
                    });

                    $(".ykgi-regular").slick({
                        // dots: true,
                        infinite: true,
                        slidesToShow: 4,
                        slidesToScroll: 4,
                        // arrows: false,
                        // mobileFirst: true,
                        responsive: [
                            {
                                breakpoint: 1250,
                                settings: {
                                    // infinite: true,
                                    slidesToShow: 3,
                                    slidesToScroll: 3,
                                }
                            },
                            {
                                breakpoint: 580,
                                settings: {
                                    slidesToShow: 1,
                                    slidesToScroll: 1,
                                }
                            }
                        ]
                    });
                }
                // console.log("maxmt4");
                break;
            }
        }

        for(var i = 0, max = qkgi.length; i < max; i++) {
            // console.log(max);
            if (max <= 4) {
                if (window.matchMedia("screen and (max-width: 580px)").matches) {
                    // break;
                    setTimeout(function() {
                    $(".qkgi-regular").slick({
                        // dots: true,
                        infinite: true,
                        slidesToShow: 4,
                        slidesToScroll: 4,
                        // arrows: false,
                        // mobileFirst: true,
                        responsive: [
                            {
                                breakpoint: 850,
                                settings: {
                                    // infinite: true,
                                    slidesToShow: 3,
                                    slidesToScroll: 3,
                                }
                            },
                            {
                                breakpoint: 580,
                                settings: {
                                    slidesToShow: 2,
                                    slidesToScroll: 2,
                                }
                            }
                        ]
                    });
                }, 400);
                } else {
                    // $(".top-slider").slick({
                    // 	infinite: true,
                    // 	slideToShow: 1,
                    // 	slideToScroll: 1,
                    // 	accessibility: false,
                    // 	autoplay: true,
                    // 	autoplaySpeed: 4000,
                    // 	arrows: false,
                    // 	draggable: false,
                    // 	swipe: false,
                    // });
                }
                for (var i = 0, max = qkgi.length; i < max; i++) {
                    qkgi[i].setAttribute("style", "width: 347px");
                }
                // console.log("max3");
                break;
            } else {
                if (window.matchMedia("screen and (max-width: 580px)").matches) {
                    setTimeout(function() {
                        $(".qkgi-regular").slick({
                            // dots: true,
                            infinite: true,
                            slidesToShow: 4,
                            slidesToScroll: 4,
                            // arrows: false,
                            // mobileFirst: true,
                            responsive: [
                                {
                                    breakpoint: 1250,
                                    settings: {
                                        // infinite: true,
                                        slidesToShow: 3,
                                        slidesToScroll: 3,
                                    }
                                },
                                {
                                    breakpoint: 580,
                                    settings: {
                                        slidesToShow: 2,
                                        slidesToScroll: 2,
                                    }
                                }
                            ]
                        });
                    }, 400);						
                } else {
                    // $(".top-slider").slick({
                    // 	infinite: true,
                    // 	slideToShow: 1,
                    // 	slideToScroll: 1,
                    // 	accessibility: false,
                    // 	autoplay: true,
                    // 	autoplaySpeed: 4000,
                    // 	arrows: false,
                    // 	draggable: false,
                    // 	swipe: false,
                    // });

                    $(".qkgi-regular").slick({
                        // dots: true,
                        infinite: true,
                        slidesToShow: 4,
                        slidesToScroll: 4,
                        // arrows: false,
                        // mobileFirst: true,
                        responsive: [
                            {
                                breakpoint: 1250,
                                settings: {
                                    // infinite: true,
                                    slidesToShow: 3,
                                    slidesToScroll: 3,
                                }
                            },
                            {
                                breakpoint: 580,
                                settings: {
                                    slidesToShow: 2,
                                    slidesToScroll: 2,
                                }
                            }
                        ]
                    });
                }
                // console.log("maxmt4");
                break;
            }
        }

        for(var i = 0, max = mkgi.length; i < max; i++) {
            // console.log(max);
            if (max <= 4) {
                if (window.matchMedia("screen and (max-width: 580px)").matches) {
                    // break;
                    setTimeout(function() {
                        $(".mkgi-regular").slick({
                            // dots: true,
                            infinite: true,
                            slidesToShow: 4,
                            slidesToScroll: 4,
                            // arrows: false,
                            // mobileFirst: true,
                            responsive: [
                                {
                                    breakpoint: 1250,
                                    settings: {
                                        // infinite: true,
                                        slidesToShow: 3,
                                        slidesToScroll: 3,
                                    }
                                },
                                {
                                    breakpoint: 580,
                                    settings: {
                                        slidesToShow: 2,
                                        slidesToScroll: 2,
                                    }
                                }
                            ]
                        });
                    }, 400);
                } else {
                    // $(".top-slider").slick({
                    // 	infinite: true,
                    // 	slideToShow: 1,
                    // 	slideToScroll: 1,
                    // 	accessibility: false,
                    // 	autoplay: true,
                    // 	autoplaySpeed: 4000,
                    // 	arrows: false,
                    // 	draggable: false,
                    // 	swipe: false,
                    // });
                }
                for (var i = 0, max = qkgi.length; i < max; i++) {
                    qkgi[i].setAttribute("style", "width: 347px");
                }
                // console.log("max3");
                break;
            } else {
                if (window.matchMedia("screen and (max-width: 580px)").matches) {
                    setTimeout(function() {
                        $(".mkgi-regular").slick({
                            // dots: true,
                            infinite: true,
                            slidesToShow: 4,
                            slidesToScroll: 4,
                            // arrows: false,
                            // mobileFirst: true,
                            responsive: [
                                {
                                    breakpoint: 1250,
                                    settings: {
                                        // infinite: true,
                                        slidesToShow: 3,
                                        slidesToScroll: 3,
                                    }
                                },
                                {
                                    breakpoint: 580,
                                    settings: {
                                        slidesToShow: 2,
                                        slidesToScroll: 2,
                                    }
                                }
                            ]
                        });
                    }, 400);			
                } else {
                    // $(".top-slider").slick({
                    // 	infinite: true,
                    // 	slideToShow: 1,
                    // 	slideToScroll: 1,
                    // 	accessibility: false,
                    // 	autoplay: true,
                    // 	autoplaySpeed: 4000,
                    // 	arrows: false,
                    // 	draggable: false,
                    // 	swipe: false,
                    // });

                    $(".mkgi-regular").slick({
                        // dots: true,
                        infinite: true,
                        slidesToShow: 4,
                        slidesToScroll: 4,
                        // arrows: false,
                        // mobileFirst: true,
                        responsive: [
                            {
                                breakpoint: 1250,
                                settings: {
                                    // infinite: true,
                                    slidesToShow: 3,
                                    slidesToScroll: 3,
                                }
                            },
                            {
                                breakpoint: 580,
                                settings: {
                                    slidesToShow: 2,
                                    slidesToScroll: 2,
                                }
                            }
                        ]
                    });
                }
                // console.log("maxmt4");
                break;
            }
        }

    }

    // content management functions in top page
    function resizeContent() {
        try {
            diwrap2.insertBefore(di[3], di[4]);
            diwrap3.insertBefore(dinone[2], dinone[3]);
            diwrap3.insertBefore(dinone[1], dinone[2]);
        } catch {
            // console.log("diwraps are nowhere.");
        }
    }

    function revertContent() {
        try {
            diwrap.insertBefore(di[3], null);
            diwrap2.insertBefore(dinone[1], null);
            diwrap2.insertBefore(dinone[2], null);
        } catch {
            // console.log("diwraps are nowhere.");
        }
    }

    function resizeContent2() {
        try {
            diwrap2.insertBefore(di[2], di[3]);
            diwrap3.insertBefore(di[4], null);
            diwrap3.insertBefore(dinone[0], null);
        } catch (e) {
            // console.log("diwraps are nowhere.");
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
            // console.log("diwraps are nowhere.");
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
            // console.log("home page's process was ignored.");
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
            // console.log("voitng page's process was ignored");
        }
    }

    function vRevertContent() {
        try {
            vw[0].insertBefore(vi[1], null);
            vw[1].insertBefore(vi[2], null);
            vw[1].insertBefore(vinone, null);
        } catch (e) {
            // console.log("voting page's process was ignored.");
        }
    }

    // content management functions in lobby page
    function lResizeContent() {
        try {
            participant[4].setAttribute('style', "display: none;");
            participant[5].setAttribute('style', "display: none;");
        } catch (e) {
            // console.log("participant are nowhere.");
        }
    }

    function lRevertContent() {
        try {
            participant[4].setAttribute('style', "display: block;");
            participant[5].setAttribute('style', "display: block;");
        } catch (e) {
            // console.log("participant are nowhere.");
        }
    }

    function lResizeContent2() {
        try {
            participant[3].setAttribute('style', "display: none;");
            participant[2].setAttribute('style', "display: none;");
        } catch (e) {
            // console.log("participant are nowhere.");
        }
    }

    function lRevertContent2() {
        try {
            participant[3].setAttribute('style', "display: block;");
            participant[2].setAttribute('style', "display: block;");
        } catch (e) {
            // console.log("participant are nowhere.");
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
            // console.log("This is not the progress page.");
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
            // console.log("This is not the progress page.");
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
            // console.log("This is not the progress page.");
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
            // console.log("This is not the progress page.");
        }
    }

    // }, false);

}(this));