$(document).ready(function()
{

	$("#add").click(function(){
		var newListItem=$("#addtolist").val();
		$("#todolist").append('<li>'+newListItem+'</li>');
		$("#addtolist").val('');
		deletableItem();

	});
});




$(document).ready(deletableItem());
function deletableItem()
{
	$('li').click(function()
	{
	   $(this).addClass('strikeout');
	   
	   
	   setTimeout(() =>{
	   	$(this).remove();
	   },1250);
	   });    
	       
};
