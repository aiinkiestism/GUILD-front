(function() {
    'use strict';

    let diwrap = document.getElementsByClassName("d-item-wrap"),
        diwrap2 = document.getElementsByClassName("d-item-wrap2"),
        diwrap3 = document.getElementsByClassName("d-item-wrap3");
    const ic = document.getElementById("inner-content"),
        di = document.getElementsByClassName("dashboard-item"),
        dinone = document.getElementsByClassName("dashboard-item-none"),
        hbtn = document.getElementById("help-btn");

    dinone[1].setAttribute('style', "opacity: 0;");
    dinone[2].setAttribute('style', "opacity: 0;");
    dinone[3].setAttribute('style', "opacity: 0;");

    // deal with responsive
    if(window.matchMedia("(max-width: 1500px").matches) {
        resizeContent();
    }

    window.addEventListener('resize', function(e) {
        if(e.target.innerWidth <= 1500) {
            setTimeout(function() {
                resizeContent();
            }, 0);
        } else if (e.target.innerWidth > 1500) {
            this.setTimeout(function() {
                revertContent();
            }, 0);
        }
    })

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

    // ic.insertBefore(hbtn, null);


})();