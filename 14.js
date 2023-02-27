// let n1 = prompt("הכנס מספר ראשון")
// let n2 = prompt("הכנס מספר נוסף")

// let result = document.getElementById("result")
// result.innerHTML = addString(n1, n2)

// function addString(a, b) {
//     return Number(a) + Number(b)
// }

let result = document.getElementById("result")
let inp1 = document.getElementById("inp1")
let inp2 = document.getElementById("inp2")


function plus() {
    result.innerHTML = "התוצאה היא " + addString(inp1.value, inp2.value)
}

function addString(a, b) {
    return Number(a) + Number(b)
}

function dubel() {
    result.innerHTML = "המכפלה היא " + dubelString(inp1.value, inp2.value)
}

function dubelString(a, b) {
    return Number(a) * Number(b)
}

function minus() {
    result.innerHTML = "התוצאה היא " + (Number(inp1.value) - Number(inp2.value))
}

// function minusString(a, b) {
//     return Number(a) - Number(b)
// }

