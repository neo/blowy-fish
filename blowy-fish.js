window.addEventListener('load', function() {
	var canvas = document.getElementById('canvas');
	canvas.setAttribute('width', window.innerWidth);
	canvas.setAttribute('height', window.innerHeight);
	var stage = new createjs.Stage('canvas');
	// createjs.Touch.disable(stage, true); // Enables single touch interaction
	var w = stage.canvas.width;
	var h = stage.canvas.height;
	// var queue = new createjs.LoadQueue();
	// queue.loadManifest([
	// 	{id:'sand', src:'assets/sand.jpg'}
	// ]);
	// queue.on('complete', function() {
		var container = new createjs.Container();
		var water = new createjs.Shape();
		water.graphics.f('#81D4FA').dr(0,0,w,2*h);
		container.y = -h;
		container.addChild(water);
		stage.addChild(container);
	// 	var sand = new createjs.Bitmap(queue.getResult('sand'));
	// 	sand.scaleX = w / sand.getBounds().width;
	// 	sand.scaleY = 1.1 * h / sand.getBounds().height;
	// 	sand.y = 0.9 * h;
	// 	container.addChild(sand);
		stage.update();
	// 	createjs.Ticker.addEventListener("tick", stage);
	// 	var start, y, isON = false;
	// 	stage.addEventListener('mousedown', function(e) {
	// 		start = e.stageY;
	// 		y = container.y;
	// 	});
	// 	stage.addEventListener('pressmove', function(e) {
	// 		var diff = e.stageY - start;
	// 		if (y + diff >= -h && y + diff <=0 && !isON) {
	// 			container.y = y + diff;
	// 			stage.update();
	// 		}
	// 	});
	// 	stage.addEventListener('pressup', function(e) {
	// 		if (!isON) (e.stageY - start > 0.25 * h)?
	// 		createjs.Tween.get(container).to({y:0}, 500).call(function() {
	// 			isON = true;
	// 		}) : createjs.Tween.get(container).to({y:-h}, 500);
	// 		else if (e.stageY - start < -0.5 * h)
	// 			createjs.Tween.get(container).to({y:-h}, 500).call(function() {
	// 				isON = false;
	// 			});
	// 	});
	// });
});
