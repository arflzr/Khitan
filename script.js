// Countdown
const eventDate = new Date("July 12, 2025 10:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = eventDate - now;

  if (distance < 0) return;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;
}

setInterval(updateCountdown, 1000);

// Save to Calendar
function addToCalendar() {
  const url = "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Khitanan+Muhammad+Fajar&dates=20250714T020000Z/20250714T050000Z&details=Acara+khitanan+putra+kami+Muhammad+Fajar&location=Jl+Melati+No+123+Bandung";
  window.open(url, "_blank");
}

// Tambah ucapan
document.addEventListener("DOMContentLoaded", function () {
  window.addUcapan = function (e) {
    e.preventDefault();
    const nama = document.getElementById("nama").value;
    const ucapan = document.getElementById("ucapan").value;

    const item = document.createElement("div");
    item.classList.add("ucapan-item");
    item.innerHTML = `<strong>${nama}</strong><p>${ucapan}</p>`;

    document.getElementById("daftarUcapan").prepend(item);

    document.getElementById("nama").value = "";
    document.getElementById("ucapan").value = "";
  };
});
