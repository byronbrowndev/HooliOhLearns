// JavaScript Document
function onInit() {
	itemIndex = -1;
}

function lastIndexPerMode() {
	switch (MODES[sourceIndex]) {
		case NUMBERS:
			return 4;
		case ALPHABET:
			return 2;
		case COLORS:
			return 2;
	}
}

function nextItemDown() {
	itemIndex++;
	lastIndex = lastIndexPerMode();
	if (itemIndex > lastIndex) itemIndex = 0;	

	var img = document.getElementById('mainImg');
	var pos = -400;
	var id = setInterval(frame, 1);
	function frame() {
		if (pos >= 0) {
			clearInterval(id);
		} else {
			pos+=5;
			img.style.top = pos + 'px';
		}
	}
}

function nextItemLeft() {
	itemIndex++;
	lastIndex = lastIndexPerMode();
	if (itemIndex > lastIndex) itemIndex = 0;	

	var img = document.getElementById('mainImg');
	var pos = 800;
	var id = setInterval(frame, 1);
	function frame() {
		if (pos <= 200) {
			clearInterval(id);
		} else {
			pos-=5;
			img.style.left = pos + 'px';
		}
	}
}

function lastItemUp() {
	itemIndex--;
	lastIndex = lastIndexPerMode();
	if (itemIndex < 0) itemIndex = lastIndex;	

	var img = document.getElementById('mainImg');
	var pos = 400;
	var id = setInterval(frame, 1);
	function frame() {
		if (pos <= 0) {
			clearInterval(id);
		} else {
			pos-=5;
			img.style.top = pos + 'px';
		}
	}
}

function lastItemRight() {
	itemIndex--;
	lastIndex = lastIndexPerMode();
	if (itemIndex < 0) itemIndex = lastIndex;	

	var img = document.getElementById('mainImg');
	var pos = -400;
	var id = setInterval(frame, 1);
	function frame() {
		if (pos >= 200) {
			clearInterval(id);
		} else {
			pos+=5;
			img.style.left = pos + 'px';
		}
	}
}

function changeMode(newMode) {
	debugger;
	switch(newMode) {
		case 'numbers':
			itemIndex = 0;
			sourceIndex = 0;
			break;
		case 'letters':
			itemIndex = 0;
			sourceIndex = 1;
			break;
		case 'colors':
			itemIndex = 0;
			sourceIndex = 2;
			break;
	}
	document.getElementById('mainImg').src = MODES[sourceIndex][itemIndex].picture.src;
	MODES[sourceIndex][itemIndex].sound.play();
}

var sourceIndex = 0;
var itemIndex = 0;

document.addEventListener("DOMContentLoaded", function (event) {

	var el = document.getElementById('main');

	var onSwipe = new Hammer.Manager(el);
	var lastIndex;

	onSwipe.add(new Hammer.Swipe({ direction: Hammer.DIRECTION_ALL, threshold: 0 }));
	onSwipe.add(new Hammer.Tap());
	onSwipe.on('swipeleft swiperight swipeup swipedown tap', function (ev) {
		console.log(ev.type);
		switch (ev.type) {
			case 'tap':
			case 'swipedown':
				nextItemDown();
				break;
			case 'swipeup':
				lastItemUp();
				break;
			case 'swipeleft':
				nextItemLeft();
				break;
			case 'swiperight':
				lastItemRight();
				break;
			default:
				break;
		}
		document.getElementById('mainImg').src = MODES[sourceIndex][itemIndex].picture.src;
		MODES[sourceIndex][itemIndex].sound.play();

		NUMBERS[itemIndex].src;
	});
});