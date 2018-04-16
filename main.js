$(document).ready(function(){
   //Call function to generate grid
   generateGrid();
   //make an ajax request for a random number
   //when click on grid-cell
   $('.grid-cell').click(function(){
      //assign to a variable the value of cell
      var actualCell = $(this);
      $.ajax({
         url: 'https://www.boolean.careers/api/random/int',
         method: 'GET',
         success: function(data){
            console.log(data.response);
            var randomNumb = data.response;
            if(data.response <= 5){
               actualCell.addClass('yellow-backgr');
               actualCell.text(randomNumb);
               actualCell.addClass('disabled');

            }
            else{
               actualCell.addClass('green-backgr');
               actualCell.text(randomNumb);
               actualCell.addClass('disabled');
            }
         },
         error: function(){

         }
      });

   });
});

//FUNZIONI
//generate 6x6 grid
function generateGrid(){
   var gridCont = $('#grid-cnt');
   for (var i = 0; i < 36; i++) {
      gridCont.append('<div class="grid-cell">' + '</div>');
   }
}
