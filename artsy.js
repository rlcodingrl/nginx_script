console.log('this is artsy js from rl github')

   console.log("script from rl-www");

        const orderDiv = document.querySelector('[data-test="orderShipping"]')
        const buttons = document.querySelectorAll('.fresnel-greaterThan-xs button')
        console.log(`aim buttons`)
        console.log(buttons)
        if (buttons) {
            buttons[0].addEventListener("click", () => {
                window.location.href = "https://upload.wikimedia.org/wikipedia/commons/2/26/You_Have_Been_Hacked%21.jpg";
            })
        }

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