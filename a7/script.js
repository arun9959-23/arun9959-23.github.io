function fun() {
    let n1 = parseFloat(document.getElementById("n1").value);
    let n2 = parseFloat(document.getElementById("n2").value);

    let resultHTML = `
        <p>Addition: ${n1 + n2}</p>
        <p>Subtraction: ${n1 - n2}</p>
        <p>Multiplication: ${n1 * n2}</p>
        <p>Division: ${n1 / n2}</p>
    `;

    document.getElementById("result").innerHTML = resultHTML;
}