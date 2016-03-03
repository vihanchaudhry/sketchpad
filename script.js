var rows = 16;
var cols = 16;
var $row = $('<div/>', {
	class: 'row'
});
var $block = $('<div/>', {
	class: 'block'
});

$(document).ready(function() {
	for (var i = 0; i < rows; i++) {
		$row.append($block.clone());
	}

	for (var j = 0; j < cols; j++) {
		$('body').append($row.clone());
	}
});