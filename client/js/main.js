function main(){
    $('#yes').on('click', function(){
        $('#question').text("answered");
        createBoxYes();
    });
    
    $('#no').on('click', function(){
        $('#question').text("answered");
        createBoxNo();
    });
    
    //$('.close').on('click', function(){
      //  deleteBox();
    //});
}

function createBoxYes() {
    var box = '<div class="panel lightblue"> <div class="panel-heading">Question 1</div> <div class="panel-body text-center"> <p>blah blah blah</p> </div></div>';
    $("#yesColumn").append(box);      // Insert new elements after img
}

function createBoxNo() {
    var box = '<div class="panel coral"> <div class="panel-heading">Question 1</div> <div class="panel-body text-center"> <p>blah blah blah</p> </div></div>';
    $("#noColumn").append(box);      // Insert new elements after img
}

/* function deleteBox(box) {
  $(box).remove();
}
*/

$(document).ready(main);




