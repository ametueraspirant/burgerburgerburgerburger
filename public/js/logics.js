$(function() {
	$("#order").on("click", function(event)
	{
		event.preventDefault();
		let burgersave = 
		{
			name: $("#bergertext").val().trim(),
			eaten: 0
		};
		$("#bergertext").val('');
		console.log(burgersave);

		$.ajax("/api/bergers", {
    		type: "POST",
    		data: burgersave
    	})
		.then(function()
		{
        	console.log("order up!");
			location.reload();
		});
	});

	$(".eat-it").on("click", function(event)
	{
		event.preventDefault();
		let id = $(this).data("id");

		let eatchange = {
			eaten: 1
		}

		$.ajax("/api/bergers/" + id, {
			type: "PUT",
			data: eatchange
		})
		.then(function()
		{
			location.reload();
		});
	});
});

