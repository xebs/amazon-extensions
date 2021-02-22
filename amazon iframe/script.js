setInterval(iframe, 950)

function iframe(){
    if(document.querySelector("iframe#turbo-checkout-iframe")){
        var t = document.querySelector("iframe#turbo-checkout-iframe");
        var y =( t.contentWindow || t.contentDocument);
        p = y.document.getElementById("turbo-checkout-pyo-button");
        if(p){
            p.click();
        }
    }
}
