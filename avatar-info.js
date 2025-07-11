document.addEventListener('DOMContentLoaded', function() {
  function updateCountdowns() {
    const countdowns = document.querySelectorAll('.countdown');
    countdowns.forEach(span => {
      const dateStr = span.getAttribute('data-date');
      const eventDate = new Date(dateStr);
      const now = new Date();
      const diff = eventDate - now;
      if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        span.textContent = `${days} ngày, ${hours} giờ, ${minutes} phút`;
      } else {
        span.textContent = 'Đã diễn ra';
      }
    });
  }
  updateCountdowns();
  setInterval(updateCountdowns, 60000);
});
