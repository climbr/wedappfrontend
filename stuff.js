/*
$("#green").click(function(){
    $.getJSON("stuff.js", function(result){
        $.each(result, function(i, field){
            $("div").append(field + " ");
        });
    });
});


$("#green").click(function(event){
               $.getJSON('questions.json', function(jd) {
                  $('#title').html('<p>' + jd.title + '</p>');
                  $('#question').html('<p>' + jd.question + '</p>');
               });
            });
*/
function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.getElementById("heading").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "test.txt", true);
  xhttp.send();
}            
/*            
   
    $.getJSON(, parameters)
    .done(function(data, textStatus, jqXHR) {
        // create div
        var div = document.createElement("div");
        
        // create a list element that will contain the list items
        var ul = document.createElement("ul");
        
        //add the ul element to the div element
        div.appendChild(ul);
     
        // go through a loop for each data point (article) and create a list item for each news article
        for (var i = 0; i < data.length && i < 5; i++)
        {
        //store in a list
          //create a list element
          var list = document.createElement("li");
          //add the list element to the ul element
          ul.appendChild(list);
          //add an anchor with an href and title that 
          var link = data[i].link;
          var title = data[i].title; 
          $(list).append('<a href="'+ link +'"target="_blank">'+ title +'</a>');
        }
        
        // console log for test
        console.log(div.innerHTML);
        
        // listen for clicks on marker
        google.maps.event.addListener(marker, 'click', function(){
            showInfo(marker, div.innerHTML);
        });
        
    })
    .fail(function(jqXHR, textStatus, errorThrown) {

        // log error to browser's console
        console.log(errorThrown.toString());

    });

*/