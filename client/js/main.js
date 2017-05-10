// create a variable that will be incremented (later) as the user answers more questions

var i = 0;

// create a variable that is a javascript object, currently local 
// but will be a link to an external doc eventually

var json = (function() {
        var json = null;
        $.ajax({
            'async': false,
            'global': false,
            'url': "questions.json",
            'dataType': "json",
            'success': function (data) {
                json = data;
            }
        });
        return json;
    })(); 

var json1 = [
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
        "title": null,
        "question":"All Done!"
    }
];
var responses =[];
//create the main js function which will listen for clicks to update questions and place them in the right place

function main(){
    updateQuestion(i);
    i++;
    $('#yes').on('click', function(){
            createBoxYes(i-1);
            responses[i-1]="yes";
            updateQuestion(i);
            i++;
    });
    $('#no').on('click', function(){
            createBoxNo(i-1);
            responses[i-1]="no";
            updateQuestion(i);
            i++;
    });
    
    $("#yesColumn").on("click", ".close", function(){
       toggleBox(this);
    });
    $("#noColumn").on("click", ".close", function(){
       toggleBox(this);
    });
    
}

// if the yes box is clicked (in main) create a new box in the yes column with the original question

function createBoxYes(i) {
    var box = '<div class="panel lightblue"><button type="button" class="close" aria-label="Close">&times;</button><div class="panel-heading">' + json[i].title + '</div> <div class="panel-body text-center"> <p>' + json[i].question + '</p> </div></div>';
    $("#yesColumn").append(box);// Insert new elements after img
}

//if the no box is clicked (in main) create a new box in the no column with the original question

function createBoxNo(i) {
    var box = '<div class="panel coral"><button type="button" class="close" aria-label="Close">&times;</button><div class="panel-heading">' + json[i].title + '</div> <div class="panel-body text-center"> <p>' + json[i].question + '</p> </div></div>';
    $("#noColumn").append(box);      // Insert new elements after img
}

//show the i-th 

function updateQuestion(i) {
    //loadjson();
    var currentTitle = json[i].title;
    var currentQuestion = json[i].question;
    document.getElementById("title").innerHTML = currentTitle;
    document.getElementById("question").innerHTML = currentQuestion;
}

//when the x is clicked, move the box to the alternate column

function toggleBox(x){
    if($(x).parent().is($('.lightblue'))){
        $(x).parent().addClass('coral');
        $(x).parent().removeClass('lightblue');
        $(x).parent().appendTo($("#noColumn"));
    }
    /*else if($(x).parent().is($('.coral'))){
        $(x).parent().addClass('lightblue');
        $(x).parent().removeClass('coral');
        $(x).parent().appendTo($("#yesColumn"));
    }*/
    else {
        $(x).parent().addClass('lightblue');
        $(x).parent().removeClass('coral');
        $(x).parent().appendTo($("#yesColumn"));
    }
}

/*
function loadjson() {
  var xobj = new XMLHttpRequest();
  xobj.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
//       callback(xhttp.responseText);
         json1 = xobj.responseText;
    }
  };
  xobj.open("GET", "questions.json", true);
  xobj.send(null);
    }
*/    

$(document).ready(main);