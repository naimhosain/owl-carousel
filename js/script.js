$('.one').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
    nav:true,
    responsive:{
        0:{
            items:2
        },
        425:{
            items:3
        },
        768:{
            items:4
        },
        1000:{
            items:6
        }
        
    }
})
$('.two').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        425:{
            items:2
        },
        768:{
            items:3
        },
        1000:{
            items:5
        }
        
    }
})