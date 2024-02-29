function gotopage() {
    const menuname = document.getElementById('menuinput').value;
    if(menuname === "꿀백설기"){
        window.location.href=("index.html");
        return;
    }
    if(menuname === "단호박편"){
        window.location.href=("index.html");
        return;
    }
    else if(menuname.length === 0){
        alert("검색어를 입력해 주세요.");
    }
    else {
        alert(menuname + "에 대한 검색결과가 없습니다.");
    }
}

const myyear = document.getElementById("currentyear");
const now = new Date();
const year = now.getFullYear();
const since = year - 1995;
myyear.innerText = since;
