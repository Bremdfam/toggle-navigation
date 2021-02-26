const clickbutton = document.querySelector('.toggle-btn');

clickbutton.addEventListener('click', () => { /*() = > is short form of a function*/
    document.querySelector('nav').classList.toggle('show-nav')
});