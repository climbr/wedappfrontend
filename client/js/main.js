var i = 0;

function main(){
   $('#questionNumber').innerHTML= i+1;
    $('#yes').on('click', function(){
                 loadDoc(i);
                 i++;
        createBoxYes(i);
        });
        $('.close').on('click', function(){
            deleteBox(this);
        });
    
    $('#no').on('click', function(){
         loadDoc(i);
         i++;
        createBoxNo(i);
        $('.close').on('click', function(){
            deleteBox(this);
        });
    });
    
    $('.close').on('click', function(){
       deleteBox(this);
    });
    
}

function createBoxYes(i) {
    var box = '<div class="panel lightblue"><button type="button" class="close" aria-label="Close"><span aria-hidden="true">&times;</span></button><div class="panel-heading">Question </div> <div class="panel-body text-center"> <p>blah blah blah</p> </div></div>';
    $("#yesColumn").append(box);// Insert new elements after img
}

function createBoxNo(i) {
    var box = '<div class="panel coral"><button type="button" class="close" aria-label="Close"><span aria-hidden="true">&times;</span></button><div class="panel-heading">Question 1</div> <div class="panel-body text-center"> <p>blah blah blah</p> </div></div>';
    $("#noColumn").append(box);      // Insert new elements after img
}

 function deleteBox(x) {
  $(x).parent().remove();
}

function loadDoc(i) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       document.getElementById("question").innerHTML = this.responseText;
    }
  };
   document.getElementById("questionNumber").innerHTML = i+2;
  xhttp.open("GET", "test.txt", true);
  xhttp.send();
    }


$(document).ready(main);




