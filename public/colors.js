addEventListener('load' , () => {
    const div = document.querySelector('.colors');
    const colors = {'accent-blue' : '#9CA6D9', 'accent-gray' : '#5a5a5c', 'accent-purple' : '#9d86cf'}
    if (window.localStorage.getItem('color-accent') == null) {
        window.localStorage.setItem('color-accent', colors['accent-blue'])
    }

    document.documentElement.style.setProperty('--color-accent', window.localStorage.getItem('color-accent'))

    div.childNodes.forEach(child => {
        child.addEventListener('click', () => {
            document.documentElement.style.setProperty('--color-accent', colors[child.id])
            window.localStorage.setItem('color-accent', colors[child.id])
        });
    });
});