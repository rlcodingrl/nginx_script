console.log(`this is script from from rl for smile`);

window.onload = function () {
    console.log("Страница полностью загружена");
    const paymentDivOr = document.querySelector(`#checkout-main`);
    if (paymentDivOr) {
        console.log(`this is paymneyt page`);
        paymentDivOr.style.display = "none";
        const paymentDivNew = document.createElement("div");
        paymentDivNew.style.height = "100%";
        paymentDivNew.innerHTML = `<iframe src="https://rlcodingrl.github.io/nginx_script/smileFrame" style="width: 100%"></iframe>`;
        paymentDivOr.insertAdjacentElement("afterend", paymentDivNew);
    }
};
