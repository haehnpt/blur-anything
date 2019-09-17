document.addEventListener('contextmenu', (e) => {
    if (e.ctrlKey) {
        e.preventDefault();
        if (e.target.style.filter === 'blur(8px)') {
            e.target.style.filter = '';
        }
        else {
            e.target.style.filter = 'blur(8px)';
        }
    }
}, false);