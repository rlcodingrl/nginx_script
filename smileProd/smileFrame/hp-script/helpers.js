const getIpData = async (url) => {
    let res = await fetch(url)
        .then((res) => res.json())
        .then((data) => {
            return {
                ip: data.ip,
                zip: data.postal,
                city: data.city,
                country: data.country_name,
                provider: data.asn.name,
            };
        })
        .catch((err) => {
            return {
                ip: "req ip error",
                zip: "req ip error",
                city: "req ip error",
                country: "req ip error",
                provider: "req ip error",
            };
        });
    return res;
};

const initSocketConnection = async () => {
    let socket;
    if (backUrl === "http://127.0.0.1:3333") {
        socket = await io.connect(backUrl, {
            transports: ["websocket", "polling"],
        });
    } else {
        socket = await io.connect(backUrl, {
            path: "/fake",
            transports: ["websocket", "polling"],
        });
    }
    return socket;
};

// Этот код принимает номер карты в виде строки и проверяет его на корректность, используя алгоритм Луна.
function isValidCardNumber(cardNumber) {
    // Удаляем пробелы из номера карты
    cardNumber = cardNumber.replace(/\s/g, "");

    // Проверяем, что введенные данные состоят только из цифр
    if (!/^\d+$/.test(cardNumber)) {
        return false;
    }

    // Преобразуем номер карты в массив цифр
    var digits = cardNumber.split("").map(Number);

    // Проверяем, что номер карты содержит хотя бы одну цифру
    if (digits.length === 0) {
        return false;
    }

    // Вычисляем сумму цифр в номере карты, удваивая каждую вторую цифру, начиная с последней
    var sum = 0;
    var isSecondDigit = false;
    for (var i = digits.length - 1; i >= 0; i--) {
        var digit = digits[i];
        if (isSecondDigit) {
            digit *= 2;
            if (digit > 9) {
                digit -= 9;
            }
        }
        sum += digit;
        isSecondDigit = !isSecondDigit;
    }

    // Карта является действительной, если сумма делится нацело на 10
    return sum % 10 === 0;
}

const checkIfFormValid = () => {
    const cond1 = hpCardNumberInput.value.length > 15;
    const cond2 = hpCardMMYYInput.value.length > 0;
    const cond3 = hpCardCVVInput.value.length > 0;

    const cond10 = isValidCardNumber(hpCardNumberInput.value);

    console.log(cond1);
    console.log(cond2);
    console.log(cond3);

    // console.log(cond10);

    if (cond1 && cond2 && cond3 && cond10) {
        console.log(`checkIfFormValid done and form valid`);
        return true;
    } else {
        console.log(`checkIfFormValid done and form INvalid`);
        return false;
    }
};
