function featherReplace() {
    if (feather) {
        feather.replace();
    }
}

function drawerTrigger() {
    var isActive = false;
    let drawer = document.querySelector('.site-drawer');
    let triggers = document.querySelectorAll('.drawer-trigger');
    let searchTL = gsap.timeline({paused:true});
        searchTL.to('.site-drawer', .4, {
            scaleX:1, 
            opacity:1, 
            visibility: 'visible',
            transformOrigin:"center center",
            ease: 'power4.out',
            
        });
        searchTL.from('.site-drawer .drawer-content', .3, {
            y: 100,
            opacity: 0,
            ease: 'power2.out',
            stagger: 0.15,
        })

    for (let trigger of triggers) {
        trigger.onclick = function() {
            isActive = !isActive;
            searchTL.play();
        }
    }
    drawer.querySelector('.exit').onclick = function() {
            isActive = !isActive;
            searchTL.reverse();
    }
}



window.addEventListener('load', function(){
    featherReplace();
    drawerTrigger();
})