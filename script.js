

var reset = function() {
	var width = 960;
	var rows = prompt("How many rows?");
	var cols = prompt("How many columns?");
	var height = Math.floor(width * cols / rows);
	var blockWidth = width / rows;
	var blockHeight = height / cols;

	var $row = $('<div/>', {
		class: 'row'
	});
	$row.height(blockHeight);

	var $block = $('<div/>', {
		class: 'block'
	});
	$block.width(blockWidth);
	$block.height(blockHeight);

	for (var i = 0; i < rows; i++) {
		$row.append($block.clone());
	}

	for (var j = 0; j < cols; j++) {
		$('body').append($row.clone());
	}

	$('.block').mouseenter(function() {
		$(this).css('background-color', '#c6c6c6');
	});
};

$(document).ready(function() {
	reset();

	$(document).getElementById('reset').onclick = reset();
});

