class StyleCSS{
    constructor(classSelector){
        this.selector = classSelector;
        this.elem = document.querySelectorAll(this.selector);
        this.defaultUnit = 'px';
    }

    mrg(value, unit = this.defaultUnit){
        this.elem.forEach(el => {
            el.style.margin = value + unit;
        })
        return this;
    }

    mt(value, unit = this.defaultUnit){
        this.elem.forEach(el => {
            el.style.marginTop = value + unit;
        })
        return this;
    }

    mr(value, unit = this.defaultUnit){
        this.elem.forEach(el => {
            el.style.marginRight = value + unit;
        })
        return this;
    }

    mb(value, unit = this.defaultUnit){
        this.elem.forEach(el => {
            el.style.marginBottom = value + unit;
        })
        return this;
    }

    ml(value, unit = this.defaultUnit){
        this.elem.forEach(el => {
            el.style.marginLeft = value + unit;
        })
        return this;
    }

    pdd(value, unit = this.defaultUnit){
        this.elem.forEach(el => {
            el.style.padding = value + unit;
        })
        return this;
    }

    pt(value, unit = this.defaultUnit){
        this.elem.forEach(el => {
            el.style.paddingTop = value + unit;
        })
        return this;
    }

    pr(value, unit = this.defaultUnit){
        this.elem.forEach(el => {
            el.style.paddingRight = value + unit;
        })
        return this;
    }

    pb(value, unit = this.defaultUnit){
        this.elem.forEach(el => {
            el.style.paddingBottom = value + unit;
        })
        return this;
    }

    pl(value, unit = this.defaultUnit){
        this.elem.forEach(el => {
            el.style.paddingLeft = value + unit;
        })
        return this;
    }

    bgc(color){
        this.elem.forEach(el => {
            el.style.backgroundColor = color;
        })
        return this;
    }
}

function css(userSelector){
    return new StyleCSS(userSelector);
}

css('p').mb(20).bgc('skyblue');
