document.addEventListener('DOMContentLoaded', function () {
    const checkBox = document.getElementById('check');
    const cancelIcon = document.getElementById('cancel');
    const hamburgerIcon = document.getElementById('btn');

    if (checkBox) {
        checkBox.addEventListener('change', function () {
            if (this.checked) {
                cancelIcon.style.display = 'block';
                hamburgerIcon.style.display = 'none';
            } else {
                cancelIcon.style.display = 'none';
                hamburgerIcon.style.display = 'block';
            }
        });
    }
});
