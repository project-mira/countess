function showScreen(screenId) {
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => screen.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
}

function incrementCounter(amount) {
    const counter = document.getElementById('counter');
    let value = parseInt(counter.innerText, 10) + amount;
    if (value < 0) value = 0;
    counter.innerText = value;
}

function showRegisters() {
    const input = document.getElementById('registers-input');
    const count = parseInt(input.value, 10);
    if (count >= 1) {
        const list = document.getElementById('registers-list');
        list.innerHTML = '';
        for (let i = 1; i <= count; i++) {
            const item = document.createElement('div');
            item.innerHTML = `<input type="checkbox" id="register-${i}"> <label for="register-${i}">Register <b>${i}</b></label>`;
            list.appendChild(item);
        }
        list.classList.remove('hidden');
    }
}

function showSelfCheckouts() {
    const start = parseInt(document.getElementById('self-checkout-start').value, 10);
    const end = parseInt(document.getElementById('self-checkout-end').value, 10);
    if (start >= 1 && end >= start) {
        const list = document.getElementById('self-checkouts-list');
        const inputs = document.getElementById('self-checkout-inputs');
        list.innerHTML = '';
        for (let i = start; i <= end; i++) {
            const item = document.createElement('div');
            item.innerHTML = `<input type="checkbox" id="self-checkout-${i}"> <label for="self-checkout-${i}">SCO <b>${i}</b></label>`;
            list.appendChild(item);
        }
        list.classList.remove('hidden');
        inputs.classList.add('hidden');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    showScreen('intro-screen');
});