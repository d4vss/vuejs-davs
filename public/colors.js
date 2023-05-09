addEventListener('load' , () => {
    const div = document.querySelector('.colors');
    const colors = {'accent-blue' : 'rgb(132, 173, 235)', 'accent-gray' : '#2f2f2f', 'accent-red' : '#e67e7e'}
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