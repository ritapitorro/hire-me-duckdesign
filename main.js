// Definir a data para a contagem decrescente (exemplo: 14 de abril de 2025 às 23h59m)
const countdownDate = new Date("April 14, 2025 23:59:59").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = countdownDate - now;

    if (timeLeft > 0) {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById("days").textContent = days;
        document.getElementById("hours").textContent = hours;
        document.getElementById("minutes").textContent = minutes;
        document.getElementById("seconds").textContent = seconds;
    } else {
        document.getElementById("countdown").innerHTML = "<h2>Time’s up, but this golden opportunity is still waiting for you… for now!! 🚀</h2>";
    }
}

// Atualizar a contagem a cada segundo
setInterval(updateCountdown, 1000);

// Iniciar a contagem imediatamente
updateCountdown();
