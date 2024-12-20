document.addEventListener("DOMContentLoaded", () => {
    // Удаляем preloader через 3 секунды
    setTimeout(() => {
        document.querySelector(".preloader").style.display = "none";
    }, 3000); // 3000 миллисекунд = 3 секунды
});