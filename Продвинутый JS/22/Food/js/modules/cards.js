function cards () {
    //Используем классы для карточек

    class MenuCard{
        constructor(src, alt, title, descr, price, parentSelector, ...classes) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.classes = classes;
            this.parent = document.querySelector(parentSelector);
            this.transfer = 27;
            this.changeToUAH();
        }

        changeToUAH() {
            this.price = this.price * this.transfer;
        }

        render() {
            const element = document.createElement('div');
                if (this.classes.length === 0) {
                    this.element = 'menu__item';
                    element.classList.add(this.element);
                } else {
                    this.classes.forEach(className => element.classList.add(className));
                }
            //

            element.innerHTML = `
                <img src=${this.src} alt=${this.alt}>
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.descr}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                </div>
            `;
            this.parent.append(element);
        }

    }

    const getResource = async (url) => {
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`); 
        }

        return await res.json();
    };

    axios.get('http://localhost:3000/menu')
        .then(obj => {
            obj.data.forEach(({img, altimg, title, descr, price}) => {
                new MenuCard(img, altimg, title, descr, price,'.menu .container').render();
        });
    });

    setTimeout(() => {
    const cardElement = document.querySelectorAll('.menu__item'),
    cardHeigh = document.querySelectorAll('.menu__item-descr');
    const box = document.querySelector('.menu .container');

    function reworkHeight () {
        cardElement.forEach((elem, i ) => {
            cardHeigh[i].style.height = cardHeigh[i].clientHeight + box.clientHeight - elem.clientHeight + 'px';
        });   
    }

    reworkHeight();
    }, 100);
}

module.exports = cards;