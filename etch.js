$(document).ready(function() {
	grid(16);
	draw();
	$(".clear").click(function() {
		var newGrid = prompt("How many squares per row");
		$(".wrapper").empty();
		grid(newGrid);
		draw();
	});
});

function grid(q) {
	var size = 360;
	var unitSize = (360 - 4*q)/q;
	var wrapper = $(".wrapper").html("");
	for(var x = 0; x < q; x++) {
		for(var y = 0; y < q; y++) {
			wrapper.append($ ("<div></div>").addClass("unit").height(unitSize).width(unitSize) );
		}
		wrapper.append($("<div></div>").css("clear", "both"));
	}
}

function draw() {
	$(".unit").hover(function(){
		$(this).addClass("black-unit");
	});
}
