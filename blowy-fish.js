window.addEventListener('load', function() {
	var canvas = document.getElementById('canvas');
	canvas.setAttribute('width', window.innerWidth);
	canvas.setAttribute('height', window.innerHeight);
	var stage = new createjs.Stage('canvas');
	var w = stage.canvas.width;
	var h = stage.canvas.height;
	var shape = new createjs.Shape();
	shape.graphics.f('#ff5252').dr(10,10,w-50,h-50);
	stage.addChild(shape);
	stage.update();
});
