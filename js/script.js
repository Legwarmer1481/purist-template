import Header from "./modules/Header.js";
/**
 * Class Main that runs the other JavaScript codes.
 */
class Main{
    constructor(){
        this.componentList = {
            Header,
        }
        this.init();
    }
    init(){
        console.log('JavaScript is loaded !')
        const components = document.querySelectorAll('[data-component]');

        for (const element of components) {
            const componentName = element.dataset.component;

            if(this.componentList[componentName]){
                new this.componentList[componentName](element);
            }else{
                console.warn(`The ${componentName} component doesn't exist !`);
            }
        }
    }
}

new Main();