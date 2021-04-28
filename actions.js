var note1, note2, note3, note4, note5, note6, note7;

//Create 7

note1 = document.getElementById('cNote');
note2 = document.getElementById('dNote');
note3 = document.getElementById('eNote');
note4 = document.getElementById('fNote');
note5 = document.getElementById('gNote');
note6 = document.getElementById('aNote');
note7 = document.getElementById('bNote');

//Link all sounds

var sound1, sound2, sound3, sound4, sound5, sound6, sound7;
sound1 = document.getElementsByTagName('audio')[0];
sound2 = document.getElementsByTagName('audio')[1];
sound3 = document.getElementsByTagName('audio')[2];
sound4 = document.getElementsByTagName('audio')[3];
sound5 = document.getElementsByTagName('audio')[4];
sound6 = document.getElementsByTagName('audio')[5];
sound7 = document.getElementsByTagName('audio')[6];

//Create button functions;

function  cButton() {
	sound1.play();
}

function dButton(){
	sound2.play();
}

function eButton() {
	sound3.play();
}

function  fButton() {
	sound4.play();
}

function  gButton() {
	sound5.play();
}

function  aButton() {
	sound6.play();
}

function  bButton() {
	sound7.play();
}