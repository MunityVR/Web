let counterEl = document.getElementById("counter")
let saveEl = document.getElementById("save-el")
let message = "Website has been reloaded!"
let count = 0

function increment() {
    count += 1
    counterEl.textContent = count
}

function save() {
    let sep = count + " - "
    saveEl.textContent += sep
    console.log(count)

    count = 0
    counterEl.textContent = count
}
