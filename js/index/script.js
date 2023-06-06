body = document.body;

window.onload = function () {
    document.addEventListener("click", documentActions);

    function documentActions(e) {
        const targetElement = e.target;
        if (targetElement.classList.contains('burger-header')) {
            console.log(true)
            body.classList.toggle('_menu');
            document.querySelector('.burger-header__burger').classList.toggle('_active')
            document.querySelector('.header__drop').classList.toggle('_active')
        }
    }

}

const downloadFile = () => {
    let anchor = document.createElement('a');
    anchor.setAttribute('href', '/app/app-release.apk');
    anchor.setAttribute('download', '');
    document.body.appendChild(anchor);
    anchor.click();
    anchor.parentNode.removeChild(anchor);
}



