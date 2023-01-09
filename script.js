let counterEl = document.getElementById("counter")
let count = parseInt(localStorage.Save) || 0;
counterEl.innerHTML = count

function increment() {
    count++;
    counterEl.innerHTML = count
}

function save() {
    localStorage.setItem("Save", JSON.stringify(count));
}

function reset() {
    localStorage.clear("Save");
    count = 0
    counterEl.innerHTML = count
}
