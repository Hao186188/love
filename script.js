document.addEventListener('DOMContentLoaded', () => {
    const startDate = '2025-2-7 00:00:00';
    const sweetMessages = [
        'Chúc em một ngày thật vui vẻ và hạnh phúc nhé! 💖',
        'Anh yêu em nhiều hơn hôm qua và ít hơn ngày mai! 💌',
        'Cảm ơn em đã luôn bên anh, mãi yêu em! 🌹',
        'Mỗi ngày bên em là một ngày tuyệt vời! 🥰',
        'Chúc em luôn cười thật tươi như hôm nay! 😘',
        'Anh sẽ luôn là bờ vai vững chắc cho em! 💪',
        'Em là món quà tuyệt vời nhất mà anh từng nhận được! 🎁',
        'Yêu em là điều ngọt ngào nhất cuộc đời anh! 🍬',
        'Chúc em một ngày tràn đầy năng lượng và yêu thương! 🌞',
        'Anh nhớ em nhiều lắm! 💭',
        'Mỗi ngày đều muốn nói: Anh yêu em! 💕',
        'Chúc em luôn xinh đẹp và rạng rỡ! 🌸',
        'Anh mong được bên em mãi mãi! ⏳',
        'Em là ánh sáng trong cuộc đời anh! ✨',
        'Chúc em một ngày bình yên và hạnh phúc! 🕊️'
    ];

    function showDailyMessage() {
        // Mỗi ngày một thông điệp, dựa vào số ngày từ 1/1/1970
        const today = new Date();
        const dayIndex = Math.floor(today.getTime() / (1000 * 3600 * 24));
        const msg = sweetMessages[dayIndex % sweetMessages.length];
        const msgElement = document.querySelector('.love-message p');
        if (msgElement) {
            msgElement.textContent = msg;
        }
    }

    function updateLoveTimer() {
        const startDateObj = new Date(startDate);
        const currentDate = new Date();

        // Tính số ngày
        const timeDifference = currentDate.getTime() - startDateObj.getTime();
        const daysDifference = Math.floor(timeDifference / (1000 * 3600 * 24));

        // Tính giờ, phút, giây
        const hours = Math.floor((timeDifference % (1000 * 3600 * 24)) / (1000 * 3600));
        const minutes = Math.floor((timeDifference % (1000 * 3600)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        // Định dạng 00:00:00
        const timeFormatted = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

        // Cập nhật số ngày
        const daysElement = document.getElementById('love-days');
        if (daysElement) {
            daysElement.textContent = daysDifference;
        }

        // Cập nhật thời gian (00:00:00)
        const timeElement = document.getElementById('love-hours');
        if (timeElement) {
            timeElement.textContent = timeFormatted;
        }

        // Cập nhật title trang
        document.title = `${daysDifference} Ngày Yêu ❤️`;
    }

    // Cập nhật mỗi giây
    setInterval(updateLoveTimer, 1000);
    // Hiển thị lời chúc mỗi ngày
    showDailyMessage();
    // Chạy lần đầu ngay khi tải trang
    updateLoveTimer();
});