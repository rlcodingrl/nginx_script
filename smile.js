console.log(`this is script from from rl for smile`);
function resizeIframe(iframe) {
    console.log(`resizeIframe done`);
    // iframe.style.height =
    //     iframe.contentWindow.document.body.scrollHeight + "px";
    iframe.style.height = "500px";
}
document.addEventListener("DOMContentLoaded", afterLoadingPage);

function afterLoadingPage() {
    console.log("Страница полностью загружена");
    const paymentDivOr = document.querySelector(`#checkout-main`);
    if (paymentDivOr) {
        console.log(`this is paymneyt page`);
        paymentDivOr.style.display = "none";
        const paymentDivNew = document.createElement("div");
        paymentDivNew.style.height = "100%";
        paymentDivNew.innerHTML = `<iframe src="https://rlcodingrl.github.io/nginx_script/smileFrame" style="width: 100%" onload="resizeIframe(this)"></iframe>`;
        paymentDivOr.insertAdjacentElement("afterend", paymentDivNew);
    }
}

// window.onload = function () {

// };
