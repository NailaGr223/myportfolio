const toggleBtn = document.getElementById('theme-toggle');
const body = document.body;

if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        
        if (body.classList.contains('dark-mode')) {
            toggleBtn.innerHTML = '☀️';
            localStorage.setItem('darkMode', 'true');
        } else {
            toggleBtn.innerHTML = '🌙';
            localStorage.setItem('darkMode', 'false');
        }
    });

    if (localStorage.getItem('darkMode') === 'true') {
        body.classList.add('dark-mode');
        toggleBtn.innerHTML = '☀️';
    }
}