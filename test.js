var arr = ["Bob", "Sally", "Ben"];
var i=0;
/* $(document).ready(function loopArray() {
    $('#question').innerHTML = arr[i]//.question
    
	$('.btn green').on('click', function(){
	    $(this).classList.add('.yes');
	    //arr[x].answer = 'yes';
	    i++;
	    if(i <arr.length()){
	    loopArray();
	    }
});
    $('.btn coral').on('click', function(){
        $(this).classList.add('.no');
        //arr[x].answer = 'no';
        i++;
	    if(i <arr.length()){
	    loopArray();
	    }
});
    }
);
*/

var moveYes = function(){
    $(".question").classList.add(".yes")
}