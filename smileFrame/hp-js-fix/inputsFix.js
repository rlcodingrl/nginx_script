document
    .querySelector(".hpCardNumberInput")
    .addEventListener("input", function (event) {
        // Удаляем все пробелы и нецифровые символы
        let input = event.target.value.replace(/\D/g, "");

        // Разбиваем строку на группы по 4 цифры
        let formattedInput = input.match(/.{1,4}/g)?.join(" ") || "";

        // Обновляем значение input
        event.target.value = formattedInput;
    });

document
    .querySelector(".hpCardMMYYInput")
    .addEventListener("input", function (event) {
        // Удаляем все нецифровые символы
        let input = event.target.value.replace(/\D/g, "");

        // Автоматически добавляем слэш (/) после двух цифр
        if (input.length > 2) {
            input = input.substring(0, 2) + " / " + input.substring(2, 4);
        }

        // Ограничиваем длину до формата MM/YY
        event.target.value = input;
    });
