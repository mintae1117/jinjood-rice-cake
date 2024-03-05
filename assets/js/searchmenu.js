function gotopage() {
    const menuname = document.getElementById('menuinput').value;
    if(menuname === "가래떡"){
        window.location.href=("property-details.html");
        return;
    }
    if(menuname === "기피인절미"){
        window.location.href=("property-details.html");
        return;
    }
    if(menuname === "꿀떡"){
        window.location.href=("property-details.html");
        return;
    }
    if(menuname === "꿀백설기"){
        window.location.href=("property-details.html");
        return;
    }
    if(menuname === "녹두송편"){
        window.location.href=("property-details.html");
        return;
    }
    if(menuname === "단호박백설기"){
        window.location.href=("property-details.html");
        return;
    }
    if(menuname === "단호박편"){
        window.location.href=("property-details.html");
        return;
    }
    if(menuname === "답례품1호"){
        window.location.href=("property-details.html");
        return;
    }
    if(menuname === "답례품2호"){
        window.location.href=("property-details.html");
        return;
    }
    if(menuname === "답례품3호"){
        window.location.href=("property-details.html");
        return;
    }
    if(menuname === "답례품5호"){
        window.location.href=("property-details.html");
        return;
    }
    if(menuname === "대추떡"){
        window.location.href=("property-details.html");
        return;
    }
    if(menuname === "두텁"){
        window.location.href=("property-details.html");
        return;
    }
    if(menuname === "가래떡"){
        window.location.href=("property-details.html");
        return;
    }
    if(menuname === "떡국"){
        window.location.href=("property-details.html");
        return;
    }
    if(menuname === "떡국떡선물세트"){
        window.location.href=("property-details.html");
        return;
    }
    if(menuname === "모둠떡"){
        window.location.href=("property-details.html");
        return;
    }
    if(menuname === "모둠잔기증"){
        window.location.href=("property-details.html");
        return;
    }
    if(menuname === "모시기피송편"){
        window.location.href=("property-details.html");
        return;
    }
    if(menuname === "모찌"){
        window.location.href=("property-details.html");
        return;
    }
    if(menuname === "무지개떡"){
        window.location.href=("property-details.html");
        return;
    }
    if(menuname === "바람떡"){
        window.location.href=("property-details.html");
        return;
    }
    if(menuname === "백설기"){
        window.location.href=("property-details.html");
        return;
    }
    if(menuname === "선물세트1호"){
        window.location.href=("property-details.html");
        return;
    }
    if(menuname === "선물세트4호"){
        window.location.href=("property-details.html");
        return;
    }
    if(menuname === "손송편"){
        window.location.href=("property-details.html");
        return;
    }
    if(menuname === "송편세트1호"){
        window.location.href=("property-details.html");
        return;
    }
    if(menuname === "송편세트2호"){
        window.location.href=("property-details.html");
        return;
    }
    if(menuname === "쑥랩인절미"){
        window.location.href=("property-details.html");
        return;
    }
    if(menuname === "쑥설기"){
        window.location.href=("property-details.html");
        return;
    }
    if(menuname === "쑥인절미"){
        window.location.href=("property-details.html");
        return;
    }
    if(menuname === "쑥절편"){
        window.location.href=("property-details.html");
        return;
    }
    if(menuname === "앙꼬절편"){
        window.location.href=("property-details.html");
        return;
    }
    if(menuname === "앙꼬찰떡"){
        window.location.href=("property-details.html");
        return;
    }
    if(menuname === "약밥"){
        window.location.href=("property-details.html");
        return;
    }
    if(menuname === "영양떡"){
        window.location.href=("property-details.html");
        return;
    }
    if(menuname === "영양찰밥"){
        window.location.href=("property-details.html");
        return;
    }
    if(menuname === "이바지(대)"){
        window.location.href=("property-details.html");
        return;
    }
    if(menuname === "인절미"){
        window.location.href=("property-details.html");
        return;
    }
    if(menuname === "콩시루"){
        window.location.href=("property-details.html");
        return;
    }
    if(menuname === "콩찰시루"){
        window.location.href=("property-details.html");
        return;
    }
    if(menuname === "통녹두완두찰시루"){
        window.location.href=("property-details.html");
        return;
    }
    if(menuname === "팥앙금잔기증"){
        window.location.href=("property-details.html");
        return;
    }
    if(menuname === "팥찰시루"){
        window.location.href=("property-details.html");
        return;
    }
    if(menuname === "흑미모둠"){
        window.location.href=("property-details.html");
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

function firstload(){
    document.getElementById("firstload").click();
}
