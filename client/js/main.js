var i = 0;

var json = [
   {
        "title":"q1",
        "question":"question1"
    },
    {
         "title":"q2",
         "question":"question2"
    },
    {
         "title":"q3",
         "question":"question3"
    },
    {
         "title":"q4",
         "question":"question4"
    },
    {
         "title":"q5",
         "question":"question5"
    },
    {
        "title":"",
        "question":"All Done!"
    }
];

function main(){
    updateQuestion(i);
    i++;
    $('#yes').on('click', function(){
        //loadDoc(i);
        createBoxYes(i-1);
        updateQuestion(i);
        i++;
       $('.close').on('click', function(){
            toggleBox(this);
        });
    });
    $('#no').on('click', function(){
         //loadDoc(i);
        updateQuestion(i);
        createBoxNo(i-1);
        i++;
        $('.close').on('click', function(){
            toggleBox(this);
        });
    });
    
    $('.close').on('click', function(){
       toggleBox(this);
    });
    
}

function createBoxYes(i) {
    var box = '<div class="panel lightblue"><button type="button" class="close" aria-label="Close"><span aria-hidden="true">&times;</span></button><div class="panel-heading">' + json[i].title + '</div> <div class="panel-body text-center"> <p>' + json[i].question + '</p> </div></div>';
    $("#yesColumn").append(box);// Insert new elements after img
}

function createBoxNo(i) {
    var box = '<div class="panel coral"><button type="button" class="close" aria-label="Close"><span aria-hidden="true">&times;</span></button><div class="panel-heading">' + json[i].title + '</div> <div class="panel-body text-center"> <p>' + json[i].question + '</p> </div></div>';
    $("#noColumn").append(box);      // Insert new elements after img
}

function updateQuestion(i) {
    var currentTitle = json[i].title;
    var currentQuestion = json[i].question;
    document.getElementById("title").innerHTML = json[i].title;
    document.getElementById("question").innerHTML = currentQuestion;
}


function toggleBox(x){
    if($(x).parent().parent().is($('#yesColumn'))){
        $(x).parent().addClass('coral');
        $(x).parent().removeClass('lightblue');
        $(x).parent().appendTo($("#noColumn"));
    }
    else{
        $(x).parent().addClass('lightblue');
        $(x).parent().removeClass('coral');
        $(x).parent().appendTo($("#yesColumn"));
    }
}

/*
function loadDoc(i) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       document.getElementById("question").innerHTML = this.responseText;
    }
  };
   document.getElementById("title").innerHTML = i+2;
  xhttp.open("GET", "test.txt", true);
  xhttp.send();
    }
*/

$(document).ready(main);