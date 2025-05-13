function fun() {
    let n1 = parseFloat(document.getElementById("n1").value);
    let n2 = parseFloat(document.getElementById("n2").value);

    let add = n1 + n2;
    let sub = n1 - n2;
    let mul = n1 * n2;
    let div = n1 / n2;

    document.body.innerHTML += `
        <p><strong>Addition:</strong> ${add}</p>
        <p><strong>Subtraction:</strong> ${sub}</p>
        <p><strong>Multiplication:</strong> ${mul}</p>
        <p><strong>Division:</strong> ${div}</p>
    `;
}