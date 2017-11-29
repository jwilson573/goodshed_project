// $(document).ready(function(){
//   console.log("initialize.js")
//     $('.track').slick({
//         centerMode: true,
//         variableWidth: true,
//         centerPadding: '60px',
//         responsive: [
//           {
//             breakpoint: 768,
//             settings: {
//               arrows: false,
//               centerMode: true,
//               variableWidth: true,
//               centerPadding: '40px',
              
//             }
//           },
//           {
//             breakpoint: 480,
//             settings: {
//               arrows: false,
//               centerMode: true,
//               variableWidth: true,
//               centerPadding: '40px',
              
//             }
//           }
//         ]
//       });


// });
// $(document).ready(function(){
//   $('.owl-carousel').owlCarousel();
// });

var createSlick = function () {
    $('.my_slick').not('.slick-initialized').slick({
        centerMode: true,
        slidesToShow: 5,
        responsive: [
        {
            breakpoint: 768,
            settings: {
            arrows: false,
            centerMode: true,
            slidesToShow: 3
            }
        },
        {
            breakpoint: 480,
            settings: {
            arrows: false,
            centerMode: true,
            slidesToShow: 1
            }
        }
        ]
    });
}

// $(document).ready(function(){
//     createSlick();
// });

// $(document).not('.slick-initialized', function() {
//     createSlick();
// })

$(document).ready(function() {
    alert(createSlick);
    createSlick();
});
createSlick();
