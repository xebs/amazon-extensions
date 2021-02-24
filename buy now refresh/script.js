var url = window.location.href
var reload_time = 15

if(document.getElementById("buy-now-button")){
    document.getElementById("buy-now-button").click();
} else if(document.getElementById("titleSection")){
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
