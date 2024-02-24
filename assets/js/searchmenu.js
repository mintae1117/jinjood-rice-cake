function gotopage() {
    const menuname = document.getElementById('menuinput').value;
    if(menuname === "꿀백설기"){
        window.location.href=("properties.html");
    }
    if(menuname === "호박떡"){
        window.location.href=("property-details.html");
    }
}