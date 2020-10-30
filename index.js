$(function() {
  // $('.building__facade').draggable({
  //    axis: "x",
  //      });

 
 $(".building__facade__btn").click(function(){
 let x = "-4%"
 let xEnd = "-90%"
 var p = $('.building__facade').position();
  console.log(p);
  if( $('.building__facade').offset().left >= -76.796875){
    $('.building__facade').css("left", xEnd);
   
  }
 else{
  $('.building__facade').css("left", x);
 }
    
 })
       
});