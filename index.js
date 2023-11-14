(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_1", frames: [[1603,634,330,838],[0,1278,1601,423],[0,0,757,1276],[1411,0,454,632],[759,0,650,1045],[1603,1474,382,481]]},
		{name:"index_atlas_2", frames: [[640,646,42,32],[269,933,42,32],[269,967,42,32],[237,933,30,63],[237,866,61,65],[594,591,78,53],[237,590,98,156],[220,0,212,588],[434,0,176,589],[337,700,325,36],[0,0,218,741],[237,748,121,116],[337,591,131,107],[470,591,122,93],[594,646,44,49],[0,743,235,251]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_34 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_33 = function() {
	this.initialize(img.CachedBmp_33);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3895,1510);


(lib.CachedBmp_31 = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_32 = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_29 = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_20 = function() {
	this.initialize(img.CachedBmp_20);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3875,2144);


(lib.CachedBmp_19 = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_18 = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_17 = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_16 = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_15 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_14 = function() {
	this.initialize(img.CachedBmp_14);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2319,444);


(lib.CachedBmp_40 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_39 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_11 = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_10 = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_9 = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8 = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_44 = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_43 = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Interpolación2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#ED6980").p("EDJ4AAAUAAABTog7IA7IQiWCViXCQUg5uA2jhQVAAAUhQUAAAg5ug2jQiYiQiViVUg7Ig7IAAAhToQAAiJACiIUABfhQ3A5ng5oUA7Ig7HBTnAAAUBToAAAA7IA7HUA5nA5oABfBQ3QACCIAACJg");
	this.shape.setTransform(0.025,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#ED6980").s().p("EiKCCTUQiYiPiViVUg7Ig7JAAAhTnQAAiIACiJUABfhQ3A5ng5oUA7Ig7HBTnAAAUBToAAAA7IA7HUA5nA5oABfBQ3QACCJAACIUAAABTng7IA7JQiWCViXCPUg5uA2khQVAAAUhQUAAAg5ug2kg");
	this.shape_1.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1293,-1293,2586.1,2586);


(lib.Path_13 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#050506").p("EgktgEsIiJECQCDArDxA5QHjByIoA9QbmDEcJmRQAHAAhWj+QirAXkfAcQo+A4pJAXQ9PBLz2kXg");
	this.shape.setTransform(249.3645,30.6003);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6E3B22").s().p("Aw4DrQoog+njhxQjxg5iDgsICJkBQT2EXdPhLQJJgYI+g4QEfgbCrgYQBWD/gHAAQy5ENyrAAQpHAApEhAg");
	this.shape_1.setTransform(249.4728,30.4674);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_13, new cjs.Rectangle(-0.3,-0.4,499.6,61.8), null);


(lib.Path_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DBBCAB").s().p("AAEC2QgqgLgagTQgcgUgDgZQgEgZAVgYQALgNAmgkQAfgeAOgUQAYghAEgiQACgPgFgTIgKghQgCgIAKgEQALgEAHAHQAoApgSA/QgPAzguAuQgNAOgkAhQgdAeANAWQAPAYAtAMQAIADAfAFQAZAEANAGQAHAEgBAGQgBAGgJABQgNADgOAAQgZAAgegIg");
	this.shape.setTransform(9.6554,18.933);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_6, new cjs.Rectangle(0,0,19.3,37.9), null);


(lib.Path_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DBBCAB").s().p("AiDELQgegEgSgRQgRgRAAgVQAAglBBgmIAagQQAOgKADgKQAFgMgFgUIgKgfQgUhIABgoQAAg7AagvQAhg8BBgTQAfgJAjAFQAhAFAcAQQAwAdAPBBQADAJgQACQgPACgDgJQgJgfgNgTQgTgbgggNQgmgPglAMQgfALgXAbQgfAmgGAwIAEgDQAdgRAbgIQAbgIAdgBQAWgBAPAEQATAEAPANQAFAFgFAGQgHAGgHgCQgDgCgKgBIgQgCIgKgBQgOgCgPAAQgTABgUAGQgYAHgUANIgKAHIgNAMQABAhAOA1IARA0QAIAggKAUQgHARgYAQIgsAbQgfAWABATQABAPAPAHQAPAHAVgDQArgEAcgXQAbgXgEgdQgDgOAUgBQAVgCADAOQANAwg2AmQgsAeg1AAQgQAAgPgDg");
	this.shape.setTransform(19.7424,26.9679);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_4, new cjs.Rectangle(0,0,39.5,54), null);


(lib.Path_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DBBCAB").s().p("AieBdQgGgMARgFQBdgaBEguQAjgVAbgbIAYgbQAOgQAMgKQAJgHAOAFQAOAEgDAJQgIAbgoAmQgfAbgnAYQhLAvhlAYIgJABQgLAAgEgJg");
	this.shape.setTransform(16.0673,10.2114);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2, new cjs.Rectangle(0,0,32.2,20.4), null);


(lib.Path_1_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DBBCAB").s().p("AGeDqQgLgDgFgHQgOgSgbgaQg3g0hIgpQgjgUgVgHQgNgEgUgCQgggDgagHQgsgNhBgfQg/gdg6gkQgbgSgSgFQgYgHhMgJQhygNgjgqQgOgRABgUQAAgPAIgLQAEgGALgEQAKgEAOAEQALADAFAHQAEAIgEAHQgKAPANAPQAWAaBVAKQBWAKAfAJQAaAIAiAWQA2AiA7AcQA6AcAlAKQAUAGAaACQAeADAUAHQAcAJApAYQBOAsA7A4QAeAcAQAVQAFAHgEAHQgEAIgMADQgGACgHAAIgKgBg");
	this.shape.setTransform(45.5004,23.4954);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_0, new cjs.Rectangle(0,0,91,47), null);


(lib.Path_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DBBCAB").s().p("AoUBXQgNgBgHgGQgIgHACgHQACgIAJgFQAegOAugRQBcgfBlgQQA2gJAfAAQAXAAAcAGQAYAFAYABQAoABBHgHQBLgIBHgPQAugJAdABQAiABBUAQQBSAQAlgQQAXgKACgRQABgHAKgFQAJgGAMABQAOABAIAGQAHAGgBAHQgBANgLANQgNASgZALQg9AahvgVQhLgOgYgBQgVgBgkAIQhLAOhRAIQhPAJgxgCQgbgBgggHQgTgEgOAAQgYAAgtAIQheAPhVAeQgrAPgZAMQgJAEgJAAIgEAAg");
	this.shape.setTransform(55.9438,8.707);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1, new cjs.Rectangle(0,0,111.9,17.4), null);


(lib.Path_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DBBCAB").s().p("AAyCBQhIg0ghg/QgRgggIgiQgJgtAMgaQAEgJAQAAQAQgBADAKQADALABATIADAfQADAdAQAhQAcA8A/AyQAMAKgOAJQgGAEgHAAQgHAAgHgEg");
	this.shape.setTransform(8.5022,13.3927);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_0, new cjs.Rectangle(0.1,0.1,16.9,26.7), null);


(lib.Path = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DBBCAB").s().p("AhmACQgKgDAGgHQAGgHALAEQArANA1gFQAQgCAQgEIAPgDIANgFQAEgCALgBIAOAAQAKACACAHQADAGgHAFQgeAWhIAAQg0gBg0gTg");
	this.shape.setTransform(10.8605,2.1917);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0,0.1,21.8,4.300000000000001), null);


(lib.Path_50 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F9B334").s().p("EgE0A7RMABQh2jQA8A8AeAgQEgJ8BnLYQBUJTgrJvQgiHchkGpQhPFIg1BRQBvLpgDVLQgBLngdJnQhrCTj0AAQgeAAghgCg");
	this.shape.setTransform(30.8671,379.488);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_50, new cjs.Rectangle(0,0,61.8,759), null);


(lib.Path_48 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#F9B334").p("AhcBuQgXAkDTkF");
	this.shape.setTransform(9.8772,11.96);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_48, new cjs.Rectangle(-0.6,-0.6,21.1,25), null);


(lib.Path_47 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#F9B334").p("AirDSQDKj6COip");
	this.shape.setTransform(17.6471,21.3465);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_47, new cjs.Rectangle(-0.6,-0.6,36.5,44), null);


(lib.Path_46 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.CachedBmp_19();
	this.instance.setTransform(0,-0.15,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_46, new cjs.Rectangle(0,-0.1,15,31.5), null);


(lib.Path_45 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_44 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_27 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.CachedBmp_18();
	this.instance.setTransform(0,-0.05,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_27, new cjs.Rectangle(0,0,30.5,32.5), null);


(lib.Path_26 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.CachedBmp_17();
	this.instance.setTransform(-0.4,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_26, new cjs.Rectangle(-0.4,0,39,26.5), null);


(lib.Path_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.CachedBmp_16();
	this.instance.setTransform(-0.15,-0.3,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_3, new cjs.Rectangle(-0.1,-0.3,49,78), null);


(lib.Group_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABfA2IhkglIgbgKIhNgZQgdgKgUgJIABgKQAVgFAggDIAZgCIA8ACIBcASIAbAIIAZAJQAMAFAHAHQAHAIAEAJQADAIABAJIAAAHIgFAJIgVALQgJAEgKABIgCAAQgIAAgJgEg");
	this.shape.setTransform(15.875,5.7775);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_0, new cjs.Rectangle(0,0,31.8,11.6), null);


(lib.Group = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAyFaQgHgNgFgVQgEgRgCgUQgBgVADgYQAFg4gCg6QgDgwgCgPQgCgWgHgrIgHggIgIggQgHgdgLghIgLgcIgvhiIgLgUIglg5IAHgHIAZAWIAaAaQARARAPAUIAiAvQAUAeAMAaQAJAPAGAQIAOAhQANAiAKAjQALApAEAdQAFAcADApQACAuAAAUQAAAXgDAkQgCAagIAXQgHATgLAQQgHAMgLAJIgIAHg");
	this.shape.setTransform(11.705,34.875);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group, new cjs.Rectangle(0,0,23.4,69.8), null);


(lib.Path_6_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AuDgWIN1qUIOSKjIuEKyg");
	this.shape_1.setTransform(90,68.25);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_6_1, new cjs.Rectangle(0,0,180,136.5), null);


(lib.Path_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AuDgVIN1qUIOSKjIuEKwg");
	this.shape.setTransform(89.975,68.225);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_5, new cjs.Rectangle(0,0,180,136.5), null);


(lib.Path_4_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AuDgVIN1qUIOSKjIuEKwg");
	this.shape_1.setTransform(90,68.225);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_4_1, new cjs.Rectangle(0,0,180,136.5), null);


(lib.Path_3_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AuDgWIN1qUIOSKjIuEKyg");
	this.shape.setTransform(90,68.25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_3_1, new cjs.Rectangle(0,0,180,136.5), null);


(lib.Path_2_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AxkV6MAAegrzIM5qGIIqAAINIJ2MgAPAr1IsbKEIpmAQg");
	this.shape.setTransform(112.5,204.75);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_4, new cjs.Rectangle(0,0,225,409.5), null);


(lib.Path_2_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AxkV6MAAegrzIM5qFIIqAAINIJ2MgAPArzIsbKFIpmAPg");
	this.shape.setTransform(112.475,204.725);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_3, new cjs.Rectangle(0,0,225,409.5), null);


(lib.Path_2_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AxkV6MAAegrzIM5qFIIqAAINIJ2MgAPArzIsbKFIpmAPg");
	this.shape.setTransform(112.5,204.725);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_2, new cjs.Rectangle(0,0,225,409.5), null);


(lib.Path_2_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AxkV6MAAegrzIM5qFIIqAAINIJ2MgAPArzIsbKFIpmAPg");
	this.shape.setTransform(112.5,204.725);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_1, new cjs.Rectangle(0,0,225,409.5), null);


(lib.Path_2_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AxkV6MAAegrzIM5qFIIqAAINIJ2MgAPArzIsbKFIpmAPg");
	this.shape.setTransform(112.475,204.725);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_0, new cjs.Rectangle(0,0,225,409.5), null);


(lib.Path_2_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AxkV6MAAegrzIM5qFIIqAAINIJ2MgAPArzIsbKFIpmAPg");
	this.shape_1.setTransform(112.5,204.725);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_5, new cjs.Rectangle(0,0,225,409.5), null);


(lib.Path_1_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A9SMqIsqpJIAPmUIL9p2MA7DgAeIMqJ2IAAF2Is5Kjg");
	this.shape.setTransform(268.5,84);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_4, new cjs.Rectangle(0,0,537,168), null);


(lib.Path_1_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A9SMqIsqpJIAPmUIL9p2MA7DgAeIMqJ2IAAF2Is5Kjg");
	this.shape.setTransform(268.475,83.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_3, new cjs.Rectangle(0,0,537,168), null);


(lib.Path_1_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A9SMqIsqpJIAPmUIL9p2MA7DgAeIMqJ2IAAF2Is5Kjg");
	this.shape.setTransform(268.5,83.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_2, new cjs.Rectangle(0,0,537,168), null);


(lib.Path_1_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A9SMqIsqpJIAPmUIL9p2MA7DgAeIMqJ2IAAF2Is5Kjg");
	this.shape.setTransform(268.5,83.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_1, new cjs.Rectangle(0,0,537,168), null);


(lib.Path_1_0_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("A9SMqIsqpJIAPmUIL9p2MA7DgAeIMqJ2IAAF2Is5Kjg");
	this.shape_1.setTransform(268.475,83.975);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_0_1, new cjs.Rectangle(0,0,537,168), null);


(lib.Path_1_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("A9SMqIsqpJIAPmUIL9p2MA7DgAeIMqJ2IAAF2Is5Kjg");
	this.shape_1.setTransform(268.5,84);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_5, new cjs.Rectangle(0,0,537,168), null);


(lib.Path_0_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AuDgWIN1qUIOSKjIuEKyg");
	this.shape_1.setTransform(90,68.25);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_0_1, new cjs.Rectangle(0,0,180,136.5), null);


(lib.Path_7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AuDgWIN1qUIOSKjIuEKyg");
	this.shape_1.setTransform(90,68.25);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_7, new cjs.Rectangle(0,0,180,136.5), null);


(lib.Path_8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#020203","#8E70B0"],[0,0.996],-2080.8,0,2080.8,0).s().p("ElFHjJsQSjkCOZmvQLflZIWm4QF9k5DxlLQB4ikAthnMJJLHbvMmSZACLg");
	this.shape.setTransform(2080.8,1529.35);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_8, new cjs.Rectangle(0,0,4161.6,3058.7), null);


(lib.Path_6_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#020203","#8E70B0"],[0,0.996],-1753.9,169.1,1748.2,-60.2).s().p("EkESDsaMHHdnaOIBtBcQCPB1ChB8QIEGPIIFJQLWHMJzD+QMQE8JFgbMjEuG7Zg");
	this.shape_2.setTransform(1665.85,1522.125);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_6_2, new cjs.Rectangle(0,0,3331.7,3044.3), null);


(lib.Path_35 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FDFEFC").s().p("AkoDgQh7hdAAiDQAAiCB7hdQB7hcCtgBQCuABB7BcQB7BdAACCQAACDh7BdQh7BciuAAQitAAh7hcg");
	this.shape.setTransform(42,31.65);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_35, new cjs.Rectangle(0,0,84,63.3), null);


(lib.Path_33 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FDFEFC").s().p("AkoDgQh7hdAAiDQAAiCB7hdQB7hdCtAAQCuAAB7BdQB7BdAACCQAACDh7BdQh7BdiuAAQitAAh7hdg");
	this.shape.setTransform(42,31.675);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_33, new cjs.Rectangle(0,0,84,63.4), null);


(lib.Path_31 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FDFEFC").s().p("AkoDgQh7hdAAiDQAAiCB7hdQB7hcCtgBQCuABB7BcQB7BdAACCQAACDh7BdQh7BciuAAQitAAh7hcg");
	this.shape.setTransform(42,31.65);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_31, new cjs.Rectangle(0,0,84,63.3), null);


(lib.Path_29 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FDFEFC").s().p("AkoDgQh7hdAAiDQAAiCB7hdQB7hdCtAAQCuAAB7BdQB7BdAACCQAACDh7BdQh7BdiuAAQitAAh7hdg");
	this.shape.setTransform(42,31.675);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_29, new cjs.Rectangle(0,0,84,63.4), null);


(lib.Path_27_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FDFEFC").s().p("AkoDgQh7hdAAiDQAAiCB7hdQB7hdCtAAQCuAAB7BdQB7BdAACCQAACDh7BdQh7BdiuAAQitAAh7hdg");
	this.shape.setTransform(42,31.675);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_27_1, new cjs.Rectangle(0,0,84,63.4), null);


(lib.Path_25 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FDFEFC").s().p("AkoDgQh7hdAAiDQAAiCB7hdQB7hdCtAAQCuAAB7BdQB7BdAACCQAACDh7BdQh7BdiuAAQitAAh7hdg");
	this.shape.setTransform(42,31.675);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_25, new cjs.Rectangle(0,0,84,63.4), null);


(lib.Path_23 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FDFEFC").s().p("AkoDgQh7hdAAiDQAAiCB7hdQB7hdCtAAQCuAAB7BdQB7BdAACCQAACDh7BdQh7BdiuAAQitAAh7hdg");
	this.shape.setTransform(42,31.675);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_23, new cjs.Rectangle(0,0,84,63.4), null);


(lib.Path_21 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FDFEFC").s().p("AkoDgQh7hdAAiDQAAiCB7hdQB7hdCtAAQCuAAB7BdQB7BdAACCQAACDh7BdQh7BdiuAAQitAAh7hdg");
	this.shape.setTransform(42,31.675);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_21, new cjs.Rectangle(0,0,84,63.4), null);


(lib.Path_19 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FDFEFC").s().p("AkoDgQh7hdAAiDQAAiCB7hdQB7hcCtgBQCuABB7BcQB7BdAACCQAACDh7BdQh7BciuAAQitAAh7hcg");
	this.shape.setTransform(42,31.65);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_19, new cjs.Rectangle(0,0,84,63.3), null);


(lib.Path_17 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FDFEFC").s().p("AkoDgQh7hdAAiDQAAiCB7hdQB7hdCtAAQCuAAB7BdQB7BdAACCQAACDh7BdQh7BdiuAAQitAAh7hdg");
	this.shape.setTransform(42,31.675);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_17, new cjs.Rectangle(0,0,84,63.4), null);


(lib.Path_15 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FDFEFC").s().p("AkoDgQh7hdAAiDQAAiCB7hdQB7hcCtgBQCuABB7BcQB7BdAACCQAACDh7BdQh7BciuAAQitAAh7hcg");
	this.shape.setTransform(42,31.65);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_15, new cjs.Rectangle(0,0,84,63.3), null);


(lib.Path_13_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FDFEFC").s().p("AkoDgQh7hdAAiDQAAiCB7hdQB7hdCtAAQCuAAB7BdQB7BdAACCQAACDh7BdQh7BdiuAAQitAAh7hdg");
	this.shape_2.setTransform(42,31.675);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_13_1, new cjs.Rectangle(0,0,84,63.4), null);


(lib.Path_11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FDFEFC").s().p("AkoDgQh7hdAAiDQAAiCB7hdQB7hdCtAAQCuAAB7BdQB7BdAACCQAACDh7BdQh7BdiuAAQitAAh7hdg");
	this.shape.setTransform(42,31.675);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_11, new cjs.Rectangle(0,0,84,63.4), null);


(lib.Group_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.CachedBmp_15();
	this.instance.setTransform(-3.5,-3.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_1, new cjs.Rectangle(-3.5,-3.5,800.5,211.5), null);


(lib.Group_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.CachedBmp_14();
	this.instance.setTransform(-4.65,-3.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_2, new cjs.Rectangle(-4.6,-3.5,1159.5,222), null);


(lib.circulo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#ED6980").p("EDJ4AAAUAAABTog7IA7IQiWCViXCQUg5uA2jhQVAAAUhQUAAAg5ug2jQiYiQiViVUg7Ig7IAAAhToQAAiJACiIUABfhQ3A5ng5oUA7Ig7HBTnAAAUBToAAAA7IA7HUA5nA5oABfBQ3QACCIAACJg");
	this.shape.setTransform(0.025,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#ED6980").s().p("EiKCCTUQiYiPiViVUg7Ig7JAAAhTnQAAiIACiJUABfhQ3A5ng5oUA7Ig7HBTnAAAUBToAAAA7IA7HUA5nA5oABfBQ3QACCJAACIUAAABTng7IA7JQiWCViXCPUg5uA2khQVAAAUhQUAAAg5ug2kg");
	this.shape_1.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.circulo, new cjs.Rectangle(-1293,-1293,2586.1,2586), null);


(lib.fondo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.Group_2();
	this.instance.setTransform(-499.75,-133,0.3949,0.3949,0,0,0,575.1,106.7);
	this.instance.shadow = new cjs.Shadow("rgba(0,159,227,0.2)",0,0,170);

	this.instance_1 = new lib.Group_1();
	this.instance_1.setTransform(-511.95,-248.8,0.3949,0.3949,0,0,0,396.9,100.3);
	this.instance_1.shadow = new cjs.Shadow("rgba(0,159,227,0.2)",0,0,170);

	this.instance_2 = new lib.Path_6_1();
	this.instance_2.setTransform(505.05,-440.65,0.3549,0.3497,0,0,0,91.9,68.4);
	this.instance_2.compositeOperation = "screen";

	this.instance_3 = new lib.Path_1_4();
	this.instance_3.setTransform(504.45,-440.95,0.3549,0.3497,0,0,0,270.2,84.2);
	this.instance_3.alpha = 0.3008;
	this.instance_3.compositeOperation = "screen";

	this.instance_4 = new lib.Path_2_4();
	this.instance_4.setTransform(505.05,-440.65,0.3549,0.3497,0,0,0,114.4,205.2);
	this.instance_4.alpha = 0.3008;
	this.instance_4.compositeOperation = "screen";

	this.instance_5 = new lib.CachedBmp_34();
	this.instance_5.setTransform(353.85,-270.25,0.5,0.5);

	this.instance_6 = new lib.Path_5();
	this.instance_6.setTransform(808.75,-444.25,0.3549,0.3497,0,0,0,91.7,68.8);
	this.instance_6.compositeOperation = "screen";

	this.instance_7 = new lib.Path_1_3();
	this.instance_7.setTransform(808.2,-444.45,0.3549,0.3497,0,0,0,270.2,84.4);
	this.instance_7.alpha = 0.3008;
	this.instance_7.compositeOperation = "screen";

	this.instance_8 = new lib.Path_2_3();
	this.instance_8.setTransform(808.75,-444.25,0.3549,0.3497,0,0,0,114.2,205.1);
	this.instance_8.alpha = 0.3008;
	this.instance_8.compositeOperation = "screen";

	this.instance_9 = new lib.Path_4_1();
	this.instance_9.setTransform(187.15,-444.25,0.3549,0.3497,0,0,0,91.5,68.8);
	this.instance_9.compositeOperation = "screen";

	this.instance_10 = new lib.Path_1_2();
	this.instance_10.setTransform(186.7,-444.45,0.3549,0.3497,0,0,0,270.4,84.4);
	this.instance_10.alpha = 0.3008;
	this.instance_10.compositeOperation = "screen";

	this.instance_11 = new lib.Path_2_2();
	this.instance_11.setTransform(187.2,-444.25,0.3549,0.3497,0,0,0,114.1,205.1);
	this.instance_11.alpha = 0.3008;
	this.instance_11.compositeOperation = "screen";

	this.instance_12 = new lib.Path_3_1();
	this.instance_12.setTransform(-159.05,-445.2,0.3549,0.3497,0,0,0,91.5,69);
	this.instance_12.compositeOperation = "screen";

	this.instance_13 = new lib.Path_1_1();
	this.instance_13.setTransform(-159.5,-445.55,0.3549,0.3497,0,0,0,270.4,84.2);
	this.instance_13.alpha = 0.3008;
	this.instance_13.compositeOperation = "screen";

	this.instance_14 = new lib.Path_2_1();
	this.instance_14.setTransform(-159,-445.3,0.3549,0.3497,0,0,0,114.2,205.1);
	this.instance_14.alpha = 0.3008;
	this.instance_14.compositeOperation = "screen";

	this.instance_15 = new lib.Path_0_1();
	this.instance_15.setTransform(-469.6,-444.75,0.3549,0.3497,0,0,0,91.7,68.4);
	this.instance_15.compositeOperation = "screen";

	this.instance_16 = new lib.Path_1_0_1();
	this.instance_16.setTransform(-470.1,-445,0.3549,0.3497,0,0,0,270.4,84.1);
	this.instance_16.alpha = 0.3008;
	this.instance_16.compositeOperation = "screen";

	this.instance_17 = new lib.Path_2_0();
	this.instance_17.setTransform(-469.6,-444.75,0.3549,0.3497,0,0,0,114.1,204.8);
	this.instance_17.alpha = 0.3008;
	this.instance_17.compositeOperation = "screen";

	this.instance_18 = new lib.Path_7();
	this.instance_18.setTransform(-780.55,-444.95,0.3549,0.3497,0,0,0,91.5,68.8);
	this.instance_18.compositeOperation = "screen";

	this.instance_19 = new lib.Path_1_5();
	this.instance_19.setTransform(-781.05,-445.2,0.3549,0.3497,0,0,0,270.4,84.2);
	this.instance_19.alpha = 0.3008;
	this.instance_19.compositeOperation = "screen";

	this.instance_20 = new lib.Path_2_5();
	this.instance_20.setTransform(-780.5,-444.95,0.3549,0.3497,0,0,0,114.2,205.1);
	this.instance_20.alpha = 0.3008;
	this.instance_20.compositeOperation = "screen";

	this.instance_21 = new lib.CachedBmp_33();
	this.instance_21.setTransform(-971.85,-459.9,0.5,0.5);

	this.instance_22 = new lib.Path_11();
	this.instance_22.setTransform(924.75,286.9,0.3551,0.3499,0,0,0,42.4,32);
	this.instance_22.alpha = 0.3008;

	this.instance_23 = new lib.CachedBmp_32();
	this.instance_23.setTransform(769.6,290.15,0.5,0.5);

	this.instance_24 = new lib.Path_13_1();
	this.instance_24.setTransform(780.2,297.9,0.3551,0.3499,0,0,0,42.2,31.9);
	this.instance_24.alpha = 0.3008;

	this.instance_25 = new lib.CachedBmp_31();
	this.instance_25.setTransform(845.05,284.75,0.5,0.5);

	this.instance_26 = new lib.Path_15();
	this.instance_26.setTransform(855.55,292.6,0.3551,0.3499,0,0,0,42.1,32);
	this.instance_26.alpha = 0.3008;

	this.instance_27 = new lib.CachedBmp_31();
	this.instance_27.setTransform(628.4,296.2,0.5,0.5);

	this.instance_28 = new lib.Path_17();
	this.instance_28.setTransform(638.95,304,0.3551,0.3499,0,0,0,42.4,31.9);
	this.instance_28.alpha = 0.3008;

	this.instance_29 = new lib.CachedBmp_29();
	this.instance_29.setTransform(699.2,294.9,0.5,0.5);

	this.instance_30 = new lib.Path_19();
	this.instance_30.setTransform(709.7,302.75,0.3551,0.3499,0,0,0,42.2,31.9);
	this.instance_30.alpha = 0.3008;

	this.instance_31 = new lib.CachedBmp_32();
	this.instance_31.setTransform(537.95,296.1,0.5,0.5);

	this.instance_32 = new lib.Path_21();
	this.instance_32.setTransform(548.5,303.9,0.3551,0.3499,0,0,0,42.2,31.9);
	this.instance_32.alpha = 0.3008;

	this.instance_33 = new lib.CachedBmp_32();
	this.instance_33.setTransform(455,296.1,0.5,0.5);

	this.instance_34 = new lib.Path_23();
	this.instance_34.setTransform(465.45,303.9,0.3551,0.3499,0,0,0,42.1,31.9);
	this.instance_34.alpha = 0.3008;

	this.instance_35 = new lib.CachedBmp_32();
	this.instance_35.setTransform(385.4,296.1,0.5,0.5);

	this.instance_36 = new lib.Path_25();
	this.instance_36.setTransform(395.9,303.9,0.3551,0.3499,0,0,0,42.4,31.9);
	this.instance_36.alpha = 0.3008;

	this.instance_37 = new lib.CachedBmp_29();
	this.instance_37.setTransform(316.5,295.85,0.5,0.5);

	this.instance_38 = new lib.Path_27_1();
	this.instance_38.setTransform(327.05,303.7,0.3551,0.3499,0,0,0,42.5,32);
	this.instance_38.alpha = 0.3008;

	this.instance_39 = new lib.CachedBmp_29();
	this.instance_39.setTransform(251.15,291.65,0.5,0.5);

	this.instance_40 = new lib.Path_29();
	this.instance_40.setTransform(261.6,299.45,0.3551,0.3499,0,0,0,42.2,31.9);
	this.instance_40.alpha = 0.3008;

	this.instance_41 = new lib.CachedBmp_29();
	this.instance_41.setTransform(186.9,288.25,0.5,0.5);

	this.instance_42 = new lib.Path_31();
	this.instance_42.setTransform(197.35,296.1,0.3551,0.3499,0,0,0,42.2,31.8);
	this.instance_42.alpha = 0.3008;

	this.instance_43 = new lib.CachedBmp_32();
	this.instance_43.setTransform(122.65,284.9,0.5,0.5);

	this.instance_44 = new lib.Path_33();
	this.instance_44.setTransform(133.05,292.7,0.3551,0.3499,0,0,0,42.4,31.9);
	this.instance_44.alpha = 0.3008;

	this.instance_45 = new lib.CachedBmp_29();
	this.instance_45.setTransform(64.85,276.7,0.5,0.5);

	this.instance_46 = new lib.Path_35();
	this.instance_46.setTransform(75.3,284.55,0.3551,0.3499,0,0,0,42.2,32);
	this.instance_46.alpha = 0.3008;

	this.instance_47 = new lib.CachedBmp_20();
	this.instance_47.setTransform(-968.8,-535.85,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_47},{t:this.instance_46},{t:this.instance_45},{t:this.instance_44},{t:this.instance_43},{t:this.instance_42},{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.fondo, new cjs.Rectangle(-997.6,-558.8,1973.3000000000002,1095), null);


(lib.Path_1_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.Group();
	this.instance.setTransform(11.7,34.9,1,1,0,0,0,11.7,34.9);
	this.instance.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_6, new cjs.Rectangle(0,0,23.4,69.8), null);


(lib.Path_0_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.Group_0();
	this.instance.setTransform(15.8,5.8,1,1,0,0,0,15.8,5.8);
	this.instance.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_0_2, new cjs.Rectangle(0,0,31.8,11.6), null);


// stage content:
(lib.index = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [59];
	// timeline functions:
	this.frame_59 = function() {
		window.open("pantalla de eleccion.html", "_self");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(59).call(this.frame_59).wait(1));

	// cirulo
	this.instance = new lib.Interpolación2("synched",0);
	this.instance.setTransform(936.45,505);

	this.circulo = new lib.circulo();
	this.circulo.name = "circulo";
	this.circulo.setTransform(1556.05,485.05,0.016,0.0495,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.circulo}]},54).wait(6));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,scaleX:0.016,scaleY:0.0495,skewY:180,x:1556.05,y:485.05,mode:"independent"},54).wait(6));

	// logo
	this.instance_1 = new lib.CachedBmp_1();
	this.instance_1.setTransform(1390.45,380.9,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(60));

	// Capa_2
	this.instance_2 = new lib.Path_6_2();
	this.instance_2.setTransform(1925.65,10.15,0.3551,0.3499,0,0,0,3331.7,0);
	this.instance_2.alpha = 0.5;
	this.instance_2.compositeOperation = "screen";

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:1665.8,regY:1522.1,rotation:-0.1547,x:1335.45,y:544.2},0).wait(1).to({rotation:-0.3093,x:1336.9,y:545.8},0).wait(1).to({rotation:-0.464,x:1338.35,y:547.4},0).wait(1).to({rotation:-0.6187,x:1339.85,y:548.95},0).wait(1).to({rotation:-0.7733,x:1341.3,y:550.55},0).wait(1).to({rotation:-0.928,x:1342.75,y:552.2},0).wait(1).to({rotation:-1.0827,x:1344.2,y:553.75},0).wait(1).to({rotation:-1.2374,x:1345.7,y:555.25},0).wait(1).to({rotation:-1.392,x:1347.1,y:556.85},0).wait(1).to({rotation:-1.5467,x:1348.6,y:558.4},0).wait(1).to({rotation:-1.7014,x:1350.1,y:559.95},0).wait(1).to({rotation:-1.856,x:1351.6,y:561.55},0).wait(1).to({rotation:-2.0107,x:1353.05,y:563.05},0).wait(1).to({rotation:-2.1654,x:1354.55,y:564.6},0).wait(1).to({rotation:-2.32,x:1356.05,y:566.1},0).wait(1).to({rotation:-2.4747,x:1357.55,y:567.7},0).wait(1).to({rotation:-2.6294,x:1359.05,y:569.25},0).wait(1).to({rotation:-2.784,x:1360.55,y:570.75},0).wait(1).to({rotation:-2.9387,x:1362.15,y:572.3},0).wait(1).to({rotation:-3.0934,x:1363.65,y:573.75},0).wait(1).to({rotation:-3.2481,x:1365.1,y:575.3},0).wait(1).to({rotation:-3.4027,x:1366.7,y:576.8},0).wait(1).to({rotation:-3.5574,x:1368.25,y:578.3},0).wait(1).to({rotation:-3.7121,x:1369.75,y:579.75},0).wait(1).to({rotation:-3.8667,x:1371.3,y:581.3},0).wait(1).to({rotation:-4.0214,x:1372.8,y:582.8},0).wait(1).to({rotation:-4.1761,x:1374.35,y:584.35},0).wait(1).to({rotation:-4.3307,x:1375.95,y:585.8},0).wait(1).to({rotation:-4.4854,x:1377.5,y:587.25},0).wait(1).to({rotation:-4.3359,x:1376,y:585.85},0).wait(1).to({rotation:-4.1864,x:1374.5,y:584.4},0).wait(1).to({rotation:-4.0369,x:1373,y:582.95},0).wait(1).to({rotation:-3.8874,x:1371.5,y:581.55},0).wait(1).to({rotation:-3.7378,x:1370,y:580.05},0).wait(1).to({rotation:-3.5883,x:1368.55,y:578.6},0).wait(1).to({rotation:-3.4388,x:1367.05,y:577.2},0).wait(1).to({rotation:-3.2893,x:1365.55,y:575.7},0).wait(1).to({rotation:-3.1398,x:1364.1,y:574.25},0).wait(1).to({rotation:-2.9903,x:1362.65,y:572.75},0).wait(1).to({rotation:-2.8408,x:1361.2,y:571.3},0).wait(1).to({rotation:-2.6912,x:1359.7,y:569.85},0).wait(1).to({rotation:-2.5417,x:1358.25,y:568.35},0).wait(1).to({rotation:-2.3922,x:1356.8,y:566.85},0).wait(1).to({rotation:-2.2427,x:1355.35,y:565.35},0).wait(1).to({rotation:-2.0932,x:1353.85,y:563.9},0).wait(1).to({rotation:-1.9437,x:1352.4,y:562.4},0).wait(1).to({rotation:-1.7942,x:1350.95,y:560.9},0).wait(1).to({rotation:-1.6447,x:1349.6,y:559.45},0).wait(1).to({rotation:-1.4951,x:1348.2,y:557.9},0).wait(1).to({rotation:-1.3456,x:1346.7,y:556.35},0).wait(1).to({rotation:-1.1961,x:1345.3,y:554.85},0).wait(1).to({rotation:-1.0466,x:1343.85,y:553.35},0).wait(1).to({rotation:-0.8971,x:1342.4,y:551.85},0).wait(1).to({rotation:-0.7476,x:1341.1,y:550.3},0).wait(1).to({rotation:-0.5981,x:1339.65,y:548.75},0).wait(1).to({rotation:-0.4485,x:1338.2,y:547.25},0).wait(1).to({rotation:-0.299,x:1336.8,y:545.7},0).wait(1).to({rotation:-0.1495,x:1335.4,y:544.15},0).wait(1).to({rotation:0,x:1334.05,y:542.65},0).wait(1));

	// LUZ
	this.instance_3 = new lib.Path_8();
	this.instance_3.setTransform(-8.1,9.9,0.3551,0.3499);
	this.instance_3.alpha = 0.5;
	this.instance_3.compositeOperation = "screen";

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:2080.8,regY:1529.3,rotation:0.0939,x:729.9,y:546.15},0).wait(1).to({rotation:0.1877,x:729,y:547.3},0).wait(1).to({rotation:0.2816,x:728.15,y:548.5},0).wait(1).to({rotation:0.3755,x:727.25,y:549.75},0).wait(1).to({rotation:0.4693,x:726.4,y:550.95},0).wait(1).to({rotation:0.5632,x:725.5,y:552.15},0).wait(1).to({rotation:0.6571,x:724.65,y:553.35},0).wait(1).to({rotation:0.7509,x:723.75,y:554.6},0).wait(1).to({rotation:0.8448,x:722.8,y:555.75},0).wait(1).to({rotation:0.9387,x:721.9,y:556.95},0).wait(1).to({rotation:1.0325,x:721,y:558.15},0).wait(1).to({rotation:1.1264,x:720.15,y:559.3},0).wait(1).to({rotation:1.2203,x:719.2,y:560.5},0).wait(1).to({rotation:1.3141,x:718.35,y:561.7},0).wait(1).to({rotation:1.408,x:717.45,y:562.9},0).wait(1).to({rotation:1.5019,x:716.55,y:564.1},0).wait(1).to({rotation:1.5957,x:715.6,y:565.25},0).wait(1).to({rotation:1.6896,x:714.7,y:566.5},0).wait(1).to({scaleY:0.3498,rotation:1.7835,x:713.75,y:567.65},0).wait(1).to({scaleY:0.3499,rotation:1.8773,x:712.9,y:568.85},0).wait(1).to({rotation:1.9712,x:711.95,y:570},0).wait(1).to({rotation:2.0651,x:711.05,y:571.2},0).wait(1).to({rotation:2.1589,x:710.1,y:572.35},0).wait(1).to({rotation:2.2528,x:709.2,y:573.5},0).wait(1).to({rotation:2.3467,x:708.25,y:574.7},0).wait(1).to({rotation:2.4405,x:707.3,y:575.9},0).wait(1).to({rotation:2.5344,x:706.4,y:577.05},0).wait(1).to({rotation:2.6283,x:705.45,y:578.25},0).wait(1).to({rotation:2.7222,x:704.55,y:579.4},0).wait(1).to({rotation:2.6314,x:705.45,y:578.25},0).wait(1).to({rotation:2.5407,x:706.35,y:577.15},0).wait(1).to({rotation:2.4499,x:707.25,y:576},0).wait(1).to({rotation:2.3592,x:708.15,y:574.85},0).wait(1).to({rotation:2.2685,x:709.05,y:573.75},0).wait(1).to({rotation:2.1777,x:709.9,y:572.6},0).wait(1).to({rotation:2.087,x:710.85,y:571.45},0).wait(1).to({rotation:1.9962,x:711.7,y:570.3},0).wait(1).to({rotation:1.9055,x:712.6,y:569.2},0).wait(1).to({rotation:1.8148,x:713.45,y:568},0).wait(1).to({rotation:1.724,x:714.35,y:566.9},0).wait(1).to({rotation:1.6333,x:715.25,y:565.75},0).wait(1).to({rotation:1.5426,x:716.1,y:564.6},0).wait(1).to({rotation:1.4518,x:717,y:563.45},0).wait(1).to({rotation:1.3611,x:717.9,y:562.3},0).wait(1).to({rotation:1.2703,x:718.75,y:561.15},0).wait(1).to({rotation:1.1796,x:719.65,y:560},0).wait(1).to({rotation:1.0889,x:720.5,y:558.85},0).wait(1).to({rotation:0.9981,x:721.35,y:557.7},0).wait(1).to({rotation:0.9074,x:722.25,y:556.55},0).wait(1).to({rotation:0.8166,x:723.1,y:555.35},0).wait(1).to({rotation:0.7259,x:724,y:554.25},0).wait(1).to({rotation:0.6352,x:724.8,y:553.05},0).wait(1).to({rotation:0.5444,x:725.7,y:551.9},0).wait(1).to({rotation:0.4537,x:726.55,y:550.75},0).wait(1).to({rotation:0.363,x:727.35,y:549.55},0).wait(1).to({rotation:0.2722,x:728.25,y:548.4},0).wait(1).to({rotation:0.1815,x:729.05,y:547.2},0).wait(1).to({rotation:0.0907,x:729.95,y:546.1},0).wait(1).to({rotation:0,x:730.8,y:544.95},0).wait(1));

	// muñeco_Osca
	this.instance_4 = new lib.CachedBmp_9();
	this.instance_4.setTransform(1113.45,739.7,0.5,0.5);

	this.instance_5 = new lib.Path_13();
	this.instance_5.setTransform(1196,748.35,0.3551,0.3499,0,0,0,249.9,30.6);
	this.instance_5.compositeOperation = "multiply";

	this.instance_6 = new lib.CachedBmp_8();
	this.instance_6.setTransform(1139.7,592,0.5,0.5);

	this.instance_7 = new lib.Path_2();
	this.instance_7.setTransform(1060.1,783.25,0.3549,0.3497,0,0,0,17.8,10.3);
	this.instance_7.compositeOperation = "multiply";

	this.instance_8 = new lib.Path_1_0();
	this.instance_8.setTransform(1040.1,773.3,0.3549,0.3497,0,0,0,47.2,23.6);
	this.instance_8.compositeOperation = "multiply";

	this.instance_9 = new lib.CachedBmp_7();
	this.instance_9.setTransform(1014,731.3,0.5,0.5);

	this.instance_10 = new lib.Path_0();
	this.instance_10.setTransform(1288.15,782.3,0.3549,0.3497,0,0,0,10.3,13.8);
	this.instance_10.compositeOperation = "multiply";

	this.instance_11 = new lib.Path_1();
	this.instance_11.setTransform(1313.2,779,0.3549,0.3497,0,0,0,57.6,9.3);
	this.instance_11.compositeOperation = "multiply";

	this.instance_12 = new lib.CachedBmp_6();
	this.instance_12.setTransform(1277.75,737.85,0.5,0.5);

	this.instance_13 = new lib.CachedBmp_5();
	this.instance_13.setTransform(1035.65,551.05,0.5,0.5);

	this.instance_14 = new lib.Path();
	this.instance_14.setTransform(1183.85,536.4,0.3548,0.3495,0,0,0,14,4);
	this.instance_14.compositeOperation = "multiply";

	this.instance_15 = new lib.CachedBmp_44();
	this.instance_15.setTransform(1149.8,487.05,0.5,0.5);

	this.instance_16 = new lib.Path_4();
	this.instance_16.setTransform(1240.9,512.6,0.3548,0.3495,0,0,0,22.9,28.3);
	this.instance_16.compositeOperation = "multiply";

	this.instance_17 = new lib.CachedBmp_3();
	this.instance_17.setTransform(1227.75,499.3,0.5,0.5);

	this.instance_18 = new lib.Path_6();
	this.instance_18.setTransform(1177.55,516.45,0.3548,0.3495,0,0,0,12.7,20.6);
	this.instance_18.compositeOperation = "multiply";

	this.instance_19 = new lib.CachedBmp_43();
	this.instance_19.setTransform(1145.65,439.55,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4}]}).wait(60));

	// muñeca_Day
	this.instance_20 = new lib.Path_0_2();
	this.instance_20.setTransform(834.4,633.05,0.3551,0.3499,0,0,0,16.1,5.9);
	this.instance_20.alpha = 0.5;

	this.instance_21 = new lib.Path_1_6();
	this.instance_21.setTransform(910.2,708.7,0.3551,0.3499,0,0,0,12,35.1);
	this.instance_21.alpha = 0.5;

	this.instance_22 = new lib.CachedBmp_40();
	this.instance_22.setTransform(645.15,436.5,0.5,0.5);

	this.instance_23 = new lib.Path_26();
	this.instance_23.setTransform(832.95,567.95,0.3551,0.3499,0,0,0,19.2,13.5);
	this.instance_23.alpha = 0.5;

	this.instance_24 = new lib.Path_27();
	this.instance_24.setTransform(852.05,566.3,0.3551,0.3499,0,0,0,15.7,16.1);
	this.instance_24.alpha = 0.5;

	this.instance_25 = new lib.CachedBmp_39();
	this.instance_25.setTransform(699.6,433.2,0.5,0.5);

	this.instance_26 = new lib.Path_44();
	this.instance_26.setTransform(842.05,573.1,0.3551,0.3499,0,0,0,0.3,0);
	this.instance_26.alpha = 0.5;

	this.instance_27 = new lib.Path_45();
	this.instance_27.setTransform(828.1,563.55,0.3551,0.3499,0,0,0,0.4,0.5);
	this.instance_27.alpha = 0.5;

	this.instance_28 = new lib.Path_46();
	this.instance_28.setTransform(775.7,877.6,0.3551,0.3499,0,0,0,7.6,16);
	this.instance_28.alpha = 0.5;

	this.instance_29 = new lib.Path_47();
	this.instance_29.setTransform(818.3,876.8,0.3551,0.3499,0,0,0,18,21.6);
	this.instance_29.alpha = 0.5;

	this.instance_30 = new lib.Path_48();
	this.instance_30.setTransform(817.25,884.15,0.3551,0.3499,0,0,0,10.2,12);
	this.instance_30.alpha = 0.5;

	this.instance_31 = new lib.CachedBmp_11();
	this.instance_31.setTransform(725,712.9,0.5,0.5);

	this.instance_32 = new lib.Path_50();
	this.instance_32.setTransform(824.25,877.6,0.3551,0.3499,0,0,0,30.9,379.9);
	this.instance_32.alpha = 0.3008;

	this.instance_33 = new lib.Path_3();
	this.instance_33.setTransform(855.85,860,0.3549,0.3497,0,0,0,25.9,39.1);
	this.instance_33.alpha = 0.5;

	this.instance_34 = new lib.CachedBmp_10();
	this.instance_34.setTransform(813.55,711.15,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20}]}).wait(60));

	// Capa_15
	this.fondo = new lib.fondo();
	this.fondo.name = "fondo";
	this.fondo.setTransform(962.7,542.75,1,1,0,0,0,2,0);

	this.timeline.addTween(cjs.Tween.get(this.fondo).wait(60));

	// stageBackground
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(1,1,1,3,true).p("EiXjhV7MEvHAAAMAAACr3MkvHAAAg");
	this.shape.setTransform(960,540);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EiXjBV8MAAAir3MEvHAAAMAAACr3g");
	this.shape_1.setTransform(960,540);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(60));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(603.5,-248,1626,2046);
// library properties:
lib.properties = {
	id: '5D2F46310DE8F248B7DF630B729D1F51',
	width: 1920,
	height: 1080,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/CachedBmp_33.png?1699978362774", id:"CachedBmp_33"},
		{src:"images/CachedBmp_20.png?1699978362774", id:"CachedBmp_20"},
		{src:"images/CachedBmp_14.png?1699978362774", id:"CachedBmp_14"},
		{src:"images/index_atlas_1.png?1699978362701", id:"index_atlas_1"},
		{src:"images/index_atlas_2.png?1699978362701", id:"index_atlas_2"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['5D2F46310DE8F248B7DF630B729D1F51'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;