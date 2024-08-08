// 전체 동의 시 모든 체크박스 체크
$(".terms-checkbox").on('click', (e) => {
    $(".terms-checkbox1").prop("checked", e.target.checked);
});

// 체크박스 필수만 선택시 약관 동의될 수 있도록
$(".terms-checkbox1").on("click", (e) => {
    const requiredCheckboxes = $(".terms-checkbox1").slice(0, 3);
    // $(".terms-checkbox1").slice(0, 3)는 클래스가 terms-checkbox1인 체크박스들 중 첫 세 개(즉, 필수 항목)를 선택
    $(".terms-checkbox").prop("checked", requiredCheckboxes.filter(":checked").length === 3);
});

$(document).ready(function() {
    $("#terms-form").on("submit", function(e) {
        const requiredCheckboxes = $(".terms-checkbox1").slice(0, 3); // 필수 항목 선택
        if (requiredCheckboxes.filter(":checked").length < 3) {
            e.preventDefault(); // 폼 제출 막기
            alert("필수 항목을 확인하고 체크해주세요.");
        } else {
            e.preventDefault(); // 폼 제출 막기
            window.location.href = "./../join/join.html"; // 경로 설정
        }
    });
});

<<<<<<< HEAD

// // div 숨겨진 박스 표시하기
// function show(termsHidden1){

//     if (document.getElementById(termsHidden1).style.display=="none") document.getElementById(termsHidden1).style.display="block"; //표시하게 하기

//     else document.getElementById(termsHidden1).style.display="none"; //안보이게 하기

// }

// function show(termsHidden2){

//     if (document.getElementById(termsHidden2).style.display=="none") document.getElementById(termsHidden2).style.display="block"; //표시하게 하기

//     else document.getElementById(termsHidden2).style.display="none"; //안보이게 하기

// }

// function show(termsHidden3){

//     if (document.getElementById(termsHidden3).style.display=="none") document.getElementById(termsHidden3).style.display="block"; //표시하게 하기

//     else document.getElementById(termsHidden3).style.display="none"; //안보이게 하기

// }
=======
>>>>>>> 8e5d60fd425448909fe8b1ea0e8f757f1b16d775
