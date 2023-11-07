window.onload = function(){
    document.oncontextmenu = function() {
        alert("Função desabilitada!");
        return false;
    }
}