var animation = () => {

    gsap.from('nav a', {
        opacity: 0,
        y: -200,
        duration: 2
    })
    gsap.from('nav button,nav input', {
        opacity: 0,
        y: 200,
        duration: 2,
        stagger: 0.7
    })
    gsap.from('.home', {
        opacity: 0,
        duration: 2,
    })

    gsap.from('.book .l', {
        x: -300,
        opacity: 0,
        duration: 2,
        scrollTrigger: '.l'
    })

    gsap.from('.book .b', {
        opacity: 0,
        duration: 2,
        scrollTrigger: '.r'
    })
    gsap.from('.packages .card img', {
        y: -200,
        opacity: 0,
        duration: 2,
        stagger: 0.5,
        scrollTrigger: '.packages .card'
    })
    gsap.from('.about .card img', {
        y: 200,
        opacity: 0,
        duration: 1,
        scrollTrigger: '.about .card img'
    })
    gsap.to('footer i',{
        opacity:1,
        duration:0.7,
        stagger:0.2,
        scrollTrigger:'footer i'
    })
}
$(document).ready(function () {
    // animation in website
    animation()
    // Smooth animation scrolling
    count = 0;
    wordsArray = ["Beta", "Gamma", "Delta", "Alpha"];
    setInterval(function () {
      count++;
      $(".changecontent").fadeOut(400, function () {
        $(this).text(wordsArray[count % wordsArray.length]).fadeIn(400);
      });
    }, 2000);


});
