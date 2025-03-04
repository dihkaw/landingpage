document.addEventListener("DOMContentLoaded", function () {
    console.log("Undangan Pernikahan Loaded!");

    // COUNTDOWN TIMER
    function updateCountdown() {
        const weddingDate = new Date("August 10, 2025 10:00:00").getTime();
        const now = new Date().getTime();
        const timeLeft = weddingDate - now;

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById("timer").innerHTML = `${days} hari ${hours} jam ${minutes} menit ${seconds} detik`;
    }

    setInterval(updateCountdown, 1000);

    // RSVP FORM
    document.getElementById("rsvp-form").addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Terima kasih! Kehadiran Anda telah dikonfirmasi.");
    });
});
