// --- 사업영역 클릭 시 업종 변경 --- //
function updateSectors() {
    const brandCategory = document.getElementById('brandCategory').value;
    const sectorCategory = document.getElementById('sectorCategory');

    sectorCategory.innerHTML = '<option value="" selected="selected">선택하세요</option>';

    const categories = {
        '지역': [
            '맛집·뷔페·카페',
            '뷰티·운동·시술',
            '홈케어·생활서비스'
        ],
        '맛집': [
            '맛집·뷔페·카페'
        ]
    };

    (categories[brandCategory] || []).forEach(option => {
        const newOption = document.createElement('option');
        newOption.value = option;
        newOption.textContent = option;
        sectorCategory.appendChild(newOption);
    });
}


// --- daum 주소 API --- //

function execDaumPostcode() {
    new daum.Postcode({
        oncomplete: function(data) {
            var extraAddr = '';

            if (data.userSelectedType === 'R') {
                addr = data.roadAddress;
            } else {
                addr = data.jibunAddress;
            }

            if (data.userSelectedType === 'R') {

                if (data.bname !== '' && /[동|로|가]$/g.test(data.bname)) {
                    extraAddr += data.bname;
                }
                if (data.buildingName !== '' && data.apartment === 'Y') {
                    extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
                }
                if (extraAddr !== '') {
                    extraAddr = ' (' + extraAddr + ')';
                }

                addr += extraAddr;
            }
            document.getElementById('postcode').value = data.zonecode;
            document.getElementById("address").value = addr;
            document.getElementById("detailAddress").focus();
        }
    }).open();
}


// 이메일 옵션 클릭 시, 자동으로 주소 입력 //
document.getElementById('emailCategory').addEventListener('change', function() {
    var emailInput = document.getElementById('EmailNumber-text');
    var selectedValue = this.value;

    if (selectedValue) {
        emailInput.value = selectedValue;
    } else {
        emailInput.value = '';
    }
});


function validateForm() {
    const requiredFields = document.querySelectorAll('.form-container-wrap .color-point + span, input[required], select[required]');
    let valid = true;

    requiredFields.forEach(field => {
        if (field.type === 'text' && field.value.trim() === '') {
            valid = false;
        } else if (field.tagName === 'SELECT' && field.value === '') {
            valid = false;
        } else if (field.type === 'checkbox' && !field.checked) {
            valid = false;
        }
    });

    // 체크박스 확인
    const privacyCheck = document.getElementById('privacy-check');
    if (!privacyCheck.checked) {
        valid = false;
    }

    // 유효성 검사 결과에 따라 경고창 표시
    if (!valid) {
        alert('필수 입력란을 확인해주세요.');
        return false;
    }

    alert('제출이 완료되었습니다. 빠른 시일내에 연락드리겠습니다.');
}