gsap.from (".logo h1", {
    opacity:0,
    delay:1,
    x:20
})

const menuItem = document.querySelector('.menu-item');

gsap.from(menuItem.children,{
    opacity:0,
    duration:1,
    x:0,
    stagger:{
        amount:1
    }
})

gsap.utils.toArray('.logo-img').forEach(logoImg => {
    gsap.fromTo(logoImg,{
        opacity:0,
        y:100,
        rotation:450
    },{
        opacity:1,
        y:0,
        rotation:0,
        duration:1,
        delay:1.5,
        scrollTrigger:logoImg
    })
})

gsap.utils.toArray('.Heading').forEach(Heading => {
    gsap.fromTo(Heading,{
        opacity:0,
        x:300,
        skewX:60,
        letterSpacing:'10px'
    },{
        opacity:1,
        x:0,
        duration:1,
        delay:.4,
        letterSpacing:'0',
        skewX:0,
        scrollTrigger:Heading
    })
})

gsap.utils.toArray('p').forEach(p => {
    gsap.fromTo(p,{
        opacity:0,
        x:150,
        skewX:30,
    },{
        opacity:1,
        x:0,
        duration:1,
        delay:.4,
        skewX:0,
        scrollTrigger:p
    })
})

gsap.utils.toArray('.contact-div').forEach(cd => {
    gsap.fromTo(cd,{
        opacity:0,
        y:200,
        skewY:0,
    },{
        opacity:1,
        y:0,
        duration:1,
        delay:.4,
        skewY:0,
        scrollTrigger:cd
    })
})

gsap.utils.toArray('.btn').forEach(btn => {
    gsap.fromTo(btn,{
        opacity:0,
    },{
        opacity:1,
        duration:1,
        delay:1,
        scrollTrigger:btn
    })
})

gsap.from('.img-1',{
    opacity:0,
    duration:1,
    delay:0.5,
    scale:0.5
})

gsap.fromTo('.img-2',{
    opacity:0,
    skewY:20,
    scale:0.2
},{
    opacity:1,
    skewY:0,
    scale:1,
    duration:1,
    delay:0.5,
    scrollTrigger:'.img-2'
})

gsap.utils.toArray('.img-3').forEach(img3 => {
    gsap.fromTo(img3,{
        opacity:0,
        width:'0%'
    },{
        opacity:1,
        duration:1,
        delay:0.2,
        width:'40%',
        scrollTrigger:img3
    })
})



