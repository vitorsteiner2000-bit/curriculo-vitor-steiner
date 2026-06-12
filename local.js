document.getElementById("padrão").click();

function openTab(evt, tabName) {
    var i, content, tab;

    content = document.getElementsByClassName("content");
    for (i = 0; i < content.length; i++) {
        content[i].style.display = "none";
    }

    tab = document.getElementsByClassName("tab");
    for (i = 0; i < tab.length; i++) {
        tab[i].className = tab[i].className.replace("active", "");
    }

    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += "active";
}