$(document).ready(function(){
    var currentIndex = 0;
    var slides = $('.slide');

    function showSlide(index) {
        slides.hide().eq(index).fadeIn();
    }

    // Show the initial slide
    showSlide(currentIndex);

    // Next button click handler
    $('#next').click(function(){
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    });

    // Previous button click handler
    $('#prev').click(function(){
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    });
});
