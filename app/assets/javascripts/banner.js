// function marquee(a, b) {
//     let width = b.width();
//     let start_pos = a.width() + 300;
//     let end_pos = -width;
    
//     function scroll() {
//         console.log(width);
//         if (b.position().left <= -width) {
//             b.css('left', start_pos);
//             scroll();
//         }
//         else {
//             time = (parseInt(b.position().left, 10) - end_pos) *
//                 (30000 / (start_pos - end_pos)); // Increase or decrease speed by changing value 10000
//             b.animate({
//                 'left': -width + (-width + -500)
//             }, time, 'linear', function() {
//                 scroll();
//             });
//             b.css('left', start_pos); // Added scrolling effect - Jwilson
//         }
//     }
    
//     b.css({
//         'left': start_pos
//     });
//     scroll(a, b);
//     b.mouseenter(function() {     // Remove these lines
//         b.stop();                 //
//         b.clearQueue();           // if you don't want
//     });                           //
//     b.mouseleave(function() {     // marquee to pause
//         scroll(a, b);             //
//     });                           // on mouse over
//     }
    
//     $(document).ready(function() {
//         marquee($('#gear_banner'), $('img'));  //Enter name of container element & marquee element
//     });

// setInterval(function() {
//     let left1 = parseInt($('#track1').css('left'));
//     // console.log('left1: ', left1);
//     // console.log('logo:', logo);
//     if($('#left1').is(":hover")){
//         $('#track1').css('left', left1+2);
//         if(left1 == 10){
//             $('#track1').css('left', left1);
//         }
        
        
//     } else if($('#right1').is(":hover")){
//         $('#track1').css('left', left1-2);
//         if(left1 == -498){            
//             $('#track1').css('left', left1);
//         }
//     }

//     // if(left1 == -1700){
//     //     left1 = 650;
//     //     $('#track1').css('left', left1-2);
//     // }
// }, 10);
// $(function(){
//     let logos = document.getElementsByClassName('logos')
//     console.log(logos);
//     let logo = logos[logos.length - 1];
//     console.log(logo);
//     var handler = onVisibilityChange(logo, function() {
//         console.log('visible');
//         clearInterval(timer_one);
//     });
//     $(window).on('DOMContentLoaded load resize scroll', handler);
// })

// function isElementInViewport (el) {
    
//     //special bonus for those using jQuery
//     if (typeof jQuery === "function" && el instanceof jQuery) {
//         el = el[0];
//     }

//     var rect = el.getBoundingClientRect();

//     return (
//         rect.top >= 0 &&
//         rect.left >= 0 &&
//         rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
//         rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
//     );
// }

// function onVisibilityChange(el, callback) {
//     var old_visible;
//     return function () {
//         var visible = isElementInViewport(el);
//         if (visible != old_visible) {
//             old_visible = visible;
//             if (typeof callback == 'function') {
//                 callback();
//             }
//         }
//     }
// }


