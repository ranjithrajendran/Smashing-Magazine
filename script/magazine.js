window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        document.getElementById("goToTop").style.display = "block";
    } else {
        document.getElementById("goToTop").style.display = "none";
    }
}

function goToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function toggleVisibility(called, calling) {
    if (called.style.display == "none") {
        calling.style.borderColor = "#811d15";
        calling.style.background = "#811d15";
        called.style.display = "inline-block";
    } else {
        calling.style.borderColor = "white";
        calling.style.background = "#d33a2c";
        called.style.display = "none";
    }
}


function border(obj) {
    obj.style.border = "dotted 4px rgba(102, 1, 1, 0.795)";
}

function hideBorder(obj) {
    obj.style.border = "dotted 4px transparent";
}