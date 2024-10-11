window.onscroll = () => {
    let mainhead = document.querySelector('.main-head');
    let logo = document.querySelector('.logo');
    if (window.scrollY > 20) {
        mainhead.classList.add('slidedown');
        logo.style.color = '#000';
    } else {
        mainhead.classList.remove('slidedown'); // تعديل هنا
        logo.style.color = '';
    }
};
