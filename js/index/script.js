menu = document.querySelector('.burger-header__menu');
header__inner = document.querySelector('.header__inner ');
burger = document.querySelector('.burger-header__burger');
input = document.querySelector('.footer-form__file');
body = document.body;

window.onload = function(){
    document.addEventListener("click", documentActions);

    function documentActions(e){
        const targetElement = e.target;
        if(targetElement.classList.contains('burger-header__toggle')){
            menu.classList.toggle('_active');
            body.classList.toggle('_menu');
            if(window.innerWidth < 992){
                header__inner.classList.toggle('_menu');
                burger.classList.toggle('_active');
            }
        }
        if(targetElement.classList.contains('footer-form__file-button')){
            input.click();
            input.addEventListener("change", log, false)
            function log(){
                targetElement.value = input.files[0].name
            }
            // File upload func
        }
    }
    const header = document.querySelector('.header');

    const callback = function (entries, observer) {
        if(entries[0].isIntersecting){
            header.classList.remove('_scroll')
        } else{
            header.classList.add('_scroll')
        }
    }

    const headerObserver = new IntersectionObserver(callback);
    headerObserver.observe(header);
}

function changeText(value) {
    document.querySelector('.footer-form__tel').value = value;   
}

