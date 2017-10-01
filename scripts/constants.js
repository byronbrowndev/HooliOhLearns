const NUMBERS = new Array(5);
NUMBERS[0] = {
    picture: new Image(),
    sound: new Audio('audio/1.m4a')
}
NUMBERS[0].picture.src = 'images/1.png';

NUMBERS[1] = {
    picture: new Image(),
    sound: new Audio('audio/2.m4a')
}
NUMBERS[1].picture.src = 'images/2.png';

NUMBERS[2] = {
    picture: new Image(),
    sound: new Audio('audio/3.m4a')
}
NUMBERS[2].picture.src = 'images/3.png';

NUMBERS[3] = {
    picture: new Image(),
    sound: new Audio('audio/4.m4a')
}
NUMBERS[3].picture.src = 'images/4.png';

NUMBERS[4] = {
    picture: new Image(),
    sound: new Audio('audio/5.m4a')
}
NUMBERS[4].picture.src = 'images/5.png';

const ALPHABET = new Array(3);
ALPHABET[0] = {
    picture: new Image(),
    sound: new Audio('audio/a.m4a')
}
ALPHABET[0].picture.src = 'images/a.png';

ALPHABET[1] = {
    picture: new Image(),
    sound: new Audio('audio/b.m4a')
}
ALPHABET[1].picture.src = 'images/b.png';

ALPHABET[2] = {
    picture: new Image(),
    sound: new Audio('audio/c.m4a')
}
ALPHABET[2].picture.src = 'images/c.png';

const COLORS = new Array(3);
COLORS[0] = {
    picture: new Image(),
    sound: new Audio('audio/red.m4a')
}
COLORS[0].picture.src = 'images/red.png';

COLORS[1] = {
    picture: new Image(),
    sound: new Audio('audio/blue.m4a')
}
COLORS[1].picture.src = 'images/blue.png';

COLORS[2] = {
    picture: new Image(),
    sound: new Audio('audio/yellow.m4a')
}
COLORS[2].picture.src = 'images/yellow.png';


const MODES = new Array(2);
MODES[0] = NUMBERS;
MODES[1] = ALPHABET;
MODES[2] = COLORS;
