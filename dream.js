(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.dream = function() {
	this.initialize();

	// Layer 1
	this.player = new lib.Player();
	this.player.setTransform(46,171.1,1,1,0,0,0,26,53);

	this.pointstxt = new cjs.Text("000000", "34px Times", "#0066CC");
	this.pointstxt.textAlign = "center";
	this.pointstxt.lineHeight = 36;
	this.pointstxt.lineWidth = 181;
	this.pointstxt.setTransform(262.6,5);

	this.two_life = new lib.Heart();
	this.two_life.setTransform(74,26,0.667,0.667,0,0,0,22.5,21);

	this.one_life = new lib.Heart();
	this.one_life.setTransform(29,26,0.667,0.667,0,0,0,22.5,21);

	this.three_life = new lib.Heart();
	this.three_life.setTransform(119,26,0.667,0.667,0,0,0,22.5,21);

	this.instance = new lib.Background();
	this.instance.setTransform(960,250,1,1,0,0,0,960,200);

	this.addChild(this.instance,this.three_life,this.one_life,this.two_life,this.pointstxt,this.player);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,5,3840,445);


// symbols:
(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,960,600);


(lib.gui_heart = function() {
	this.initialize(img.gui_heart);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,45,42);


(lib.gui_pill = function() {
	this.initialize(img.gui_pill);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,49,49);


(lib.novo_bg = function() {
	this.initialize(img.novo_bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,600);


(lib.player = function() {
	this.initialize(img.player);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,52,106);


(lib.untitled_icon = function() {
	this.initialize(img.untitled_icon);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,48,48);


(lib.PlayerSymbol = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.player();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,52,106);


(lib.predios = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.novo_bg();
	this.instance.setTransform(1920,0,1,0.667);

	this.instance_1 = new lib.novo_bg();
	this.instance_1.setTransform(0,0,1,0.667);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,3840,400);


(lib.Heart = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.gui_heart();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,45,42);


(lib.Enemy = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066CC").s().p("AjdDeIAAm7IG7AAIAAG7g");
	this.shape.setTransform(22.3,22.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,44.5,44.5);


(lib.Player = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.PlayerSymbol();
	this.instance.setTransform(26,53,1,1,0,0,0,26,53);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:52.6},0).wait(1).to({y:52.2},0).wait(1).to({y:51.7},0).wait(1).to({y:51.3},0).wait(1).to({y:50.8},0).wait(1).to({y:50.4},0).wait(1).to({y:50},0).wait(1).to({y:49.5},0).wait(1).to({y:49.1},0).wait(1).to({y:48.6},0).wait(1).to({y:48.2},0).wait(1).to({y:47.8},0).wait(1).to({y:47.3},0).wait(1).to({y:46.9},0).wait(1).to({y:46.4},0).wait(1).to({y:46},0).wait(1).to({y:45.6},0).wait(1).to({y:45.1},0).wait(1).to({y:44.7},0).wait(1).to({y:44.2},0).wait(1).to({y:43.8},0).wait(1).to({y:43.3},0).wait(1).to({y:42.9},0).wait(1).to({y:42.5},0).wait(1).to({y:43.4},0).wait(1).to({y:44.2},0).wait(1).to({y:45.1},0).wait(1).to({y:46},0).wait(1).to({y:46.9},0).wait(1).to({y:47.8},0).wait(1).to({y:48.7},0).wait(1).to({y:49.6},0).wait(1).to({y:50.4},0).wait(1).to({y:51.3},0).wait(1).to({y:52.2},0).wait(1).to({y:53.1},0).wait(1).to({y:53.9},0).wait(1).to({y:54.8},0).wait(1).to({y:55.7},0).wait(1).to({y:56.6},0).wait(1).to({y:57.5},0).wait(1).to({y:58.4},0).wait(1).to({y:59.3},0).wait(1).to({y:60.1},0).wait(1).to({y:61},0).wait(1).to({y:61.9},0).wait(1).to({y:62.8},0).wait(1).to({y:63.7},0).wait(1).to({y:62.1},0).wait(1).to({y:60.5},0).wait(1).to({y:59},0).wait(1).to({y:57.4},0).wait(1).to({y:55.8},0).wait(1).to({y:54.2},0).wait(1).to({y:52.7},0).wait(1).to({y:51.1},0).wait(1).to({y:49.5},0).wait(1).to({y:48},0).wait(1).to({y:46.4},0).wait(1).to({y:44.8},0).wait(1).to({y:43.2},0).wait(1).to({y:44.1},0).wait(1).to({y:44.9},0).wait(1).to({y:45.7},0).wait(1).to({y:46.5},0).wait(1).to({y:47.3},0).wait(1).to({y:48.2},0).wait(1).to({y:49},0).wait(1).to({y:49.8},0).wait(1).to({y:50.6},0).wait(1).to({y:51.5},0).wait(1).to({y:52.3},0).wait(1).to({y:53.1},0).wait(1).to({y:53.9},0).wait(1).to({y:54.7},0).wait(1).to({y:55.5},0).wait(1).to({y:56.4},0).wait(1).to({y:57.2},0).wait(1).to({y:58},0).wait(1).to({y:58.8},0).wait(1).to({y:59.7},0).wait(1).to({y:60.5},0).wait(1).to({y:61.3},0).wait(1).to({y:62.1},0).wait(1).to({y:63},0).wait(1).to({y:62.5},0).wait(1).to({y:62.1},0).wait(1).to({y:61.7},0).wait(1).to({y:61.3},0).wait(1).to({y:60.9},0).wait(1).to({y:60.5},0).wait(1).to({y:60.1},0).wait(1).to({y:59.6},0).wait(1).to({y:59.2},0).wait(1).to({y:58.8},0).wait(1).to({y:58.4},0).wait(1).to({y:58},0).wait(1).to({y:57.6},0).wait(1).to({y:57.1},0).wait(1).to({y:56.7},0).wait(1).to({y:56.3},0).wait(1).to({y:55.9},0).wait(1).to({y:55.5},0).wait(1).to({y:55.1},0).wait(1).to({y:54.7},0).wait(1).to({y:54.2},0).wait(1).to({y:53.8},0).wait(1).to({y:53.4},0).wait(1).to({y:53},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,52,106);


(lib.Background = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.predios();
	this.instance.setTransform(960,200,1,1,0,0,0,960,200);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-956.2},486).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,3840,400);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;