function main(){
    $('#yes').on('click', function(){
        $('#question').text("answered");
        createBoxYes();
        $('.close').on('click', function(){
            deleteBox(this);
        });
    });
    
    $('#no').on('click', function(){
        $('#question').text("answered");
        createBoxNo();
        $('.close').on('click', function(){
            deleteBox(this);
        });
    });
    
    $('.close').on('click', function(){
       deleteBox(this);
    });
}

function createBoxYes() {
    var box = '<div class="panel lightblue"><button type="button" class="close" aria-label="Close"><span aria-hidden="true">&times;</span></button><div class="panel-heading">Question 1</div> <div class="panel-body text-center"> <p>blah blah blah</p> </div></div>';
    $("#yesColumn").append(box);      // Insert new elements after img
}

function createBoxNo() {
    var box = '<div class="panel coral"><button type="button" class="close" aria-label="Close"><span aria-hidden="true">&times;</span></button><div class="panel-heading">Question 1</div> <div class="panel-body text-center"> <p>blah blah blah</p> </div></div>';
    $("#noColumn").append(box);      // Insert new elements after img
}

 function deleteBox(x) {
  $(x).parent().remove();
}


$(document).ready(main);




