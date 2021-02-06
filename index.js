class StyleCSS{
    constructor(classSelector){
        this.selector = classSelector;
        this.elem = document.querySelectorAll(this.selector);
    }

    bgc(color){
        this.elem.forEach(el => {
            el.style.backgroundColor = color;
        })
    }
}

function css(userSelector){
    return new StyleCSS(userSelector);
}

css('p').bgc('#ffe');