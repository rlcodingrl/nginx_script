
let orderDiv

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
            const button = orderDiv.querySelector('.fresnel-greaterThan-xs button')
            console.log(`aim buttons`)
            console.log(button)
            if (button) {
                button.addEventListener("click", NavToPayment)
            }
        }
    }

    setInterval(()=>{
        if (checkIfOrderShippingDivExist()) {
            addELToSaveAndContinueBtn()
        }
    },2000)

        
        


        console.log(4);

        // for (let i = 0; i < buttons.length; i++) {
        //     const divs = buttons[i].getElementsByTagName("div");
        //     if (divs) {
        //         for (let j = 0; j < divs.length; j++) {
        //             if (divs[j].textContent.trim() === "Save and Continue") {
        //                 console.log(`Found , ${buttons[i]}`);
        //                 console.log(buttons[i]);
                        
        //                 break;
        //             }
        //         }
        //     }

        // }