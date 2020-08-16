const controles = document.getElementById('controles');
const css = document.querySelector('.css');
const btn = document.querySelector('.btn');

const handleStyle = {
    element: btn,

    texto(value){
        this.element.innerText = value;
    },

    fontFamily(value){
        this.element.style.fontFamily = value;
    },

    fontSize(value){
        this.element.style.fontSize = value + 'rem';
    },

    color(value) {
        this.element.style.color = value;
    },

    backgroundColor(value) {
        this.element.style.backgroundColor = value;
    },

    width(value){
        this.element.style.width = value + 'px';
    },

    height(value) {
        this.element.style.height = value + 'px';
    },

    border(value){
        this.element.style.border = value; 
    },

    borderRadius(value){
        this.element.style.borderRadius = value + 'px'; 
    }
}

controles.addEventListener('change', handleChange);
setValues();


function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    handleStyle[name](value);
    saveValues(name, value);
    showCss();
}

function showCss(){
    css.innerHTML = '<span>' + btn.style.cssText.split('; ').join(';</span><span>');
}

function saveValues(name, value){
    localStorage[name] = value;
}

function setValues(){
    const properties = Object.keys(localStorage);
    
    properties.forEach(propertie => {
        // console.log(controles.elements[propertie].name);
        handleStyle[propertie](localStorage[propertie]);
        controles.elements[propertie].name = localStorage[propertie];
    });

    showCss();
}



