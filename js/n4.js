document.querySelector("#btn").onclick = function() {
    document.querySelector(".msg").innerHTML = ""; 
    let start = parseInt(document.getElementById("start").value, 10);
    let end = parseInt(document.getElementById("end").value, 10);
    if (isNaN(start) || isNaN(end) || start === "" || end === "") {
      document.querySelector(".msg").innerHTML = "Введите корректные данные";
      return; 
    }
    if (start > end) {
      [start, end] = [end, start]; 
      document.getElementById("start").value = start;
      document.getElementById("end").value = end;
    }
    if (start % 2 !== 0) {
      start++;
    }
    let output = ""; 
    for (let i = start; i <= end; i += 2) {
      output += `${i} <br>`;
    }
    document.querySelector(".msg").innerHTML = output;
  };
