var reload_time = 3

var url = window.location.href
added = false

function add_to_basket(){
    // page is product page
    if (document.getElementById("titleSection")){
        // case 0 buy now botton available
        if(document.getElementById("buy-now-button")){
            // document.getElementById("buy-now-button").click();
            // added = true
            return
        }
        // case 1
        if (document.querySelector("#availability .a-declarative a")){
            document.querySelector("#availability .a-declarative a").click()
            console.log("CASE 1 a");
            setTimeout(sidebar_add, 100)
            return
        }
        if (document.querySelector("#buybox-see-all-buying-choices-announce")){
            document.querySelector("#buybox-see-all-buying-choices-announce").click()
            console.log("CASE 1 b");
            setTimeout(sidebar_add, 100)
            return
        }
        // case 2
        if (document.querySelector("input#add-to-cart-button-ubb")){
            document.querySelector("input#add-to-cart-button-ubb").click()
            console.log("CASE 2");
            added = true
            return
        }
        // case 3
        if (document.querySelector("#olpLinkWidget_feature_div .a-declarative a")){
            document.querySelector("#olpLinkWidget_feature_div .a-declarative a").click()
            console.log("CASE 3");
            setTimeout(sidebar_add, 100)
            return
        }
        reload()
    }
}

var wait = 0
var options = null

function sidebar_add(){
    wait = wait + 1
    console.log("sidebar_add() iter: " + wait);
    options = document.querySelectorAll("#aod-offer-list #aod-offer")
    if (options.length === 0){
        // options not loaded yet so wait(ie call this function again using setTimeout)
        if (wait > 20){
            // stop if wait iteration is more than a number
            if (added === false){reload()}
            return
        }
        // call function again after some time
        setTimeout(sidebar_add, 100)
        return
    }
    // console.log(options);
    for (var i = 0; i < options.length; i++){
        dispatchesFrom = options[i].querySelector("#aod-offer-shipsFrom span.a-size-small.a-color-base").innerText
        if (dispatchesFrom === "Amazon"){
            options[i].querySelector(".a-button-inner input").click()
            added = true
            break
        }
    }
    if (added === false){
        reload()
    }
}

function p_t_c(){
    if (document.querySelector("span#hlb-ptc-btn a#hlb-ptc-btn-native")){
        document.querySelector("span#hlb-ptc-btn a#hlb-ptc-btn-native").click()
    }
}


function reload(){
    if(sessionStorage.getItem(url)){
        let n = sessionStorage.getItem(url)
        n = Number(n)
        n = n+1
        if (reload_time >= n){
            sessionStorage.setItem(url, n.toString())
            location.reload()
        }
    } else{
        sessionStorage.setItem(url, "1")
        if (reload_time >= 1){
            location.reload()
        }
    }
}

add_to_basket()
p_t_c()