let config = {
    type:'loop',
    arrows:false,
    pagination:true,
    perPage: 1,
    perMove:1,
    easing:'ease',
    padding: { top: 40},
    breakpoints:{
    767:{
            perPage:1,
           
        },
        420:{
            perPage:1,
        }
    }
};
new Splide( '._coach_testimonial_slider',config ).mount();
