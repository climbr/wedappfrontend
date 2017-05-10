// create a variable that will be incremented (later) as the user answers more questions

var i = 0;

// create a variable that is a javascript object, currently local 
// but will be a link to an external doc eventually

// var json = link(js/questions.json);

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

//create the main js function which will listen for clicks to update questions and place them in the right place

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

// if the yes box is clicked (in main) create a new box in the yes column with the original question

function createBoxYes(i) {
    var box = '<div class="panel lightblue"><button type="button" class="close" aria-label="Close"><span aria-hidden="true">&times;</span></button><div class="panel-heading">' + json[i].title + '</div> <div class="panel-body text-center"> <p>' + json[i].question + '</p> </div></div>';
    $("#yesColumn").append(box);// Insert new elements after img
}

//if the no box is clicked (in main) create a new box in the no column with the original question

function createBoxNo(i) {
    var box = '<div class="panel coral"><button type="button" class="close" aria-label="Close"><span aria-hidden="true">&times;</span></button><div class="panel-heading">' + json[i].title + '</div> <div class="panel-body text-center"> <p>' + json[i].question + '</p> </div></div>';
    $("#noColumn").append(box);      // Insert new elements after img
}

//show the i-th 

function updateQuestion(i) {
    var currentTitle = json[i].title;
    var currentQuestion = json[i].question;
    document.getElementById("title").innerHTML = currentTitle;
    document.getElementById("question").innerHTML = currentQuestion;
}

//when the x is clicked, move the box to the alternate column

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
  xhttp.open("GET", "questions.json", true);
  xhttp.send();
    }
*/

$(document).ready(main);