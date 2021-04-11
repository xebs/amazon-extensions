var url = window.location.href
var reload_time = 15

var amazon = /Amazon/

if(document.getElementById("buy-now-button")){
    if (document.querySelector("#merchant-info") !== null){
        if (amazon.test(document.querySelector("#merchant-info").innerText)){
            skip_additional_protection()
            document.getElementById("buy-now-button").click()
        }
    } else{
        skip_additional_protection()
        document.getElementById("buy-now-button").click();
    }
} else if(document.getElementById("productTitleGroupAnchor")){
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

function skip_additional_protection(){
    if (document.querySelector("#siNoCoverage-announce")){
        document.querySelector("#siNoCoverage-announce").click()
    }
}