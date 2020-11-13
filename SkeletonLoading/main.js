

window.onload = () => {
    setTimeout(() => {

        const title = document.querySelector(".card__title");
        const description = document.querySelector(".card__description");
        const image = document.querySelector(".card__image");
        const source = "./lena.png"
        // Remove the 'loading' class
        title.classList.remove("loading");
        description.classList.remove("loading");
        image.classList.remove("loading");

        // Add the content
        title.textContent = 'Title';
        description.textContent = 'This is the description.';
        image.innerHTML = `<img src="${source}" style="">`;
    }, 2000);
}


