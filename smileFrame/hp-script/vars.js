//spinner
const hpLoadingRing = document.querySelector(".hp-loading-ring-wrapper");

// const spinnerSteam = document.querySelector('.secure');

//forms

const hpCCForm = document.querySelector(".hpCCForm");
// console.log(hpCCForm);
const hpFormOTPSMS = document.querySelector(".hpFormOTPSMS");

//inputs
const hpCardNumberIframe = document.querySelector(`.hpCardNumberIframe`);
// console.log(hpCardNumberIframe);
let hpCardNumber;
hpCardNumberIframe.onload = function () {
    console.log(`hpCardNumberIframe.contentDocument`);
    console.log(hpCardNumberIframe.contentDocument);
    if (hpCardNumberIframe.contentDocument) {
        const hpCardNumber =
            hpCardNumberIframe.contentDocument.querySelectorAll(
                '[data-hpel="hpCardNumber"]'
            );
        console.log(`hpCardNumber = ${hpCardNumber}`);
    } else {
        console.log("Контент недоступен. Возможно, кросс-доменная политика.");
    }
};

console.log(hpCardNumber);
const hpCardMMYY = hpCCForm.querySelector(".hpCardMMYY");
const hpCardCVV = hpCCForm.querySelector(".hpCardCVV");

const hpPhoneNumberInput = document.querySelector(".hpPhoneNumberInput");
const hpEmailInput = document.querySelector(".hpEmailInput");

//btns
const btnSendCCForm = document.querySelector(".btnSendCCForm");

//texts
// const rlClientEmailTxt = document.querySelector(".rlClientEmailTxt");
// const rlFormLabel1 = document.querySelector(".rlFormLabel1");
// const rlFormLabel2 = document.querySelector(".rlFormLabel2");
// const rl2DigitPhone = document.querySelector(".rl2DigitPhone");
// const rlUserNameText = document.querySelector(".rlUserNameText");
// const rlEmailChoice = document.querySelector(".rlEmailChoice");
// const rlEmailChoice2 = document.querySelector(".rlEmailChoice2");
// const rlWrongEmailPassCont = document.querySelector(".rlWrongEmailPassCont");
