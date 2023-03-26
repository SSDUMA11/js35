const area = document.querySelector('input');
area.value = localStorage.getItem('input');
area.oninput = () => {
    localStorage.setItem('input', area.value)
};