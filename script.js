// script.js
document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.querySelector('.theme-toggle-btn');
    const copyBtns = document.querySelectorAll('.copy-btn');
    const copyNotifications = document.querySelectorAll('.copy-notification');

    themeToggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });

    copyBtns.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            const target = document.querySelector(btn.getAttribute('data-clipboard-target'));
            navigator.clipboard.writeText(target.textContent).then(() => {
                copyNotifications[index].classList.add('show');
                setTimeout(() => copyNotifications[index].classList.remove('show'), 1000);
            });
        });
    });
});
