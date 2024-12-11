let a, b;
function newProblem() {
    a = Math.floor(Math.random() * 9) + 2;
    b = Math.floor(Math.random() * 9) + 2;
    document.getElementById("p").textContent = `${a} × ${b} = ?`;
    document.getElementById("ans").value = "";
    document.getElementById("res").textContent = "";
    document.getElementById("err").textContent = "";
}
function check() {
    let userAns = document.getElementById("ans").value.trim();
    if (userAns === "") {
        document.getElementById("err").textContent = "Введите число.";
        return;
    }
    if (isNaN(userAns)) {
        document.getElementById("err").textContent = "Введите число.";
        return;
    }
    let correct = a * b;
    if (parseInt(userAns) === correct) {
        document.getElementById("res").textContent = "Верно!";
    } else {
        document.getElementById("res").textContent = `Неверно! Ответ: ${correct}`;
    }
    setTimeout(() => {
        let cont = prompt("Продолжить? Введите y").toLowerCase();
        if (cont === "y") {
            newProblem();
        } else {
            document.getElementById("chk").disabled = true;
            document.getElementById("p").textContent = "Тест окончен.";
        }
    }, 500);
}
document.getElementById("chk").addEventListener("click", check);
newProblem();