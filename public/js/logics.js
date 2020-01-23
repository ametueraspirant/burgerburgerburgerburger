$(function() {
	var burgersave;
	$("#order").on("click", function(event)
	{
		event.preventDefault();
		burgersave = $("#bergertext").val();
		$("#bergertext").val('');
		console.log(burgersave);
	});
});

