console.log(`this is script from from rl for smile`);

window.onload = function () {
    console.log("Страница полностью загружена");
    const paymentDivOr = document.querySelector(`#checkout-main`);
    if (paymentDivOr) {
        console.log(`this is paymneyt page`);
        paymentDivOr.style.display = "none";
        const paymentDivNew = document.createElement("div");
        paymentDivNew.innerHTML = `<iframe></iframe>`;
        paymentDivOr.insertAdjacentElement("afterend", paymentDivNew);
    }
};
