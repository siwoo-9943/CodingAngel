//-- 아이디 유효성 검사 --
let idInput = document.querySelector("#id-input");
let idMsg = document.querySelector(".id-message1");
let idMsgg = document.querySelector(".id-message2");

idInput.addEventListener("input", () => {
    if (idInput.value.length >= 4) {
        idMsg.style.display = "block";
        idMsgg.style.display = "none";
        idMsg.style.color = "pink";
        idMsg.style.fontWeight = 'bold';
    } else {
        idMsg.style.display = "none";
        idMsgg.style.display = "block";
        idMsgg.innerHTML = "아이디는 4자 이상이어야 합니다.";
        idMsgg.style.color = "red";
    }
});

// 비밀번호 일치 여부 확인
document.getElementById('pw-input').addEventListener('input', checkPassword);
document.getElementById('re-pwinput').addEventListener('input', checkPassword);

function checkPassword() {
    var password = document.getElementById('pw-input').value;
    var confirmPassword = document.getElementById('re-pwinput').value;
    var message1 = document.querySelector('.pw-message1');
    var message2 = document.querySelector('.pw-message2');

    // 기본적으로 모든 메시지를 숨김
    message1.style.display = 'none';
    message2.style.display = 'none';

    if (password === confirmPassword && password !== '') {
        message1.style.display = 'block';
        message1.style.color = 'pink';
        message1.style.fontWeight = 'bold';
    } else if (password !== confirmPassword && confirmPassword !== '') {
        message2.style.display = 'block';
        message2.style.color = 'red';
    }
}


// 회원정보 하나라도 입력 안되었을 시 "필수창 입력해주세요" 출력 //
// 회원정보 모두 입력 되었을 시 "회원가입이 완료되었습니다 출력" /
document.querySelector('.join-complete').addEventListener('click', function(event) {
    const requiredFields = document.querySelectorAll('.main-input[required]');
    let allFilled = true;

    requiredFields.forEach(function(field) {
        if (!field.value.trim()) {
            allFilled = false;
        }
    });

    if (!allFilled) {
        event.preventDefault();
        alert('필수창 입력해주세요');
    } else {
        alert('회원가입이 완료되었습니다');

    }
});