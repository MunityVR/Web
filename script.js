(function () {
  const SECRET = "my-secret-key";
  const counterEl = document.getElementById("counter");
  let count = 0;

  async function hashCount(n) {
    const buf = new TextEncoder().encode(n + SECRET);
    const hash = await crypto.subtle.digest("SHA-256", buf);
    return Array.from(new Uint8Array(hash)).map(b => b.toString(16).padStart(2, "0")).join("");
  }

  async function loadCount() {
    try {
      const raw = JSON.parse(localStorage.getItem("Save"));
      if (!raw) return 0;
      const expected = await hashCount(raw.count);
      if (expected !== raw.hash) {
        alert("Tampered save detected! Resetting.");
        localStorage.removeItem("Save");
        return 0;
      }
      return raw.count;
    } catch {
      return 0;
    }
  }

  async function save() {
    const hash = await hashCount(count);
    localStorage.setItem("Save", JSON.stringify({ count, hash }));
  }

  function reset() {
    localStorage.removeItem("Save");
    count = 0;
    counterEl.innerHTML = count;
  }

  function increment() {
    count++;
    counterEl.innerHTML = count;
  }

  setInterval(() => { counterEl.innerHTML = count; }, 500);

  loadCount().then(saved => {
    count = saved;
    counterEl.innerHTML = count;
  });

  // expose only the functions your HTML buttons need
  window.increment = increment;
  window.save = save;
  window.reset = reset;
})();
