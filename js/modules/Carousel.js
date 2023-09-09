import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs';
/** 
* Carousel class to instanciate a carousel through Swiper
*/
export default class Carousel {
    /**
     * Constructor
     * @param {HTMLElement} element - HTML element associated to data-component="Carousel"
     */
    constructor(element){
        this.element = element;
        this.options = {
            pagination: {
                el: this.element.querySelector('.swiper-pagination'),
            },
            navigation: {
                nextEl: this.element.querySelector('.swiper-button-next'),
                prevEl: this.element.querySelector('.swiper-button-prev'),
            },
            slidesPerView: 2,
            spaceBetween: 16,
            centeredSlides: true,
            grabCursor: true,
            keyboard: {
                enabled: true,
            },
        };

        this.init();
    }
    init(){
        console.log('Carousel component loaded')
        
        new Swiper(this.element, this.options);
    }


}