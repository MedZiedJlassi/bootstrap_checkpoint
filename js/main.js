$('.interets i').on('mouseenter', (e) => {
    $(e.currentTarget.nextElementSibling).toggleClass('show');
//   console.log($(e.currentTarget.nextSibling))
   // alert('azerty')
});
$('.interets i').on('mouseleave', (e) => {
    $(e.currentTarget.nextElementSibling).toggleClass('show')
});  

//    var mouse = document.getElementsByTagName('i').onemouseover;
//     function mouseOver(mouse){
//         document.getElementById('A').className ='show';
// };