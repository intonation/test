(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.yakult = function() {
	this.initialize(img.yakult);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,79);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
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


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.yakult();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,500,79), null);


(lib.RightLeg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#AB1418").s().p("ACXI0IgHgUIgCgFIgMgeIgdhGIgdhAIgfhAQgVgpgJgXIgbhDQgRgqgMgYIgYgvIgYgvIgKgRIhOidQgvhhgjg6IgbgtQgPgbgKgTIgVgxQgNgegPgQIgVgZIgGgMIAIgCIAFgFQAKgHAPgFIAIgDQAegJAeAAIATACIABAAIAJAPQAKAWAOAKQASAPAUAYIAiArQAsA7AaAoQAYAlArBMIAaA2QAQAiAOASQAgAsBGBIQBJBOAeAmQATAZA4BSIAlA3QAWAdATARIAADug");
	this.shape.setTransform(39.2,56.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.RightLeg, new cjs.Rectangle(0,0,78.3,112.8), null);


(lib.RightFoot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FCCB9B").s().p("AAqDpQAAgGgHgIIgKgNQgNgngIgTQgVgmgJgUQgIgUgNgqQgahLgTgoQgfhCgogjIgFgIQABgoAnADQAKABALAHQAZASAIAKQALAOALAEQA7AWASAvIAOAtIADANQADAHAGAEQAKAJAaAOIAVAOQAJAHAGAHQAPAVAHAmQAHAogKAWQgEALAEAMQADAHAHANIARAhIgBAAIgTgCQglAAgfAMQgPAFgKAHIgCABQgFAEgEAAIgDgBg");
	this.shape.setTransform(16.9,23.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.RightFoot, new cjs.Rectangle(0,0,33.8,46.8), null);


(lib.RightArm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FCCB9B").s().p("AhyHPQgYgGgQgMQAHgMAhgJQAMgCAYACQAYACALgDQAZgGAAgcQAAgGgHgqQgLhDAEhaIAMidQALiaAHhQIAGhIIAJhFIAFglQACgVAEgPIAFgSIABgEQADgQgEgGQAJALAKAPIAAAAIAAABQARAZATAlIAZAuQANAXAHASIACAFIACAFIAHAZIAEAJIAEAHQADAFAEABQgJASgNAmQgOAjgHAZIgVBSIgMAlQgHAXgCAPQgCASAEAYIAIAqQAIA+gLBNQgMBLgCAdIgBAYQAAAPAGAHQAFAGAMACIATAEIAZAGQAPAFAGAIQgOATgWAAIhUgDIgDAAIhFgCQgFAAgWAFQgJACgKAAQgMAAgOgDg");
	this.shape.setTransform(15.5,46.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.RightArm, new cjs.Rectangle(0,0,31.1,93.2), null);


(lib.LeftLeg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2B2626").s().p("AAAAAIABAAIAAAAIgBABg");
	this.shape.setTransform(40.4,70.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#695E61").s().p("AhHCbIAfgwIAEgKIACgLIATg6IgFAUIgDANIAAAGQgCARgKAUIgMAUIgIAMIgbAnIgBABIgHAHgAA0h5IAggzIAHgKIhICFIgKASIgDADQARgwAdgtg");
	this.shape_1.setTransform(36.2,35.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#AB1418").s().p("AlYJRIAAjtIADACQAJgHAJgTIAPgdIAig9QAhg7Aog7QAigzBDhXIAjgsIAAgBIAPgSQALgRAKgPIALgVQALgTABgRIABgGIAJgiQAIgeAYgvIBIiFIgGAKIAYgrQArhKAsg8QAFgIAMgBIAxAFQASAEAOAFQALAFAJAGIAHAEIAHAEQgGAggYAsIgpBIIhSCdQglBGgRAjQgdA9gKAjIgSBEQgKArgJAaIhGDRIgRAqQgJAbAFAPQgIADgEAPIgWBJIgTBAIgBAGIgKAeIgBAFIgHAUg");
	this.shape_2.setTransform(34.5,59.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.LeftLeg, new cjs.Rectangle(0,0,68.9,118.7), null);


(lib.LeftFoot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FCCB9B").s().p("AhECxIgGgEQgJgGgLgFQgOgFgSgEIgygFIgGgBQAHABAQhVIACglQAEgTARgJIATgKIATgJQAYgNAOgWIAOgaQAIgRAIgIQAQgRAegHIA1gLQAJgDAWgQQAXgPAsgBQAMADADAPQADAQgJAKQgGAHgRAZQgCAEgKAEIgNAHQgMAIgPANQgYAXgUAcQgbAkgcA8QgDAIgWAgIgMAZQgIAQgGAHQgHAIgFAAIgHgBg");
	this.shape.setTransform(18.3,17.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.LeftFoot, new cjs.Rectangle(0,0,36.6,35.7), null);


(lib.Leftarm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FCCB9B").s().p("AhtHdQgGAAgCgDQgHgEAIgHQACgCAJgDIApgLQAXgIAGgRQAFgNAAgeQABgogDg7IgFhjIgCgzQgCgcgFgWQgGgYgag4QgWgvgFgeIAAgEIgEg8QgCgRgDgNIgCgHIgDgHIgCgGIgFgIQgFgIgIgJIgGgHIgWgVQgGgGgBgCIACgHIAAgBIABgCQABgHAAgWIgBgEQAAgLACgKQADgjATgiIACgFIADgEIAHgLIASgZIAIgKIAKgLIAIgJIARgTIADgEQgBACAFAUIAPBNQAIAoANA1IADAOIAcBpQARBCAJAoQAcB0AGBXQAEA5gFBnIgEBHQACAqAcAQQAKAGARAEIAcAHQAoARgHAJQgDAGgHABQhMAIhGAAQhBAAg9gHg");
	this.shape.setTransform(17.5,48.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Leftarm, new cjs.Rectangle(0,0,34.9,96.8), null);


(lib.Head = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#373333").s().p("AgBAAIADgBIAAADg");
	this.shape.setTransform(6.2,64.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#817878").s().p("AAAAEIAAgBIAAgGIABAHg");
	this.shape_1.setTransform(36.1,27.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#744D28").s().p("AgbFKQgDgOgEgHQgFgLgLgEQgkgPgOgZIgKgWQgEgIgGAEIgFAAIABgCIgCgJIgCgRQgBgKgGgGQgKgKgJgOQgHgMAAgHQAAgJAEgiIAGg2IgIABQgFgKgEgEQgSgTABgUQABgWAEgOIAGgNQAFgIABgFQAKgngGggIgFglQgCgUADgRIAKhBIAIgNIAKgNQANgQAHgGQAMgLANgDQARA6gBAyQAAAKADAJIAEAKQALAfAKASQAMAVAOAMIAJAGQAUAMAXgGQAXgGAPgUIAGgJQAJgNAFgSQAKggABgaQACgegNgXIgCgDIAAAAIAAgBIgBgBQgDgFgBgHIgDgPIAOABQAIABAEgBIACAAIAKAIIAcAcQAIAJAFAIIAFAIIACAGIADAHIACAHQADANACARIAEA8IgBAHIgDAKQAAAFAEAEIgBAHIgBAKIAKBIIACADIAAAHIAAACIABANIgGAAIgTgIIABAVQABAMAFAIIANARIADAIIgFAHIgKgBIgBAIIAAAIIAGAcQACALgHAJQgHAJgMAAQgIAAABAIIACAgQAAARgIANIAAAGIgFAFQgeAWADAcIgDAdIgBADIgBACIgGADIgDAAIgEgBIgKgJIgQgUIgDABIgFAfIgOgJQgHgFgBgIIgHgPIgDgNIAAgFIAEgUIgCgGIgEgGIgCAAQgKgLgGAKQgOAdAAAQQAAACAEAGIgBALQAAAGAFAEIACAEIAAgBIABAGQADAUgBAJQgDALgNAJQgJgBgCgMg");
	this.shape_2.setTransform(18.6,41.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FCCB9B").s().p("AgHCWQgKgDgIgHQgOgMgMgVQgKgSgMgfIgDgKQgDgJAAgKQAAgxgQg6IAAgIIAFgIIAEgKIABAAQAFgZAWgMQAIgEAKgDQAcgIAiAGIAFABQAIABAGAFIACACQAJAJAFAJQAGAKAAAKIABAJIADARQAEAdALATIAAABIABABIAAAAIABADQANAXgBAdQgBAagKAgQgGASgIANQgJANgLAJQgNAKgPADIgNACQgJAAgIgEg");
	this.shape_3.setTransform(18.6,15.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Head, new cjs.Rectangle(0,0,37.2,76.1), null);


(lib.Body = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F3101C").s().p("AiBDLIgEgHQgGgXgEgLIAAgBIgEgJQgIgSgMgXIgZguQgTglgRgZIAAgBIgBAAIgDgEIgJgPQgEgJgBgIQAAgIAEgVIAeh4IAAgCIAAAAQAAgDAKgCIALgBQALgCAMADIAIACQApANAlAGQAqAHAsAAIApAAIAMgBIAagCIApgBQAdgBAUgKQAGgCATgQQASgMAHAGIAEAJIABADQADAMACAUIACAcQAEApAGAeQAEAUgDAKIgBADIgRATIgIAIIgKALIgIAKIgSAZIgHALIgDAFIgCAEQgTAjgDAiQgCALAAALIABADQAAAXgBAHIgBACIAAABQgBADgFADIgBAAQgEACgIgBIgOgCQgFgIgDgMIgCgSIgBgJQgBgKgFgJQgFgLgIgHIgDgCQgGgFgIgBIgFgBIgMgCQglgEgWAKIgJAFQgWAMgGAYIgFAKIgFAJIgZACQgQAGgKAMQgKANgHAAQgDAAgCgBg");
	this.shape.setTransform(25.2,56.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FCCB9B").s().p("AhZCPQgmgGgpgNIgIgCQgLgDgLACIgMABQgJACAAADIAAAAQgBgOAFgWQAGgZABgMQALhCABgSQABgLgEgcQgDgWABgNIABgFQABgIAHgGQADgDAFgCQAJgEASgDQAagHAfgBQAxgEAogCQAVgBAtABQAoABAUABQAhACAaAGIAZAGIAFADIAGAIIgFA8QgCAhABAgQABAhAFAfIAGAcQAFARgBALIAAgDIgEgJQgHgGgSAMQgUAQgFACQgUAKgdABIgpABIgKABIgcACIgpAAQgsAAgqgHg");
	this.shape_1.setTransform(26,25.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#AB1418").s().p("AjFAtIgIgRIgCgEIghhaIHhAAIgCAFQgMAoAEAaIACALQACAIgCADQgBAEgDACIgHAFQgDADAAAEIgCAIIgYgFQgagFgigCQgTgCgpAAQgsgBgXABQgmABgyAEQgeABgaAHQgTADgIAEQgFACgDAEIgGACQgNgGgFgQg");
	this.shape_2.setTransform(24.1,6.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Body, new cjs.Rectangle(0,0,50,77.3), null);


// stage content:
(lib.Yakult = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Armature_3
	this.ikNode_2 = new lib.RightLeg();
	this.ikNode_2.name = "ikNode_2";
	this.ikNode_2.parent = this;
	this.ikNode_2.setTransform(275,189.6,1,1,0,0,0,70.3,105.4);

	this.ikNode_8 = new lib.Leftarm();
	this.ikNode_8.name = "ikNode_8";
	this.ikNode_8.parent = this;
	this.ikNode_8.setTransform(311.7,305.8,1,1,0,0,0,17.4,48.4);

	this.ikNode_7 = new lib.RightArm();
	this.ikNode_7.name = "ikNode_7";
	this.ikNode_7.parent = this;
	this.ikNode_7.setTransform(253.6,315.6,1,1,0,0,0,17.1,57.6);

	this.ikNode_6 = new lib.LeftFoot();
	this.ikNode_6.name = "ikNode_6";
	this.ikNode_6.parent = this;
	this.ikNode_6.setTransform(344.6,79.6,1,1,0,0,0,9.8,27.5);

	this.ikNode_5 = new lib.RightFoot();
	this.ikNode_5.name = "ikNode_5";
	this.ikNode_5.parent = this;
	this.ikNode_5.setTransform(200.2,90.8,1,1,0,0,0,21.2,43.9);

	this.ikNode_4 = new lib.Head();
	this.ikNode_4.name = "ikNode_4";
	this.ikNode_4.parent = this;
	this.ikNode_4.setTransform(283.7,308.8,1,1,0,0,0,18.6,38.1);

	this.ikNode_3 = new lib.LeftLeg();
	this.ikNode_3.name = "ikNode_3";
	this.ikNode_3.parent = this;
	this.ikNode_3.setTransform(298.1,184.6,0.999,0.999,0,0,0,21,100.3);

	this.ikNode_1 = new lib.Body();
	this.ikNode_1.name = "ikNode_1";
	this.ikNode_1.parent = this;
	this.ikNode_1.setTransform(275.6,226.1,1,1,0,0,0,21,22.5);

	this.ikNode_18 = new lib.RightLeg();
	this.ikNode_18.name = "ikNode_18";
	this.ikNode_18.parent = this;
	this.ikNode_18.setTransform(275.1,189.6,1,1,0,0,0,70.2,105.4);

	this.ikNode_24 = new lib.Leftarm();
	this.ikNode_24.name = "ikNode_24";
	this.ikNode_24.parent = this;
	this.ikNode_24.setTransform(311.7,305.8,1,1,0,0,0,17.4,48.4);

	this.ikNode_23 = new lib.RightArm();
	this.ikNode_23.name = "ikNode_23";
	this.ikNode_23.parent = this;
	this.ikNode_23.setTransform(253.6,315.6,1,1,0,0,0,17.1,57.6);

	this.ikNode_21 = new lib.LeftFoot();
	this.ikNode_21.name = "ikNode_21";
	this.ikNode_21.parent = this;
	this.ikNode_21.setTransform(344.6,79.6,1,1,0,0,0,9.7,27.4);

	this.ikNode_19 = new lib.RightFoot();
	this.ikNode_19.name = "ikNode_19";
	this.ikNode_19.parent = this;
	this.ikNode_19.setTransform(200.2,90.8,1,1,0,0,0,21.2,43.9);

	this.ikNode_22 = new lib.Head();
	this.ikNode_22.name = "ikNode_22";
	this.ikNode_22.parent = this;
	this.ikNode_22.setTransform(283.7,308.8,1,1,0,0,0,18.6,38.1);

	this.ikNode_20 = new lib.LeftLeg();
	this.ikNode_20.name = "ikNode_20";
	this.ikNode_20.parent = this;
	this.ikNode_20.setTransform(298.1,184.6,0.999,0.999,0,0,0,20.8,100.2);

	this.ikNode_17 = new lib.Body();
	this.ikNode_17.name = "ikNode_17";
	this.ikNode_17.parent = this;
	this.ikNode_17.setTransform(275.6,226.1,1,1,0,0,0,21,22.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ikNode_1},{t:this.ikNode_3,p:{regX:21,regY:100.3,rotation:0,x:298.1,y:184.6}},{t:this.ikNode_4},{t:this.ikNode_5,p:{rotation:0,x:200.2,y:90.8,regX:21.2,regY:43.9}},{t:this.ikNode_6,p:{regY:27.5,rotation:0,x:344.6,y:79.6}},{t:this.ikNode_7,p:{rotation:0,x:253.6,y:315.6}},{t:this.ikNode_8,p:{rotation:0,x:311.7,y:305.8,regY:48.4,regX:17.4}},{t:this.ikNode_2,p:{rotation:0,x:275,y:189.6,regY:105.4,regX:70.3}}]}).to({state:[{t:this.ikNode_1},{t:this.ikNode_3,p:{regX:21.1,regY:100.4,rotation:-1.1,x:296.7,y:184.1}},{t:this.ikNode_4},{t:this.ikNode_5,p:{rotation:-3.5,x:194.3,y:95.4,regX:21.2,regY:43.9}},{t:this.ikNode_6,p:{regY:27.6,rotation:-1.1,x:341,y:78.2}},{t:this.ikNode_7,p:{rotation:0,x:253.6,y:315.6}},{t:this.ikNode_8,p:{rotation:0,x:311.7,y:305.8,regY:48.4,regX:17.4}},{t:this.ikNode_2,p:{rotation:-3.2,x:274.2,y:190,regY:105.4,regX:70.3}}]},1).to({state:[{t:this.ikNode_1},{t:this.ikNode_3,p:{regX:21.1,regY:100.4,rotation:-2.2,x:295.2,y:183.4}},{t:this.ikNode_4},{t:this.ikNode_5,p:{rotation:-7,x:188.5,y:100.2,regX:21.2,regY:43.9}},{t:this.ikNode_6,p:{regY:27.5,rotation:-2.2,x:337.3,y:76.7}},{t:this.ikNode_7,p:{rotation:0,x:253.6,y:315.6}},{t:this.ikNode_8,p:{rotation:0,x:311.7,y:305.8,regY:48.4,regX:17.4}},{t:this.ikNode_2,p:{rotation:-6.3,x:273.3,y:190.2,regY:105.3,regX:70.3}}]},1).to({state:[{t:this.ikNode_1},{t:this.ikNode_3,p:{regX:21.1,regY:100.4,rotation:-3.3,x:293.5,y:182.8}},{t:this.ikNode_4},{t:this.ikNode_5,p:{rotation:-10.5,x:183.2,y:105.5,regX:21.3,regY:43.9}},{t:this.ikNode_6,p:{regY:27.6,rotation:-3.3,x:333.4,y:75.5}},{t:this.ikNode_7,p:{rotation:0,x:253.6,y:315.6}},{t:this.ikNode_8,p:{rotation:0,x:311.7,y:305.8,regY:48.4,regX:17.4}},{t:this.ikNode_2,p:{rotation:-9.5,x:272.3,y:190.7,regY:105.3,regX:70.3}}]},1).to({state:[{t:this.ikNode_1},{t:this.ikNode_3,p:{regX:21.1,regY:100.4,rotation:-4.5,x:291.6,y:182.2}},{t:this.ikNode_4},{t:this.ikNode_5,p:{rotation:-14.1,x:177.6,y:110.9,regX:21.2,regY:43.9}},{t:this.ikNode_6,p:{regY:27.6,rotation:-4.5,x:329.4,y:74.1}},{t:this.ikNode_7,p:{rotation:0,x:253.6,y:315.6}},{t:this.ikNode_8,p:{rotation:0,x:311.7,y:305.8,regY:48.4,regX:17.4}},{t:this.ikNode_2,p:{rotation:-12.6,x:271.2,y:191.3,regY:105.4,regX:70.3}}]},1).to({state:[{t:this.ikNode_1},{t:this.ikNode_3,p:{regX:21.1,regY:100.3,rotation:-5.6,x:289.6,y:181.5}},{t:this.ikNode_4},{t:this.ikNode_5,p:{rotation:-17.6,x:172.5,y:116.6,regX:21.2,regY:43.9}},{t:this.ikNode_6,p:{regY:27.6,rotation:-5.6,x:325.2,y:72.9}},{t:this.ikNode_7,p:{rotation:0,x:253.6,y:315.6}},{t:this.ikNode_8,p:{rotation:0,x:311.7,y:305.8,regY:48.4,regX:17.4}},{t:this.ikNode_2,p:{rotation:-15.8,x:270,y:191.7,regY:105.3,regX:70.3}}]},1).to({state:[{t:this.ikNode_1},{t:this.ikNode_3,p:{regX:21.1,regY:100.4,rotation:-6.7,x:287.5,y:181.2}},{t:this.ikNode_4},{t:this.ikNode_5,p:{rotation:-21.1,x:167.5,y:122.6,regX:21.2,regY:43.9}},{t:this.ikNode_6,p:{regY:27.6,rotation:-6.7,x:320.7,y:71.7}},{t:this.ikNode_7,p:{rotation:0,x:253.6,y:315.6}},{t:this.ikNode_8,p:{rotation:0,x:311.7,y:305.8,regY:48.4,regX:17.4}},{t:this.ikNode_2,p:{rotation:-19,x:268.8,y:192.4,regY:105.4,regX:70.3}}]},1).to({state:[{t:this.ikNode_1},{t:this.ikNode_3,p:{regX:21.1,regY:100.4,rotation:-7.8,x:285.1,y:180.7}},{t:this.ikNode_4},{t:this.ikNode_5,p:{rotation:-24.6,x:162.7,y:128.7,regX:21.2,regY:43.9}},{t:this.ikNode_6,p:{regY:27.6,rotation:-7.8,x:316.2,y:70.8}},{t:this.ikNode_7,p:{rotation:0,x:253.6,y:315.6}},{t:this.ikNode_8,p:{rotation:0,x:311.7,y:305.8,regY:48.4,regX:17.4}},{t:this.ikNode_2,p:{rotation:-22.1,x:267.6,y:193,regY:105.4,regX:70.4}}]},1).to({state:[{t:this.ikNode_1},{t:this.ikNode_3,p:{regX:21.1,regY:100.4,rotation:-8.9,x:282.5,y:180.4}},{t:this.ikNode_4},{t:this.ikNode_5,p:{rotation:-28.1,x:158.1,y:135.2,regX:21.2,regY:43.9}},{t:this.ikNode_6,p:{regY:27.6,rotation:-8.9,x:311.4,y:70}},{t:this.ikNode_7,p:{rotation:0,x:253.6,y:315.6}},{t:this.ikNode_8,p:{rotation:0,x:311.7,y:305.8,regY:48.4,regX:17.4}},{t:this.ikNode_2,p:{rotation:-25.3,x:266,y:193.8,regY:105.4,regX:70.4}}]},1).to({state:[{t:this.ikNode_1},{t:this.ikNode_3,p:{regX:21.1,regY:100.4,rotation:-10,x:279.8,y:180.2}},{t:this.ikNode_4},{t:this.ikNode_5,p:{rotation:-31.6,x:153.7,y:142,regX:21.2,regY:43.9}},{t:this.ikNode_6,p:{regY:27.6,rotation:-10,x:306.4,y:69.2}},{t:this.ikNode_7,p:{rotation:0,x:253.6,y:315.6}},{t:this.ikNode_8,p:{rotation:0,x:311.7,y:305.8,regY:48.4,regX:17.4}},{t:this.ikNode_2,p:{rotation:-28.5,x:264.5,y:194.6,regY:105.4,regX:70.4}}]},1).to({state:[{t:this.ikNode_1},{t:this.ikNode_3,p:{regX:21.1,regY:100.4,rotation:-11.1,x:277,y:180.2}},{t:this.ikNode_4},{t:this.ikNode_5,p:{rotation:-35.2,x:149.7,y:149.1,regX:21.2,regY:43.9}},{t:this.ikNode_6,p:{regY:27.5,rotation:-11.1,x:301.2,y:68.6}},{t:this.ikNode_7,p:{rotation:0,x:253.6,y:315.6}},{t:this.ikNode_8,p:{rotation:0,x:311.7,y:305.8,regY:48.4,regX:17.4}},{t:this.ikNode_2,p:{rotation:-31.6,x:262.8,y:195.7,regY:105.4,regX:70.3}}]},1).to({state:[{t:this.ikNode_1},{t:this.ikNode_3,p:{regX:21.1,regY:100.4,rotation:-12.3,x:273.9,y:180.3}},{t:this.ikNode_4},{t:this.ikNode_5,p:{rotation:-38.7,x:145.7,y:156.3,regX:21.2,regY:43.9}},{t:this.ikNode_6,p:{regY:27.5,rotation:-12.3,x:296,y:68.4}},{t:this.ikNode_7,p:{rotation:0,x:253.6,y:315.6}},{t:this.ikNode_8,p:{rotation:0,x:311.7,y:305.8,regY:48.4,regX:17.4}},{t:this.ikNode_2,p:{rotation:-34.8,x:261,y:196.9,regY:105.4,regX:70.3}}]},1).to({state:[{t:this.ikNode_1},{t:this.ikNode_3,p:{regX:21.1,regY:100.4,rotation:-13.4,x:270.7,y:180.6}},{t:this.ikNode_4},{t:this.ikNode_5,p:{rotation:-42.2,x:142,y:164,regX:21.2,regY:43.9}},{t:this.ikNode_6,p:{regY:27.6,rotation:-13.4,x:290.6,y:68.5}},{t:this.ikNode_7,p:{rotation:0,x:253.6,y:315.6}},{t:this.ikNode_8,p:{rotation:0,x:311.7,y:305.8,regY:48.4,regX:17.4}},{t:this.ikNode_2,p:{rotation:-37.9,x:259.2,y:198.4,regY:105.4,regX:70.2}}]},1).to({state:[{t:this.ikNode_1},{t:this.ikNode_3,p:{regX:21.1,regY:100.4,rotation:-14.5,x:267.5,y:181.2}},{t:this.ikNode_4},{t:this.ikNode_5,p:{rotation:-45.7,x:138.6,y:171.9,regX:21.2,regY:43.9}},{t:this.ikNode_6,p:{regY:27.6,rotation:-14.5,x:285.1,y:68.8}},{t:this.ikNode_7,p:{rotation:0,x:253.6,y:315.6}},{t:this.ikNode_8,p:{rotation:0,x:311.7,y:305.8,regY:48.4,regX:17.4}},{t:this.ikNode_2,p:{rotation:-41.1,x:257.4,y:199.9,regY:105.4,regX:70.3}}]},1).to({state:[{t:this.ikNode_1},{t:this.ikNode_3,p:{regX:21.1,regY:100.4,rotation:-15.6,x:264.2,y:182}},{t:this.ikNode_4},{t:this.ikNode_5,p:{rotation:-49.2,x:135.7,y:180.1,regX:21.3,regY:43.9}},{t:this.ikNode_6,p:{regY:27.5,rotation:-15.6,x:279.5,y:69.3}},{t:this.ikNode_7,p:{rotation:0,x:253.6,y:315.6}},{t:this.ikNode_8,p:{rotation:0,x:311.7,y:305.8,regY:48.4,regX:17.4}},{t:this.ikNode_2,p:{rotation:-44.3,x:255.5,y:201.8,regY:105.4,regX:70.3}}]},1).to({state:[{t:this.ikNode_1},{t:this.ikNode_3,p:{regX:21.1,regY:100.4,rotation:-16.7,x:261,y:183.2}},{t:this.ikNode_4},{t:this.ikNode_5,p:{rotation:-52.7,x:133,y:188.8,regX:21.2,regY:43.9}},{t:this.ikNode_6,p:{regY:27.6,rotation:-16.7,x:274.1,y:70.3}},{t:this.ikNode_7,p:{rotation:0,x:253.6,y:315.6}},{t:this.ikNode_8,p:{rotation:0,x:311.7,y:305.8,regY:48.4,regX:17.4}},{t:this.ikNode_2,p:{rotation:-47.4,x:253.6,y:204,regY:105.4,regX:70.3}}]},1).to({state:[{t:this.ikNode_1},{t:this.ikNode_3,p:{regX:21.1,regY:100.4,rotation:-17.8,x:257.8,y:184.5}},{t:this.ikNode_4},{t:this.ikNode_5,p:{rotation:-56.2,x:130.8,y:197.6,regX:21.2,regY:43.9}},{t:this.ikNode_6,p:{regY:27.6,rotation:-17.8,x:268.6,y:71.4}},{t:this.ikNode_7,p:{rotation:0,x:253.6,y:315.6}},{t:this.ikNode_8,p:{rotation:0,x:311.7,y:305.8,regY:48.4,regX:17.4}},{t:this.ikNode_2,p:{rotation:-50.6,x:251.9,y:206.4,regY:105.4,regX:70.3}}]},1).to({state:[{t:this.ikNode_1},{t:this.ikNode_3,p:{regX:21.1,regY:100.3,rotation:-18.9,x:254.9,y:185.9}},{t:this.ikNode_4},{t:this.ikNode_5,p:{rotation:-59.8,x:129.1,y:206.7,regX:21.2,regY:43.9}},{t:this.ikNode_6,p:{regY:27.6,rotation:-18.9,x:263.3,y:72.9}},{t:this.ikNode_7,p:{rotation:0,x:253.6,y:315.6}},{t:this.ikNode_8,p:{rotation:0,x:311.7,y:305.8,regY:48.4,regX:17.4}},{t:this.ikNode_2,p:{rotation:-53.8,x:250.5,y:209,regY:105.4,regX:70.4}}]},1).to({state:[{t:this.ikNode_1},{t:this.ikNode_3,p:{regX:21.1,regY:100.4,rotation:-20.1,x:252,y:187.8}},{t:this.ikNode_4},{t:this.ikNode_5,p:{rotation:-63.3,x:128,y:215.9,regX:21.2,regY:43.9}},{t:this.ikNode_6,p:{regY:27.6,rotation:-20.1,x:258.1,y:74.6}},{t:this.ikNode_7,p:{rotation:0,x:253.6,y:315.6}},{t:this.ikNode_8,p:{rotation:0,x:311.7,y:305.8,regY:48.4,regX:17.4}},{t:this.ikNode_2,p:{rotation:-56.9,x:249.2,y:211.8,regY:105.4,regX:70.4}}]},1).to({state:[{t:this.ikNode_1},{t:this.ikNode_3,p:{regX:21.1,regY:100.3,rotation:-21.2,x:249.3,y:189.6}},{t:this.ikNode_4},{t:this.ikNode_5,p:{rotation:-66.8,x:127.6,y:225.2,regX:21.2,regY:43.9}},{t:this.ikNode_6,p:{regY:27.6,rotation:-21.2,x:253.2,y:76.5}},{t:this.ikNode_7,p:{rotation:0,x:253.6,y:315.6}},{t:this.ikNode_8,p:{rotation:0,x:311.7,y:305.8,regY:48.4,regX:17.4}},{t:this.ikNode_2,p:{rotation:-60.1,x:248.2,y:214.7,regY:105.4,regX:70.3}}]},1).to({state:[{t:this.ikNode_1},{t:this.ikNode_3,p:{regX:21.1,regY:100.3,rotation:-22.3,x:247,y:191.6}},{t:this.ikNode_4},{t:this.ikNode_5,p:{rotation:-70.3,x:127.8,y:234.4,regX:21.2,regY:43.9}},{t:this.ikNode_6,p:{regY:27.6,rotation:-22.3,x:248.6,y:78.5}},{t:this.ikNode_7,p:{rotation:0,x:253.6,y:315.6}},{t:this.ikNode_8,p:{rotation:0,x:311.7,y:305.8,regY:48.4,regX:17.4}},{t:this.ikNode_2,p:{rotation:-63.3,x:247.5,y:217.6,regY:105.4,regX:70.3}}]},1).to({state:[{t:this.ikNode_1},{t:this.ikNode_3,p:{regX:21.1,regY:100.4,rotation:-23.4,x:244.9,y:193.8}},{t:this.ikNode_4},{t:this.ikNode_5,p:{rotation:-73.8,x:128.7,y:243.5,regX:21.2,regY:43.9}},{t:this.ikNode_6,p:{regY:27.6,rotation:-23.4,x:244.2,y:80.6}},{t:this.ikNode_7,p:{rotation:0,x:253.6,y:315.6}},{t:this.ikNode_8,p:{rotation:0,x:311.7,y:305.8,regY:48.4,regX:17.4}},{t:this.ikNode_2,p:{rotation:-66.4,x:247.2,y:220.4,regY:105.4,regX:70.3}}]},1).to({state:[{t:this.ikNode_1},{t:this.ikNode_3,p:{regX:21.1,regY:100.4,rotation:-24.5,x:243,y:195.8}},{t:this.ikNode_4},{t:this.ikNode_5,p:{rotation:-77.3,x:130.3,y:252.2,regX:21.3,regY:43.9}},{t:this.ikNode_6,p:{regY:27.6,rotation:-24.5,x:240,y:82.8}},{t:this.ikNode_7,p:{rotation:0,x:253.6,y:315.6}},{t:this.ikNode_8,p:{rotation:0,x:311.7,y:305.8,regY:48.4,regX:17.4}},{t:this.ikNode_2,p:{rotation:-69.6,x:247.1,y:223,regY:105.4,regX:70.3}}]},1).to({state:[{t:this.ikNode_1},{t:this.ikNode_3,p:{regX:21,regY:100.4,rotation:-25.6,x:241.3,y:198}},{t:this.ikNode_4},{t:this.ikNode_5,p:{rotation:-80.8,x:132.3,y:260.8,regX:21.2,regY:44}},{t:this.ikNode_6,p:{regY:27.6,rotation:-25.6,x:236.2,y:85}},{t:this.ikNode_7,p:{rotation:0,x:253.6,y:315.6}},{t:this.ikNode_8,p:{rotation:0,x:311.7,y:305.8,regY:48.4,regX:17.4}},{t:this.ikNode_2,p:{rotation:-72.7,x:247.4,y:225.4,regY:105.4,regX:70.3}}]},1).to({state:[{t:this.ikNode_1},{t:this.ikNode_3,p:{regX:21.1,regY:100.4,rotation:-26.7,x:239.9,y:199.9}},{t:this.ikNode_4},{t:this.ikNode_5,p:{rotation:-84.4,x:134.9,y:269,regX:21.2,regY:44}},{t:this.ikNode_6,p:{regY:27.6,rotation:-26.7,x:232.5,y:87.3}},{t:this.ikNode_7,p:{rotation:0,x:253.6,y:315.6}},{t:this.ikNode_8,p:{rotation:0,x:311.7,y:305.8,regY:48.4,regX:17.4}},{t:this.ikNode_2,p:{rotation:-75.9,x:247.7,y:227.5,regY:105.4,regX:70.3}}]},1).to({state:[{t:this.ikNode_1},{t:this.ikNode_3,p:{regX:21.1,regY:100.3,rotation:-27.9,x:238.6,y:201.8}},{t:this.ikNode_4},{t:this.ikNode_5,p:{rotation:-87.9,x:137.8,y:276.7,regX:21.3,regY:43.9}},{t:this.ikNode_6,p:{regY:27.5,rotation:-27.9,x:229,y:89.4}},{t:this.ikNode_7,p:{rotation:0,x:253.6,y:315.6}},{t:this.ikNode_8,p:{rotation:0,x:311.7,y:305.8,regY:48.4,regX:17.4}},{t:this.ikNode_2,p:{rotation:-79.1,x:248.3,y:229.5,regY:105.4,regX:70.3}}]},1).to({state:[{t:this.ikNode_1},{t:this.ikNode_3,p:{regX:21.1,regY:100.4,rotation:-29,x:237.8,y:203.7}},{t:this.ikNode_4},{t:this.ikNode_5,p:{rotation:-91.4,x:141.4,y:284.3,regX:21.2,regY:44}},{t:this.ikNode_6,p:{regY:27.6,rotation:-29,x:225.7,y:91.7}},{t:this.ikNode_7,p:{rotation:0,x:253.6,y:315.6}},{t:this.ikNode_8,p:{rotation:0,x:311.7,y:305.8,regY:48.4,regX:17.4}},{t:this.ikNode_2,p:{rotation:-82.2,x:248.9,y:231.2,regY:105.4,regX:70.3}}]},1).to({state:[{t:this.ikNode_1},{t:this.ikNode_3,p:{regX:21.1,regY:100.4,rotation:-30.1,x:236.9,y:205.5}},{t:this.ikNode_4},{t:this.ikNode_5,p:{rotation:-94.9,x:145.2,y:291.3,regX:21.2,regY:44}},{t:this.ikNode_6,p:{regY:27.6,rotation:-30.1,x:222.7,y:93.8}},{t:this.ikNode_7,p:{rotation:0,x:253.6,y:315.6}},{t:this.ikNode_8,p:{rotation:0,x:311.7,y:305.8,regY:48.4,regX:17.4}},{t:this.ikNode_2,p:{rotation:-85.4,x:249.6,y:232.6,regY:105.4,regX:70.3}}]},1).to({state:[{t:this.ikNode_1},{t:this.ikNode_3,p:{regX:21.1,regY:100.4,rotation:-31.2,x:236.2,y:207.3}},{t:this.ikNode_4},{t:this.ikNode_5,p:{rotation:-98.4,x:149.2,y:297.9,regX:21.2,regY:43.9}},{t:this.ikNode_6,p:{regY:27.6,rotation:-31.2,x:219.7,y:95.9}},{t:this.ikNode_7,p:{rotation:0,x:253.6,y:315.6}},{t:this.ikNode_8,p:{rotation:0,x:311.7,y:305.8,regY:48.4,regX:17.4}},{t:this.ikNode_2,p:{rotation:-88.6,x:250.3,y:233.9,regY:105.4,regX:70.3}}]},1).to({state:[{t:this.ikNode_1},{t:this.ikNode_3,p:{regX:21.1,regY:100.4,rotation:-32.3,x:235.6,y:208.8}},{t:this.ikNode_4},{t:this.ikNode_5,p:{rotation:-101.9,x:153.6,y:304,regX:21.3,regY:43.9}},{t:this.ikNode_6,p:{regY:27.5,rotation:-32.3,x:216.9,y:97.8}},{t:this.ikNode_7,p:{rotation:0,x:253.6,y:315.6}},{t:this.ikNode_8,p:{rotation:0,x:311.7,y:305.8,regY:48.4,regX:17.4}},{t:this.ikNode_2,p:{rotation:-91.7,x:251.1,y:234.9,regY:105.4,regX:70.3}}]},1).to({state:[{t:this.ikNode_1},{t:this.ikNode_3,p:{regX:21.1,regY:100.4,rotation:-32.3,x:235.6,y:208.8}},{t:this.ikNode_4},{t:this.ikNode_5,p:{rotation:-101.9,x:153.6,y:304,regX:21.3,regY:43.9}},{t:this.ikNode_6,p:{regY:27.5,rotation:-32.3,x:216.9,y:97.8}},{t:this.ikNode_7,p:{rotation:0,x:253.6,y:315.6}},{t:this.ikNode_8,p:{rotation:0,x:311.7,y:305.8,regY:48.4,regX:17.4}},{t:this.ikNode_2,p:{rotation:-91.7,x:251.1,y:234.9,regY:105.4,regX:70.3}}]},1).to({state:[{t:this.ikNode_1},{t:this.ikNode_3,p:{regX:21.1,regY:100.4,rotation:-32.3,x:235.6,y:208.8}},{t:this.ikNode_4},{t:this.ikNode_5,p:{rotation:-101.9,x:153.6,y:304,regX:21.3,regY:43.9}},{t:this.ikNode_6,p:{regY:27.5,rotation:-32.3,x:216.9,y:97.8}},{t:this.ikNode_7,p:{rotation:0,x:253.6,y:315.6}},{t:this.ikNode_8,p:{rotation:0,x:311.7,y:305.8,regY:48.4,regX:17.4}},{t:this.ikNode_2,p:{rotation:-91.7,x:251.1,y:234.9,regY:105.4,regX:70.3}}]},1).to({state:[{t:this.ikNode_1},{t:this.ikNode_3,p:{regX:21.1,regY:100.4,rotation:-32.3,x:235.6,y:208.8}},{t:this.ikNode_4},{t:this.ikNode_5,p:{rotation:-101.9,x:153.6,y:304,regX:21.3,regY:43.9}},{t:this.ikNode_6,p:{regY:27.5,rotation:-32.3,x:216.9,y:97.8}},{t:this.ikNode_7,p:{rotation:0,x:253.6,y:315.6}},{t:this.ikNode_8,p:{rotation:0,x:311.7,y:305.8,regY:48.4,regX:17.4}},{t:this.ikNode_2,p:{rotation:-91.7,x:251.1,y:234.9,regY:105.4,regX:70.3}}]},1).to({state:[{t:this.ikNode_1},{t:this.ikNode_3,p:{regX:21.1,regY:100.4,rotation:-32.3,x:235.6,y:208.8}},{t:this.ikNode_4},{t:this.ikNode_5,p:{rotation:-101.9,x:153.6,y:304,regX:21.3,regY:43.9}},{t:this.ikNode_6,p:{regY:27.5,rotation:-32.3,x:216.9,y:97.8}},{t:this.ikNode_7,p:{rotation:0,x:253.6,y:315.6}},{t:this.ikNode_8,p:{rotation:0,x:311.7,y:305.8,regY:48.4,regX:17.4}},{t:this.ikNode_2,p:{rotation:-91.7,x:251.1,y:234.9,regY:105.4,regX:70.3}}]},1).to({state:[{t:this.ikNode_1},{t:this.ikNode_3,p:{regX:21.1,regY:100.4,rotation:-32.3,x:235.6,y:208.8}},{t:this.ikNode_4},{t:this.ikNode_5,p:{rotation:-101.9,x:153.6,y:304,regX:21.3,regY:43.9}},{t:this.ikNode_6,p:{regY:27.5,rotation:-32.3,x:216.9,y:97.8}},{t:this.ikNode_7,p:{rotation:0,x:253.6,y:315.6}},{t:this.ikNode_8,p:{rotation:0,x:311.7,y:305.8,regY:48.4,regX:17.4}},{t:this.ikNode_2,p:{rotation:-91.7,x:251.1,y:234.9,regY:105.4,regX:70.3}}]},1).to({state:[{t:this.ikNode_1},{t:this.ikNode_3,p:{regX:21.1,regY:100.4,rotation:-32.3,x:235.6,y:208.8}},{t:this.ikNode_4},{t:this.ikNode_5,p:{rotation:-101.9,x:153.5,y:304,regX:21.3,regY:43.9}},{t:this.ikNode_6,p:{regY:27.5,rotation:-32.3,x:216.9,y:97.8}},{t:this.ikNode_7,p:{rotation:0,x:253.6,y:315.6}},{t:this.ikNode_8,p:{rotation:0,x:311.7,y:305.8,regY:48.4,regX:17.4}},{t:this.ikNode_2,p:{rotation:-91.7,x:251.1,y:234.9,regY:105.4,regX:70.3}}]},1).to({state:[{t:this.ikNode_1},{t:this.ikNode_3,p:{regX:21.1,regY:100.4,rotation:-32.3,x:235.6,y:208.8}},{t:this.ikNode_4},{t:this.ikNode_5,p:{rotation:-101.9,x:153.5,y:304,regX:21.3,regY:43.9}},{t:this.ikNode_6,p:{regY:27.5,rotation:-32.3,x:216.9,y:97.8}},{t:this.ikNode_7,p:{rotation:0,x:253.6,y:315.6}},{t:this.ikNode_8,p:{rotation:0,x:311.7,y:305.8,regY:48.4,regX:17.4}},{t:this.ikNode_2,p:{rotation:-91.7,x:251.1,y:234.9,regY:105.4,regX:70.3}}]},1).to({state:[{t:this.ikNode_1},{t:this.ikNode_3,p:{regX:21.1,regY:100.4,rotation:-32.3,x:235.6,y:208.8}},{t:this.ikNode_4},{t:this.ikNode_5,p:{rotation:-101.9,x:153.5,y:304,regX:21.3,regY:43.9}},{t:this.ikNode_6,p:{regY:27.5,rotation:-32.3,x:216.9,y:97.8}},{t:this.ikNode_7,p:{rotation:0,x:253.6,y:315.6}},{t:this.ikNode_8,p:{rotation:0,x:311.7,y:305.8,regY:48.4,regX:17.4}},{t:this.ikNode_2,p:{rotation:-91.7,x:251.1,y:234.9,regY:105.4,regX:70.3}}]},1).to({state:[{t:this.ikNode_1},{t:this.ikNode_3,p:{regX:21.1,regY:100.3,rotation:-32.3,x:235.5,y:208.7}},{t:this.ikNode_4},{t:this.ikNode_5,p:{rotation:-101.9,x:153.5,y:304,regX:21.3,regY:43.9}},{t:this.ikNode_6,p:{regY:27.5,rotation:-32.3,x:216.9,y:97.8}},{t:this.ikNode_7,p:{rotation:0,x:253.6,y:315.6}},{t:this.ikNode_8,p:{rotation:0,x:311.7,y:305.8,regY:48.4,regX:17.4}},{t:this.ikNode_2,p:{rotation:-91.7,x:251.1,y:234.9,regY:105.4,regX:70.3}}]},1).to({state:[{t:this.ikNode_1},{t:this.ikNode_3,p:{regX:21.1,regY:100.3,rotation:-32.3,x:235.5,y:208.7}},{t:this.ikNode_4},{t:this.ikNode_5,p:{rotation:-101.9,x:153.5,y:304,regX:21.3,regY:43.9}},{t:this.ikNode_6,p:{regY:27.5,rotation:-32.3,x:216.9,y:97.7}},{t:this.ikNode_7,p:{rotation:0,x:253.6,y:315.6}},{t:this.ikNode_8,p:{rotation:0,x:311.7,y:305.8,regY:48.4,regX:17.4}},{t:this.ikNode_2,p:{rotation:-91.7,x:251.1,y:234.9,regY:105.4,regX:70.3}}]},1).to({state:[{t:this.ikNode_1},{t:this.ikNode_3,p:{regX:21.1,regY:100.3,rotation:-32.3,x:235.5,y:208.7}},{t:this.ikNode_4},{t:this.ikNode_5,p:{rotation:-101.9,x:153.5,y:304,regX:21.3,regY:43.9}},{t:this.ikNode_6,p:{regY:27.5,rotation:-32.3,x:216.9,y:97.7}},{t:this.ikNode_7,p:{rotation:0,x:253.6,y:315.6}},{t:this.ikNode_8,p:{rotation:0,x:311.7,y:305.8,regY:48.4,regX:17.4}},{t:this.ikNode_2,p:{rotation:-91.7,x:251,y:234.9,regY:105.4,regX:70.3}}]},1).to({state:[{t:this.ikNode_1},{t:this.ikNode_3,p:{regX:21.1,regY:100.3,rotation:-32.3,x:235.5,y:208.7}},{t:this.ikNode_4},{t:this.ikNode_5,p:{rotation:-101.9,x:153.5,y:304,regX:21.3,regY:43.9}},{t:this.ikNode_6,p:{regY:27.5,rotation:-32.3,x:216.9,y:97.7}},{t:this.ikNode_7,p:{rotation:0,x:253.6,y:315.6}},{t:this.ikNode_8,p:{rotation:0,x:311.7,y:305.8,regY:48.4,regX:17.4}},{t:this.ikNode_2,p:{rotation:-91.7,x:251,y:234.9,regY:105.4,regX:70.3}}]},1).to({state:[{t:this.ikNode_1},{t:this.ikNode_3,p:{regX:21.1,regY:100.3,rotation:-32.3,x:235.5,y:208.7}},{t:this.ikNode_4},{t:this.ikNode_5,p:{rotation:-101.9,x:153.5,y:304,regX:21.3,regY:43.9}},{t:this.ikNode_6,p:{regY:27.5,rotation:-32.3,x:216.9,y:97.7}},{t:this.ikNode_7,p:{rotation:0,x:253.6,y:315.6}},{t:this.ikNode_8,p:{rotation:0,x:311.7,y:305.8,regY:48.4,regX:17.4}},{t:this.ikNode_2,p:{rotation:-91.7,x:251,y:234.9,regY:105.4,regX:70.3}}]},1).to({state:[{t:this.ikNode_1},{t:this.ikNode_3,p:{regX:21.1,regY:100.3,rotation:-32.3,x:235.5,y:208.7}},{t:this.ikNode_4},{t:this.ikNode_5,p:{rotation:-101.9,x:153.5,y:304,regX:21.3,regY:43.9}},{t:this.ikNode_6,p:{regY:27.5,rotation:-32.3,x:216.9,y:97.7}},{t:this.ikNode_7,p:{rotation:0,x:253.6,y:315.6}},{t:this.ikNode_8,p:{rotation:0,x:311.7,y:305.8,regY:48.4,regX:17.4}},{t:this.ikNode_2,p:{rotation:-91.7,x:251,y:234.9,regY:105.4,regX:70.3}}]},1).to({state:[{t:this.ikNode_1},{t:this.ikNode_3,p:{regX:21.1,regY:100.3,rotation:-32.3,x:235.5,y:208.7}},{t:this.ikNode_4},{t:this.ikNode_5,p:{rotation:-101.9,x:153.5,y:304,regX:21.3,regY:43.9}},{t:this.ikNode_6,p:{regY:27.5,rotation:-32.3,x:216.9,y:97.7}},{t:this.ikNode_7,p:{rotation:0,x:253.6,y:315.6}},{t:this.ikNode_8,p:{rotation:0,x:311.7,y:305.8,regY:48.4,regX:17.4}},{t:this.ikNode_2,p:{rotation:-91.7,x:251,y:234.9,regY:105.4,regX:70.3}}]},1).to({state:[{t:this.ikNode_1},{t:this.ikNode_3,p:{regX:21.1,regY:100.3,rotation:-32.3,x:235.5,y:208.7}},{t:this.ikNode_4},{t:this.ikNode_5,p:{rotation:-101.9,x:153.5,y:304,regX:21.3,regY:43.9}},{t:this.ikNode_6,p:{regY:27.5,rotation:-32.3,x:216.9,y:97.7}},{t:this.ikNode_7,p:{rotation:0,x:253.6,y:315.6}},{t:this.ikNode_8,p:{rotation:0,x:311.7,y:305.8,regY:48.4,regX:17.4}},{t:this.ikNode_2,p:{rotation:-91.7,x:251,y:234.9,regY:105.4,regX:70.3}}]},1).to({state:[{t:this.ikNode_1},{t:this.ikNode_3,p:{regX:21.1,regY:100.3,rotation:-32.3,x:235.5,y:208.6}},{t:this.ikNode_4},{t:this.ikNode_5,p:{rotation:-101.9,x:153.5,y:304,regX:21.3,regY:43.9}},{t:this.ikNode_6,p:{regY:27.5,rotation:-32.3,x:216.9,y:97.7}},{t:this.ikNode_7,p:{rotation:0,x:253.6,y:315.6}},{t:this.ikNode_8,p:{rotation:0,x:311.7,y:305.8,regY:48.4,regX:17.4}},{t:this.ikNode_2,p:{rotation:-91.7,x:251,y:234.9,regY:105.4,regX:70.3}}]},1).to({state:[{t:this.ikNode_1},{t:this.ikNode_3,p:{regX:21.1,regY:100.3,rotation:-32.3,x:235.5,y:208.6}},{t:this.ikNode_4},{t:this.ikNode_5,p:{rotation:-101.9,x:153.5,y:304,regX:21.3,regY:43.9}},{t:this.ikNode_6,p:{regY:27.5,rotation:-32.3,x:216.9,y:97.7}},{t:this.ikNode_7,p:{rotation:0,x:253.6,y:315.6}},{t:this.ikNode_8,p:{rotation:0,x:311.7,y:305.8,regY:48.4,regX:17.4}},{t:this.ikNode_2,p:{rotation:-91.7,x:251,y:234.8,regY:105.4,regX:70.4}}]},1).to({state:[{t:this.ikNode_1},{t:this.ikNode_3,p:{regX:21.1,regY:100.3,rotation:-32.3,x:235.5,y:208.6}},{t:this.ikNode_4},{t:this.ikNode_5,p:{rotation:-101.9,x:153.5,y:304,regX:21.3,regY:43.9}},{t:this.ikNode_6,p:{regY:27.5,rotation:-32.3,x:216.9,y:97.7}},{t:this.ikNode_7,p:{rotation:0,x:253.6,y:315.6}},{t:this.ikNode_8,p:{rotation:0,x:311.7,y:305.8,regY:48.4,regX:17.4}},{t:this.ikNode_2,p:{rotation:-91.7,x:251,y:234.7,regY:105.4,regX:70.4}}]},1).to({state:[{t:this.ikNode_1},{t:this.ikNode_3,p:{regX:21.1,regY:100.3,rotation:-32.3,x:235.5,y:208.6}},{t:this.ikNode_4},{t:this.ikNode_5,p:{rotation:-101.9,x:153.5,y:303.9,regX:21.3,regY:43.9}},{t:this.ikNode_6,p:{regY:27.5,rotation:-32.3,x:216.9,y:97.7}},{t:this.ikNode_7,p:{rotation:0,x:253.6,y:315.6}},{t:this.ikNode_8,p:{rotation:0,x:311.7,y:305.8,regY:48.4,regX:17.4}},{t:this.ikNode_2,p:{rotation:-91.7,x:251,y:234.7,regY:105.4,regX:70.4}}]},1).to({state:[{t:this.ikNode_1},{t:this.ikNode_3,p:{regX:21.1,regY:100.3,rotation:-32.3,x:235.5,y:208.6}},{t:this.ikNode_4},{t:this.ikNode_5,p:{rotation:-101.9,x:153.5,y:303.9,regX:21.3,regY:43.9}},{t:this.ikNode_6,p:{regY:27.5,rotation:-32.3,x:216.9,y:97.7}},{t:this.ikNode_7,p:{rotation:0,x:253.6,y:315.6}},{t:this.ikNode_8,p:{rotation:0,x:311.7,y:305.8,regY:48.4,regX:17.4}},{t:this.ikNode_2,p:{rotation:-91.7,x:251,y:234.7,regY:105.4,regX:70.4}}]},1).to({state:[{t:this.ikNode_1},{t:this.ikNode_3,p:{regX:21.1,regY:100.3,rotation:-32.3,x:235.5,y:208.6}},{t:this.ikNode_4},{t:this.ikNode_5,p:{rotation:-101.9,x:153.5,y:303.9,regX:21.3,regY:43.9}},{t:this.ikNode_6,p:{regY:27.5,rotation:-32.3,x:216.9,y:97.7}},{t:this.ikNode_7,p:{rotation:0,x:253.6,y:315.6}},{t:this.ikNode_8,p:{rotation:0,x:311.7,y:305.8,regY:48.4,regX:17.4}},{t:this.ikNode_2,p:{rotation:-91.7,x:251,y:234.7,regY:105.4,regX:70.4}}]},1).to({state:[{t:this.ikNode_1},{t:this.ikNode_3,p:{regX:21.1,regY:100.3,rotation:-32.3,x:235.5,y:208.6}},{t:this.ikNode_4},{t:this.ikNode_5,p:{rotation:-101.9,x:153.5,y:303.9,regX:21.3,regY:43.9}},{t:this.ikNode_6,p:{regY:27.5,rotation:-32.3,x:216.9,y:97.7}},{t:this.ikNode_7,p:{rotation:0,x:253.6,y:315.6}},{t:this.ikNode_8,p:{rotation:0,x:311.7,y:305.8,regY:48.4,regX:17.4}},{t:this.ikNode_2,p:{rotation:-91.7,x:251,y:234.7,regY:105.4,regX:70.4}}]},1).to({state:[{t:this.ikNode_1},{t:this.ikNode_3,p:{regX:21.1,regY:100.3,rotation:-32.3,x:235.5,y:208.6}},{t:this.ikNode_4},{t:this.ikNode_5,p:{rotation:-101.9,x:153.5,y:303.9,regX:21.3,regY:43.9}},{t:this.ikNode_6,p:{regY:27.5,rotation:-32.3,x:216.9,y:97.7}},{t:this.ikNode_7,p:{rotation:0,x:253.6,y:315.6}},{t:this.ikNode_8,p:{rotation:0,x:311.7,y:305.8,regY:48.4,regX:17.4}},{t:this.ikNode_2,p:{rotation:-91.7,x:251,y:234.7,regY:105.4,regX:70.4}}]},1).to({state:[{t:this.ikNode_1},{t:this.ikNode_3,p:{regX:21.1,regY:100.3,rotation:-32.3,x:235.5,y:208.6}},{t:this.ikNode_4},{t:this.ikNode_5,p:{rotation:-101.9,x:153.5,y:303.9,regX:21.3,regY:43.9}},{t:this.ikNode_6,p:{regY:27.5,rotation:-32.3,x:216.9,y:97.7}},{t:this.ikNode_7,p:{rotation:0,x:253.6,y:315.6}},{t:this.ikNode_8,p:{rotation:0,x:311.7,y:305.8,regY:48.4,regX:17.4}},{t:this.ikNode_2,p:{rotation:-91.7,x:251,y:234.7,regY:105.4,regX:70.4}}]},1).to({state:[{t:this.ikNode_1},{t:this.ikNode_3,p:{regX:21.1,regY:100.3,rotation:-32.3,x:235.5,y:208.6}},{t:this.ikNode_4},{t:this.ikNode_5,p:{rotation:-101.9,x:153.5,y:303.9,regX:21.3,regY:43.9}},{t:this.ikNode_6,p:{regY:27.5,rotation:-32.3,x:216.9,y:97.7}},{t:this.ikNode_7,p:{rotation:0,x:253.6,y:315.6}},{t:this.ikNode_8,p:{rotation:0,x:311.7,y:305.8,regY:48.4,regX:17.4}},{t:this.ikNode_2,p:{rotation:-91.7,x:251,y:234.7,regY:105.4,regX:70.4}}]},1).to({state:[{t:this.ikNode_1},{t:this.ikNode_3,p:{regX:21.1,regY:100.3,rotation:-32.3,x:235.5,y:208.6}},{t:this.ikNode_4},{t:this.ikNode_5,p:{rotation:-101.9,x:153.5,y:303.9,regX:21.3,regY:43.9}},{t:this.ikNode_6,p:{regY:27.5,rotation:-32.3,x:216.9,y:97.7}},{t:this.ikNode_7,p:{rotation:0,x:253.6,y:315.6}},{t:this.ikNode_8,p:{rotation:0,x:311.7,y:305.8,regY:48.4,regX:17.4}},{t:this.ikNode_2,p:{rotation:-91.7,x:251,y:234.7,regY:105.4,regX:70.4}}]},1).to({state:[{t:this.ikNode_1},{t:this.ikNode_3,p:{regX:21.1,regY:100.3,rotation:-32.3,x:235.5,y:208.6}},{t:this.ikNode_4},{t:this.ikNode_5,p:{rotation:-101.9,x:153.5,y:303.9,regX:21.3,regY:43.9}},{t:this.ikNode_6,p:{regY:27.5,rotation:-32.3,x:216.9,y:97.7}},{t:this.ikNode_7,p:{rotation:0,x:253.6,y:315.6}},{t:this.ikNode_8,p:{rotation:0,x:311.7,y:305.8,regY:48.4,regX:17.4}},{t:this.ikNode_2,p:{rotation:-91.7,x:251,y:234.7,regY:105.4,regX:70.4}}]},1).to({state:[{t:this.ikNode_1},{t:this.ikNode_3,p:{regX:21.1,regY:100.3,rotation:-32.3,x:235.5,y:208.6}},{t:this.ikNode_4},{t:this.ikNode_5,p:{rotation:-101.9,x:153.5,y:303.9,regX:21.3,regY:43.9}},{t:this.ikNode_6,p:{regY:27.5,rotation:-32.3,x:216.9,y:97.7}},{t:this.ikNode_7,p:{rotation:0,x:253.6,y:315.6}},{t:this.ikNode_8,p:{rotation:0,x:311.7,y:305.8,regY:48.4,regX:17.4}},{t:this.ikNode_2,p:{rotation:-91.7,x:251,y:234.7,regY:105.4,regX:70.4}}]},1).to({state:[{t:this.ikNode_1},{t:this.ikNode_3,p:{regX:21.1,regY:100.3,rotation:-32.3,x:235.5,y:208.6}},{t:this.ikNode_4},{t:this.ikNode_5,p:{rotation:-101.9,x:153.5,y:303.9,regX:21.3,regY:43.9}},{t:this.ikNode_6,p:{regY:27.5,rotation:-32.3,x:216.9,y:97.7}},{t:this.ikNode_7,p:{rotation:0,x:253.6,y:315.6}},{t:this.ikNode_8,p:{rotation:0,x:311.7,y:305.8,regY:48.4,regX:17.4}},{t:this.ikNode_2,p:{rotation:-91.7,x:251,y:234.7,regY:105.4,regX:70.4}}]},1).to({state:[{t:this.ikNode_1},{t:this.ikNode_3,p:{regX:21.1,regY:100.3,rotation:-30.1,x:236.2,y:207.2}},{t:this.ikNode_4},{t:this.ikNode_5,p:{rotation:-97.8,x:148.5,y:295.9,regX:21.2,regY:43.9}},{t:this.ikNode_6,p:{regY:27.6,rotation:-30.1,x:221.9,y:95.8}},{t:this.ikNode_7,p:{rotation:-0.1,x:253.7,y:315.5}},{t:this.ikNode_8,p:{rotation:0.2,x:311.4,y:305.9,regY:48.4,regX:17.4}},{t:this.ikNode_2,p:{rotation:-87.6,x:250.7,y:234,regY:105.4,regX:70.3}}]},1).to({state:[{t:this.ikNode_1},{t:this.ikNode_3,p:{regX:21.1,regY:100.4,rotation:-27.8,x:236.9,y:205.8}},{t:this.ikNode_4},{t:this.ikNode_5,p:{rotation:-93.6,x:143.9,y:287.3,regX:21.2,regY:43.9}},{t:this.ikNode_6,p:{regY:27.6,rotation:-27.8,x:227,y:93.8}},{t:this.ikNode_7,p:{rotation:-0.1,x:253.8,y:315.5}},{t:this.ikNode_8,p:{rotation:0.4,x:311.1,y:306,regY:48.4,regX:17.4}},{t:this.ikNode_2,p:{rotation:-83.4,x:250.4,y:233,regY:105.4,regX:70.3}}]},1).to({state:[{t:this.ikNode_1},{t:this.ikNode_3,p:{regX:21,regY:100.4,rotation:-25.5,x:237.8,y:204.3}},{t:this.ikNode_4},{t:this.ikNode_5,p:{rotation:-89.5,x:140,y:278.4,regX:21.2,regY:43.9}},{t:this.ikNode_6,p:{regY:27.6,rotation:-25.5,x:232.4,y:91.9}},{t:this.ikNode_7,p:{rotation:-0.2,x:253.9,y:315.6}},{t:this.ikNode_8,p:{rotation:0.6,x:310.8,y:306.1,regY:48.4,regX:17.4}},{t:this.ikNode_2,p:{rotation:-79.2,x:250.1,y:231.9,regY:105.4,regX:70.3}}]},1).to({state:[{t:this.ikNode_1},{t:this.ikNode_3,p:{regX:21,regY:100.4,rotation:-23.3,x:238.8,y:202.5}},{t:this.ikNode_4},{t:this.ikNode_5,p:{rotation:-85.3,x:136.7,y:269,regX:21.3,regY:43.9}},{t:this.ikNode_6,p:{regY:27.6,rotation:-23.3,x:237.9,y:90}},{t:this.ikNode_7,p:{rotation:-0.2,x:254,y:315.6}},{t:this.ikNode_8,p:{rotation:0.8,x:310.5,y:306.3,regY:48.4,regX:17.4}},{t:this.ikNode_2,p:{rotation:-75.1,x:249.9,y:230.7,regY:105.4,regX:70.3}}]},1).to({state:[{t:this.ikNode_1},{t:this.ikNode_3,p:{regX:21.1,regY:100.4,rotation:-21,x:240.3,y:200.6}},{t:this.ikNode_4},{t:this.ikNode_5,p:{rotation:-81.2,x:134,y:259.5,regX:21.2,regY:43.9}},{t:this.ikNode_6,p:{regY:27.6,rotation:-21,x:243.6,y:88.1}},{t:this.ikNode_7,p:{rotation:-0.3,x:254.1,y:315.6}},{t:this.ikNode_8,p:{rotation:1,x:310.3,y:306.4,regY:48.4,regX:17.4}},{t:this.ikNode_2,p:{rotation:-70.9,x:249.7,y:229.3,regY:105.4,regX:70.3}}]},1).to({state:[{t:this.ikNode_1},{t:this.ikNode_3,p:{regX:21.1,regY:100.4,rotation:-18.8,x:241.7,y:198.5}},{t:this.ikNode_4},{t:this.ikNode_5,p:{rotation:-77,x:131.9,y:249.6,regX:21.2,regY:43.9}},{t:this.ikNode_6,p:{regY:27.6,rotation:-18.8,x:249.6,y:86.3}},{t:this.ikNode_7,p:{rotation:-0.4,x:254.2,y:315.7}},{t:this.ikNode_8,p:{rotation:1.2,x:309.9,y:306.5,regY:48.4,regX:17.4}},{t:this.ikNode_2,p:{rotation:-66.8,x:249.5,y:227.8,regY:105.3,regX:70.4}}]},1).to({state:[{t:this.ikNode_1},{t:this.ikNode_3,p:{regX:21.1,regY:100.4,rotation:-16.5,x:243.6,y:196.4}},{t:this.ikNode_4},{t:this.ikNode_5,p:{rotation:-72.9,x:130.7,y:239.4,regX:21.2,regY:43.9}},{t:this.ikNode_6,p:{regY:27.6,rotation:-16.5,x:255.9,y:84.5}},{t:this.ikNode_7,p:{rotation:-0.4,x:254.3,y:315.7}},{t:this.ikNode_8,p:{rotation:1.4,x:309.7,y:306.8,regY:48.5,regX:17.4}},{t:this.ikNode_2,p:{rotation:-62.6,x:249.4,y:226.3,regY:105.3,regX:70.3}}]},1).to({state:[{t:this.ikNode_1},{t:this.ikNode_3,p:{regX:21.1,regY:100.4,rotation:-14.2,x:245.9,y:194.1}},{t:this.ikNode_4},{t:this.ikNode_5,p:{rotation:-68.7,x:130.1,y:229,regX:21.2,regY:43.9}},{t:this.ikNode_6,p:{regY:27.6,rotation:-14.2,x:262.5,y:82.9}},{t:this.ikNode_7,p:{rotation:-0.5,x:254.4,y:315.7}},{t:this.ikNode_8,p:{rotation:1.6,x:309.4,y:306.8,regY:48.4,regX:17.4}},{t:this.ikNode_2,p:{rotation:-58.5,x:249.5,y:224.5,regY:105.4,regX:70.3}}]},1).to({state:[{t:this.ikNode_1},{t:this.ikNode_3,p:{regX:21,regY:100.4,rotation:-12,x:248.3,y:191.9}},{t:this.ikNode_4},{t:this.ikNode_5,p:{rotation:-64.6,x:130.2,y:218.4,regX:21.2,regY:43.9}},{t:this.ikNode_6,p:{regY:27.6,rotation:-12,x:269.5,y:81.4}},{t:this.ikNode_7,p:{rotation:-0.5,x:254.5,y:315.7}},{t:this.ikNode_8,p:{rotation:1.8,x:309.1,y:306.8,regY:48.4,regX:17.4}},{t:this.ikNode_2,p:{rotation:-54.3,x:249.7,y:222.7,regY:105.4,regX:70.3}}]},1).to({state:[{t:this.ikNode_1},{t:this.ikNode_3,p:{regX:21.1,regY:100.4,rotation:-9.7,x:251.5,y:189.7}},{t:this.ikNode_4},{t:this.ikNode_5,p:{rotation:-60.4,x:131.2,y:207.7,regX:21.3,regY:43.9}},{t:this.ikNode_6,p:{regY:27.6,rotation:-9.7,x:276.9,y:80.1}},{t:this.ikNode_7,p:{rotation:-0.6,x:254.6,y:315.8}},{t:this.ikNode_8,p:{rotation:2,x:308.8,y:306.9,regY:48.4,regX:17.4}},{t:this.ikNode_2,p:{rotation:-50.2,x:250,y:220.6,regY:105.3,regX:70.3}}]},1).to({state:[{t:this.ikNode_1},{t:this.ikNode_3,p:{regX:21.1,regY:100.4,rotation:-7.5,x:255,y:187.6}},{t:this.ikNode_4},{t:this.ikNode_5,p:{rotation:-56.3,x:133,y:197.1,regX:21.2,regY:43.9}},{t:this.ikNode_6,p:{regY:27.6,rotation:-7.5,x:284.7,y:79.1}},{t:this.ikNode_7,p:{rotation:-0.7,x:254.7,y:315.8}},{t:this.ikNode_8,p:{rotation:2.2,x:308.5,y:307.1,regY:48.4,regX:17.4}},{t:this.ikNode_2,p:{rotation:-46,x:250.6,y:218.6,regY:105.4,regX:70.3}}]},1).to({state:[{t:this.ikNode_1},{t:this.ikNode_3,p:{regX:21.1,regY:100.4,rotation:-5.2,x:258.9,y:185.8}},{t:this.ikNode_4},{t:this.ikNode_5,p:{rotation:-52.1,x:135.5,y:186.5,regX:21.2,regY:43.9}},{t:this.ikNode_6,p:{regY:27.6,rotation:-5.2,x:292.7,y:78.5}},{t:this.ikNode_7,p:{rotation:-0.7,x:254.8,y:315.8}},{t:this.ikNode_8,p:{rotation:2.5,x:308.4,y:307.2,regY:48.4,regX:17.5}},{t:this.ikNode_2,p:{rotation:-41.8,x:251.3,y:216.5,regY:105.4,regX:70.3}}]},1).to({state:[{t:this.ikNode_1},{t:this.ikNode_3,p:{regX:21.1,regY:100.3,rotation:-2.9,x:263.1,y:184.1}},{t:this.ikNode_4},{t:this.ikNode_5,p:{rotation:-48,x:139,y:176.1,regX:21.3,regY:43.9}},{t:this.ikNode_6,p:{regY:27.6,rotation:-2.9,x:301.2,y:78.4}},{t:this.ikNode_7,p:{rotation:-0.8,x:254.9,y:315.8}},{t:this.ikNode_8,p:{rotation:2.7,x:308,y:307.3,regY:48.4,regX:17.4}},{t:this.ikNode_2,p:{rotation:-37.7,x:252.2,y:214.3,regY:105.4,regX:70.3}}]},1).to({state:[{t:this.ikNode_1},{t:this.ikNode_3,p:{regX:21.1,regY:100.4,rotation:-0.7,x:267.6,y:183.2}},{t:this.ikNode_4},{t:this.ikNode_5,p:{rotation:-43.8,x:143.2,y:166.1,regX:21.2,regY:44}},{t:this.ikNode_6,p:{regY:27.6,rotation:-0.7,x:309.8,y:78.9}},{t:this.ikNode_7,p:{rotation:-0.9,x:255,y:315.9}},{t:this.ikNode_8,p:{rotation:2.9,x:307.8,y:307.4,regY:48.4,regX:17.5}},{t:this.ikNode_2,p:{rotation:-33.5,x:253.4,y:212.3,regY:105.4,regX:70.3}}]},1).to({state:[{t:this.ikNode_1},{t:this.ikNode_3,p:{regX:21,regY:100.4,rotation:1.6,x:272,y:182.5}},{t:this.ikNode_4},{t:this.ikNode_5,p:{rotation:-39.7,x:148.1,y:156.1,regX:21.2,regY:43.9}},{t:this.ikNode_6,p:{regY:27.6,rotation:1.6,x:318.4,y:80.1}},{t:this.ikNode_7,p:{rotation:-0.9,x:255.1,y:315.9}},{t:this.ikNode_8,p:{rotation:3.1,x:307.3,y:307.7,regY:48.5,regX:17.4}},{t:this.ikNode_2,p:{rotation:-29.4,x:254.8,y:210.4,regY:105.4,regX:70.3}}]},1).to({state:[{t:this.ikNode_1},{t:this.ikNode_3,p:{regX:21.1,regY:100.3,rotation:3.8,x:276.6,y:182.4}},{t:this.ikNode_4},{t:this.ikNode_5,p:{rotation:-35.5,x:153.9,y:146.8,regX:21.2,regY:43.9}},{t:this.ikNode_6,p:{regY:27.6,rotation:3.8,x:327,y:81.9}},{t:this.ikNode_7,p:{rotation:-1,x:255.2,y:315.9}},{t:this.ikNode_8,p:{rotation:3.3,x:307.1,y:307.7,regY:48.4,regX:17.4}},{t:this.ikNode_2,p:{rotation:-25.2,x:256.2,y:208.6,regY:105.4,regX:70.3}}]},1).to({state:[{t:this.ikNode_1},{t:this.ikNode_3,p:{regX:21,regY:100.4,rotation:6.1,x:280.8,y:182.7}},{t:this.ikNode_4},{t:this.ikNode_5,p:{rotation:-31.4,x:160.2,y:137.9,regX:21.2,regY:43.9}},{t:this.ikNode_6,p:{regY:27.6,rotation:6.1,x:335.1,y:84.3}},{t:this.ikNode_7,p:{rotation:-1,x:255.3,y:316}},{t:this.ikNode_8,p:{rotation:3.5,x:306.8,y:307.8,regY:48.4,regX:17.4}},{t:this.ikNode_2,p:{rotation:-21.1,x:257.7,y:207.1,regY:105.4,regX:70.2}}]},1).to({state:[{t:this.ikNode_1},{t:this.ikNode_3,p:{regX:21.1,regY:100.4,rotation:8.3,x:284.9,y:183.5}},{t:this.ikNode_4},{t:this.ikNode_5,p:{rotation:-27.2,x:167,y:129.6,regX:21.2,regY:43.9}},{t:this.ikNode_6,p:{regY:27.6,rotation:8.3,x:343,y:87.1}},{t:this.ikNode_7,p:{rotation:-1.1,x:255.4,y:315.9}},{t:this.ikNode_8,p:{rotation:3.7,x:306.5,y:307.9,regY:48.4,regX:17.4}},{t:this.ikNode_2,p:{rotation:-16.9,x:259.6,y:205.6,regY:105.4,regX:70.4}}]},1).to({state:[{t:this.ikNode_1},{t:this.ikNode_3,p:{regX:21.1,regY:100.4,rotation:10.6,x:288.5,y:184.4}},{t:this.ikNode_4},{t:this.ikNode_5,p:{rotation:-23,x:174.4,y:122.1,regX:21.2,regY:44}},{t:this.ikNode_6,p:{regY:27.5,rotation:10.6,x:350.4,y:90.4}},{t:this.ikNode_7,p:{rotation:-1.2,x:255.5,y:316}},{t:this.ikNode_8,p:{rotation:3.9,x:306.2,y:308.2,regY:48.5,regX:17.4}},{t:this.ikNode_2,p:{rotation:-12.8,x:261.1,y:204.4,regY:105.4,regX:70.3}}]},1).to({state:[{t:this.ikNode_1},{t:this.ikNode_3,p:{regX:21.1,regY:100.4,rotation:12.9,x:291.8,y:185.6}},{t:this.ikNode_4},{t:this.ikNode_5,p:{rotation:-18.9,x:182.2,y:114.9,regX:21.2,regY:43.9}},{t:this.ikNode_6,p:{regY:27.6,rotation:12.9,x:357.2,y:94.2}},{t:this.ikNode_7,p:{rotation:-1.2,x:255.7,y:316}},{t:this.ikNode_8,p:{rotation:4.1,x:305.9,y:308.1,regY:48.4,regX:17.4}},{t:this.ikNode_2,p:{rotation:-8.6,x:262.7,y:203.4,regY:105.4,regX:70.3}}]},1).to({state:[{t:this.ikNode_1},{t:this.ikNode_3,p:{regX:21.1,regY:100.4,rotation:15.1,x:294.7,y:186.8}},{t:this.ikNode_4},{t:this.ikNode_5,p:{rotation:-14.7,x:190.4,y:108.5,regX:21.2,regY:43.9}},{t:this.ikNode_6,p:{regY:27.6,rotation:15.1,x:363.7,y:98.1}},{t:this.ikNode_7,p:{rotation:-1.3,x:255.8,y:316}},{t:this.ikNode_8,p:{rotation:4.3,x:305.7,y:308.2,regY:48.4,regX:17.4}},{t:this.ikNode_2,p:{rotation:-4.4,x:264.1,y:202.6,regY:105.4,regX:70.2}}]},1).to({state:[{t:this.ikNode_1},{t:this.ikNode_3,p:{regX:21.1,regY:100.4,rotation:17.4,x:297.2,y:188.2}},{t:this.ikNode_4},{t:this.ikNode_5,p:{rotation:-10.6,x:198.9,y:102.7,regX:21.2,regY:43.9}},{t:this.ikNode_6,p:{regY:27.6,rotation:17.4,x:369.6,y:102.2}},{t:this.ikNode_7,p:{rotation:-1.3,x:255.9,y:316.1}},{t:this.ikNode_8,p:{rotation:4.5,x:305.3,y:308.3,regY:48.4,regX:17.4}},{t:this.ikNode_2,p:{rotation:-0.3,x:265.7,y:201.9,regY:105.4,regX:70.3}}]},1).to({state:[{t:this.ikNode_1},{t:this.ikNode_3,p:{regX:21.1,regY:100.3,rotation:19.6,x:299.4,y:189.4}},{t:this.ikNode_4},{t:this.ikNode_5,p:{rotation:-6.4,x:207.6,y:97.6,regX:21.2,regY:43.9}},{t:this.ikNode_6,p:{regY:27.6,rotation:19.6,x:375.2,y:106.4}},{t:this.ikNode_7,p:{rotation:-1.4,x:255.9,y:316.1}},{t:this.ikNode_8,p:{rotation:4.7,x:305.1,y:308.6,regY:48.5,regX:17.5}},{t:this.ikNode_2,p:{rotation:3.9,x:267.1,y:201.4,regY:105.4,regX:70.3}}]},1).to({state:[{t:this.ikNode_1},{t:this.ikNode_3,p:{regX:21.1,regY:100.4,rotation:21.9,x:301.2,y:190.8}},{t:this.ikNode_4},{t:this.ikNode_5,p:{rotation:-2.3,x:216.6,y:93.1,regX:21.2,regY:43.9}},{t:this.ikNode_6,p:{regY:27.6,rotation:21.9,x:380.3,y:110.8}},{t:this.ikNode_7,p:{rotation:-1.5,x:256.1,y:316.1}},{t:this.ikNode_8,p:{rotation:4.9,x:304.8,y:308.5,regY:48.4,regX:17.4}},{t:this.ikNode_2,p:{rotation:8,x:268.4,y:201.1,regY:105.4,regX:70.3}}]},1).to({state:[{t:this.ikNode_1},{t:this.ikNode_3,p:{regX:21.1,regY:100.4,rotation:24.2,x:302.9,y:192}},{t:this.ikNode_4},{t:this.ikNode_5,p:{rotation:1.9,x:225.7,y:89.4,regX:21.2,regY:43.9}},{t:this.ikNode_6,p:{regY:27.6,rotation:24.2,x:385,y:115.2}},{t:this.ikNode_7,p:{rotation:-1.5,x:256.2,y:316.1}},{t:this.ikNode_8,p:{rotation:5.1,x:304.6,y:308.6,regY:48.4,regX:17.5}},{t:this.ikNode_2,p:{rotation:12.2,x:269.5,y:200.7,regY:105.4,regX:70.3}}]},1).to({state:[{t:this.ikNode_1},{t:this.ikNode_3,p:{regX:21.1,regY:100.3,rotation:26.4,x:304.4,y:193.2}},{t:this.ikNode_4},{t:this.ikNode_5,p:{rotation:6,x:235,y:86.3,regX:21.2,regY:43.9}},{t:this.ikNode_6,p:{regY:27.6,rotation:26.4,x:389.3,y:119.7}},{t:this.ikNode_7,p:{rotation:-1.6,x:256.3,y:316.1}},{t:this.ikNode_8,p:{rotation:5.3,x:304.1,y:308.7,regY:48.4,regX:17.4}},{t:this.ikNode_2,p:{rotation:16.3,x:270.7,y:200.5,regY:105.4,regX:70.3}}]},1).to({state:[{t:this.ikNode_1},{t:this.ikNode_3,p:{regX:21.1,regY:100.4,rotation:28.7,x:305.5,y:194.4}},{t:this.ikNode_4},{t:this.ikNode_5,p:{rotation:10.2,x:244.3,y:83.9,regX:21.2,regY:43.9}},{t:this.ikNode_6,p:{regY:27.6,rotation:28.7,x:393.4,y:124.3}},{t:this.ikNode_7,p:{rotation:-1.7,x:256.4,y:316.1}},{t:this.ikNode_8,p:{rotation:5.5,x:303.9,y:308.8,regY:48.4,regX:17.4}},{t:this.ikNode_2,p:{rotation:20.5,x:271.7,y:200.4,regY:105.4,regX:70.3}}]},1).to({state:[{t:this.ikNode_1},{t:this.ikNode_3,p:{regX:21.1,regY:100.4,rotation:30.9,x:306.7,y:195.5}},{t:this.ikNode_4},{t:this.ikNode_5,p:{rotation:14.3,x:253.8,y:82.1,regX:21.2,regY:43.9}},{t:this.ikNode_6,p:{regY:27.6,rotation:30.9,x:397.2,y:128.8}},{t:this.ikNode_7,p:{rotation:-1.7,x:256.4,y:316.1}},{t:this.ikNode_8,p:{rotation:5.7,x:303.5,y:308.9,regY:48.4,regX:17.4}},{t:this.ikNode_2,p:{rotation:24.6,x:272.6,y:200.2,regY:105.4,regX:70.2}}]},1).to({state:[{t:this.ikNode_1},{t:this.ikNode_3,p:{regX:21.1,regY:100.4,rotation:28.4,x:305.4,y:194.3}},{t:this.ikNode_4},{t:this.ikNode_5,p:{rotation:9.7,x:243.2,y:84.1,regX:21.2,regY:43.9}},{t:this.ikNode_6,p:{regY:27.6,rotation:28.4,x:392.9,y:123.7}},{t:this.ikNode_7,p:{rotation:-1.6,x:256.3,y:316.1}},{t:this.ikNode_8,p:{rotation:5.5,x:303.9,y:308.8,regY:48.4,regX:17.4}},{t:this.ikNode_2,p:{rotation:20,x:271.6,y:200.2,regY:105.3,regX:70.3}}]},1).to({state:[{t:this.ikNode_1},{t:this.ikNode_3,p:{regX:21.1,regY:100.4,rotation:25.9,x:304,y:193}},{t:this.ikNode_4},{t:this.ikNode_5,p:{rotation:5,x:232.8,y:87,regX:21.2,regY:43.9}},{t:this.ikNode_6,p:{regY:27.6,rotation:25.9,x:388.3,y:118.7}},{t:this.ikNode_7,p:{rotation:-1.6,x:256.2,y:316.1}},{t:this.ikNode_8,p:{rotation:5.3,x:304.2,y:308.7,regY:48.4,regX:17.4}},{t:this.ikNode_2,p:{rotation:15.3,x:270.4,y:200.6,regY:105.4,regX:70.3}}]},1).to({state:[{t:this.ikNode_1},{t:this.ikNode_3,p:{regX:21.1,regY:100.4,rotation:23.4,x:302.3,y:191.6}},{t:this.ikNode_4},{t:this.ikNode_5,p:{rotation:0.4,x:222.4,y:90.7,regX:21.2,regY:43.9}},{t:this.ikNode_6,p:{regY:27.6,rotation:23.4,x:383.4,y:113.6}},{t:this.ikNode_7,p:{rotation:-1.5,x:256.1,y:316.1}},{t:this.ikNode_8,p:{rotation:5,x:304.6,y:308.6,regY:48.4,regX:17.4}},{t:this.ikNode_2,p:{rotation:10.7,x:269.1,y:200.9,regY:105.4,regX:70.3}}]},1).to({state:[{t:this.ikNode_1},{t:this.ikNode_3,p:{regX:21.1,regY:100.4,rotation:20.9,x:300.4,y:190.1}},{t:this.ikNode_4},{t:this.ikNode_5,p:{rotation:-4.3,x:212.3,y:95.2,regX:21.3,regY:43.9}},{t:this.ikNode_6,p:{regY:27.6,rotation:20.9,x:377.9,y:108.7}},{t:this.ikNode_7,p:{rotation:-1.4,x:256,y:316.1}},{t:this.ikNode_8,p:{rotation:4.8,x:304.9,y:308.5,regY:48.4,regX:17.4}},{t:this.ikNode_2,p:{rotation:6,x:267.8,y:201.2,regY:105.4,regX:70.3}}]},1).to({state:[{t:this.ikNode_1},{t:this.ikNode_3,p:{regX:21,regY:100.4,rotation:18.3,x:298,y:188.7}},{t:this.ikNode_4},{t:this.ikNode_5,p:{rotation:-8.9,x:202.4,y:100.6,regX:21.2,regY:43.9}},{t:this.ikNode_6,p:{regY:27.6,rotation:18.3,x:371.9,y:103.9}},{t:this.ikNode_7,p:{rotation:-1.4,x:255.9,y:316.1}},{t:this.ikNode_8,p:{rotation:4.6,x:305.2,y:308.4,regY:48.4,regX:17.4}},{t:this.ikNode_2,p:{rotation:1.4,x:266.4,y:201.8,regY:105.4,regX:70.3}}]},1).to({state:[{t:this.ikNode_1},{t:this.ikNode_3,p:{regX:21.1,regY:100.4,rotation:15.8,x:295.4,y:187.2}},{t:this.ikNode_4},{t:this.ikNode_5,p:{rotation:-13.6,x:192.8,y:106.7,regX:21.2,regY:43.9}},{t:this.ikNode_6,p:{regY:27.6,rotation:15.8,x:365.5,y:99.2}},{t:this.ikNode_7,p:{rotation:-1.3,x:255.8,y:316}},{t:this.ikNode_8,p:{rotation:4.4,x:305.6,y:308.2,regY:48.4,regX:17.4}},{t:this.ikNode_2,p:{rotation:-3.3,x:264.7,y:202.4,regY:105.4,regX:70.3}}]},1).to({state:[{t:this.ikNode_1},{t:this.ikNode_3,p:{regX:21.1,regY:100.4,rotation:13.3,x:292.3,y:185.8}},{t:this.ikNode_4},{t:this.ikNode_5,p:{rotation:-18.2,x:183.5,y:113.8,regX:21.2,regY:43.9}},{t:this.ikNode_6,p:{regY:27.6,rotation:13.3,x:358.4,y:94.9}},{t:this.ikNode_7,p:{rotation:-1.2,x:255.7,y:316}},{t:this.ikNode_8,p:{rotation:4.1,x:305.8,y:308.1,regY:48.4,regX:17.4}},{t:this.ikNode_2,p:{rotation:-7.9,x:263,y:203.3,regY:105.4,regX:70.3}}]},1).to({state:[{t:this.ikNode_1},{t:this.ikNode_3,p:{regX:21.1,regY:100.4,rotation:10.8,x:288.7,y:184.5}},{t:this.ikNode_4},{t:this.ikNode_5,p:{rotation:-22.9,x:174.8,y:121.7,regX:21.2,regY:44}},{t:this.ikNode_6,p:{regY:27.6,rotation:10.8,x:350.8,y:90.7}},{t:this.ikNode_7,p:{rotation:-1.2,x:255.6,y:316}},{t:this.ikNode_8,p:{rotation:3.9,x:306.2,y:308.1,regY:48.5,regX:17.4}},{t:this.ikNode_2,p:{rotation:-12.6,x:261.2,y:204.3,regY:105.4,regX:70.3}}]},1).to({state:[{t:this.ikNode_1},{t:this.ikNode_3,p:{regX:21,regY:100.4,rotation:8.2,x:284.5,y:183.4}},{t:this.ikNode_4},{t:this.ikNode_5,p:{rotation:-27.5,x:166.6,y:130.2,regX:21.3,regY:43.9}},{t:this.ikNode_6,p:{regY:27.6,rotation:8.2,x:342.5,y:87}},{t:this.ikNode_7,p:{rotation:-1.1,x:255.5,y:315.9}},{t:this.ikNode_8,p:{rotation:3.7,x:306.5,y:307.9,regY:48.4,regX:17.4}},{t:this.ikNode_2,p:{rotation:-17.2,x:259.3,y:205.7,regY:105.4,regX:70.3}}]},1).to({state:[{t:this.ikNode_1},{t:this.ikNode_3,p:{regX:21.1,regY:100.4,rotation:5.7,x:280,y:182.7}},{t:this.ikNode_4},{t:this.ikNode_5,p:{rotation:-32.2,x:159,y:139.7,regX:21.2,regY:44}},{t:this.ikNode_6,p:{regY:27.6,rotation:5.7,x:333.7,y:83.8}},{t:this.ikNode_7,p:{rotation:-1,x:255.3,y:316}},{t:this.ikNode_8,p:{rotation:3.4,x:306.8,y:307.8,regY:48.4,regX:17.4}},{t:this.ikNode_2,p:{rotation:-21.9,x:257.5,y:207.3,regY:105.4,regX:70.3}}]},1).to({state:[{t:this.ikNode_1},{t:this.ikNode_3,p:{regX:21.1,regY:100.4,rotation:3.2,x:275.2,y:182.5}},{t:this.ikNode_4},{t:this.ikNode_5,p:{rotation:-36.9,x:152.1,y:149.6,regX:21.3,regY:43.9}},{t:this.ikNode_6,p:{regY:27.6,rotation:3.2,x:324.5,y:81.3}},{t:this.ikNode_7,p:{rotation:-1,x:255.2,y:315.9}},{t:this.ikNode_8,p:{rotation:3.2,x:307.2,y:307.6,regY:48.4,regX:17.4}},{t:this.ikNode_2,p:{rotation:-26.5,x:255.8,y:209,regY:105.4,regX:70.3}}]},1).to({state:[{t:this.ikNode_1},{t:this.ikNode_3,p:{regX:21.1,regY:100.4,rotation:0.7,x:270.2,y:182.8}},{t:this.ikNode_4},{t:this.ikNode_5,p:{rotation:-41.5,x:146,y:160.2,regX:21.3,regY:43.9}},{t:this.ikNode_6,p:{regY:27.6,rotation:0.7,x:314.8,y:79.6}},{t:this.ikNode_7,p:{rotation:-0.9,x:255.1,y:315.9}},{t:this.ikNode_8,p:{rotation:3,x:307.6,y:307.5,regY:48.4,regX:17.5}},{t:this.ikNode_2,p:{rotation:-31.2,x:254.2,y:211.1,regY:105.4,regX:70.3}}]},1).to({state:[{t:this.ikNode_1},{t:this.ikNode_3,p:{regX:21.1,regY:100.4,rotation:-1.8,x:265.1,y:183.7}},{t:this.ikNode_4},{t:this.ikNode_5,p:{rotation:-46.2,x:140.8,y:171.5,regX:21.2,regY:43.9}},{t:this.ikNode_6,p:{regY:27.6,rotation:-1.8,x:305.2,y:78.6}},{t:this.ikNode_7,p:{rotation:-0.8,x:255,y:315.8}},{t:this.ikNode_8,p:{rotation:2.7,x:308,y:307.4,regY:48.4,regX:17.5}},{t:this.ikNode_2,p:{rotation:-35.8,x:252.8,y:213.2,regY:105.3,regX:70.3}}]},1).to({state:[{t:this.ikNode_1},{t:this.ikNode_3,p:{regX:21.1,regY:100.4,rotation:-4.4,x:260.2,y:185.2}},{t:this.ikNode_4},{t:this.ikNode_5,p:{rotation:-50.8,x:136.6,y:183,regX:21.2,regY:43.9}},{t:this.ikNode_6,p:{regY:27.6,rotation:-4.4,x:295.7,y:78.5}},{t:this.ikNode_7,p:{rotation:-0.8,x:254.8,y:315.8}},{t:this.ikNode_8,p:{rotation:2.5,x:308.1,y:307.2,regY:48.4,regX:17.4}},{t:this.ikNode_2,p:{rotation:-40.5,x:251.7,y:215.6,regY:105.4,regX:70.3}}]},1).to({state:[{t:this.ikNode_1},{t:this.ikNode_3,p:{regX:21.1,regY:100.4,rotation:-6.9,x:255.8,y:187.1}},{t:this.ikNode_4},{t:this.ikNode_5,p:{rotation:-55.5,x:133.4,y:194.8,regX:21.2,regY:43.9}},{t:this.ikNode_6,p:{regY:27.6,rotation:-6.9,x:286.6,y:79.1}},{t:this.ikNode_7,p:{rotation:-0.7,x:254.8,y:315.8}},{t:this.ikNode_8,p:{rotation:2.3,x:308.5,y:307.2,regY:48.4,regX:17.4}},{t:this.ikNode_2,p:{rotation:-45.1,x:250.8,y:218,regY:105.4,regX:70.3}}]},1).to({state:[{t:this.ikNode_1},{t:this.ikNode_3,p:{regX:21.1,regY:100.4,rotation:-9.4,x:251.8,y:189.4}},{t:this.ikNode_4},{t:this.ikNode_5,p:{rotation:-60.1,x:131.3,y:206.7,regX:21.2,regY:43.9}},{t:this.ikNode_6,p:{regY:27.6,rotation:-9.4,x:277.7,y:80.1}},{t:this.ikNode_7,p:{rotation:-0.6,x:254.6,y:315.7}},{t:this.ikNode_8,p:{rotation:2.1,x:308.8,y:307,regY:48.4,regX:17.4}},{t:this.ikNode_2,p:{rotation:-49.8,x:250.2,y:220.4,regY:105.4,regX:70.3}}]},1).to({state:[{t:this.ikNode_1},{t:this.ikNode_3,p:{regX:21.1,regY:100.4,rotation:-11.9,x:248.3,y:192}},{t:this.ikNode_4},{t:this.ikNode_5,p:{rotation:-64.8,x:130.2,y:218.7,regX:21.2,regY:43.9}},{t:this.ikNode_6,p:{regY:27.6,rotation:-11.9,x:269.5,y:81.5}},{t:this.ikNode_7,p:{rotation:-0.5,x:254.5,y:315.7}},{t:this.ikNode_8,p:{rotation:1.8,x:309.1,y:306.8,regY:48.4,regX:17.4}},{t:this.ikNode_2,p:{rotation:-54.5,x:249.8,y:222.5,regY:105.4,regX:70.4}}]},1).to({state:[{t:this.ikNode_1},{t:this.ikNode_3,p:{regX:21.1,regY:100.4,rotation:-14.4,x:245.5,y:194.5}},{t:this.ikNode_4},{t:this.ikNode_5,p:{rotation:-69.4,x:130.1,y:230.5,regX:21.2,regY:43.9}},{t:this.ikNode_6,p:{regY:27.5,rotation:-14.4,x:261.7,y:83}},{t:this.ikNode_7,p:{rotation:-0.5,x:254.4,y:315.7}},{t:this.ikNode_8,p:{rotation:1.6,x:309.4,y:306.9,regY:48.5,regX:17.4}},{t:this.ikNode_2,p:{rotation:-59.1,x:249.6,y:224.7,regY:105.4,regX:70.3}}]},1).to({state:[{t:this.ikNode_1},{t:this.ikNode_3,p:{regX:21.1,regY:100.4,rotation:-17,x:243.1,y:196.9}},{t:this.ikNode_4},{t:this.ikNode_5,p:{rotation:-74.1,x:130.9,y:242,regX:21.2,regY:43.9}},{t:this.ikNode_6,p:{regY:27.6,rotation:-17,x:254.4,y:85}},{t:this.ikNode_7,p:{rotation:-0.4,x:254.3,y:315.7}},{t:this.ikNode_8,p:{rotation:1.4,x:309.8,y:306.6,regY:48.4,regX:17.4}},{t:this.ikNode_2,p:{rotation:-63.8,x:249.4,y:226.5,regY:105.3,regX:70.3}}]},1).to({state:[{t:this.ikNode_1},{t:this.ikNode_3,p:{regX:21,regY:100.4,rotation:-19.5,x:241.1,y:199.3}},{t:this.ikNode_4},{t:this.ikNode_5,p:{rotation:-78.7,x:132.6,y:253.4,regX:21.2,regY:43.9}},{t:this.ikNode_6,p:{regY:27.6,rotation:-19.5,x:247.5,y:87}},{t:this.ikNode_7,p:{rotation:-0.3,x:254.2,y:315.6}},{t:this.ikNode_8,p:{rotation:1.1,x:310.1,y:306.5,regY:48.4,regX:17.4}},{t:this.ikNode_2,p:{rotation:-68.4,x:249.7,y:228.3,regY:105.4,regX:70.3}}]},1).to({state:[{t:this.ikNode_1},{t:this.ikNode_3,p:{regX:21.1,regY:100.4,rotation:-22,x:239.6,y:201.4}},{t:this.ikNode_4},{t:this.ikNode_5,p:{rotation:-83.4,x:135.2,y:264.3,regX:21.2,regY:43.9}},{t:this.ikNode_6,p:{regY:27.6,rotation:-22,x:241.1,y:89}},{t:this.ikNode_7,p:{rotation:-0.3,x:254,y:315.6}},{t:this.ikNode_8,p:{rotation:0.9,x:310.5,y:306.4,regY:48.5,regX:17.5}},{t:this.ikNode_2,p:{rotation:-73.1,x:249.8,y:229.9,regY:105.4,regX:70.3}}]},1).to({state:[{t:this.ikNode_1},{t:this.ikNode_3,p:{regX:21.1,regY:100.4,rotation:-24.5,x:238.3,y:203.5}},{t:this.ikNode_4},{t:this.ikNode_5,p:{rotation:-88,x:138.7,y:274.9,regX:21.2,regY:43.9}},{t:this.ikNode_6,p:{regY:27.6,rotation:-24.5,x:234.7,y:91.1}},{t:this.ikNode_7,p:{rotation:-0.2,x:253.9,y:315.6}},{t:this.ikNode_8,p:{rotation:0.7,x:310.7,y:306.2,regY:48.4,regX:17.4}},{t:this.ikNode_2,p:{rotation:-77.7,x:250.1,y:231.3,regY:105.4,regX:70.3}}]},1).to({state:[{t:this.ikNode_1},{t:this.ikNode_3,p:{regX:21.1,regY:100.4,rotation:-27,x:237.1,y:205.4}},{t:this.ikNode_4},{t:this.ikNode_5,p:{rotation:-92.7,x:142.9,y:285.1,regX:21.2,regY:43.9}},{t:this.ikNode_6,p:{regY:27.6,rotation:-27,x:228.7,y:93.2}},{t:this.ikNode_7,p:{rotation:-0.1,x:253.8,y:315.5}},{t:this.ikNode_8,p:{rotation:0.5,x:311,y:306,regY:48.4,regX:17.4}},{t:this.ikNode_2,p:{rotation:-82.4,x:250.3,y:232.5,regY:105.4,regX:70.3}}]},1).to({state:[{t:this.ikNode_1},{t:this.ikNode_3,p:{regX:21.1,regY:100.4,rotation:-29.6,x:236.4,y:207.1}},{t:this.ikNode_4},{t:this.ikNode_5,p:{rotation:-97.3,x:147.8,y:294.8,regX:21.2,regY:43.9}},{t:this.ikNode_6,p:{regY:27.6,rotation:-29.6,x:222.9,y:95.4}},{t:this.ikNode_7,p:{rotation:-0.1,x:253.7,y:315.5}},{t:this.ikNode_8,p:{rotation:0.2,x:311.3,y:305.9,regY:48.4,regX:17.4}},{t:this.ikNode_2,p:{rotation:-87,x:250.7,y:233.6,regY:105.4,regX:70.4}}]},1).to({state:[{t:this.ikNode_1},{t:this.ikNode_3,p:{regX:21,regY:100.4,rotation:-32.1,x:235.5,y:208.7}},{t:this.ikNode_4},{t:this.ikNode_5,p:{rotation:-102,x:153.4,y:303.9,regX:21.2,regY:43.9}},{t:this.ikNode_6,p:{regY:27.6,rotation:-32.1,x:217.4,y:97.6}},{t:this.ikNode_7,p:{rotation:0,x:253.6,y:315.6}},{t:this.ikNode_8,p:{rotation:0,x:311.7,y:305.8,regY:48.4,regX:17.4}},{t:this.ikNode_2,p:{rotation:-91.7,x:251,y:234.7,regY:105.4,regX:70.3}}]},1).to({state:[{t:this.ikNode_1},{t:this.ikNode_3,p:{regX:21.1,regY:100.4,rotation:-30.3,x:236.6,y:206}},{t:this.ikNode_4},{t:this.ikNode_5,p:{rotation:-96.3,x:146.5,y:293.6,regX:21.2,regY:43.9}},{t:this.ikNode_6,p:{regY:27.6,rotation:-30.3,x:221.9,y:94.4}},{t:this.ikNode_7,p:{rotation:0,x:253.6,y:315.6}},{t:this.ikNode_8,p:{rotation:0,x:311.7,y:305.8,regY:48.4,regX:17.4}},{t:this.ikNode_2,p:{rotation:-86.6,x:249.8,y:232.8,regY:105.4,regX:70.3}}]},1).to({state:[{t:this.ikNode_1},{t:this.ikNode_3,p:{regX:21.1,regY:100.4,rotation:-28.5,x:238,y:203.2}},{t:this.ikNode_4},{t:this.ikNode_5,p:{rotation:-90.7,x:140.4,y:282.4,regX:21.2,regY:43.9}},{t:this.ikNode_6,p:{regY:27.6,rotation:-28.5,x:226.9,y:91}},{t:this.ikNode_7,p:{rotation:0,x:253.6,y:315.6}},{t:this.ikNode_8,p:{rotation:0,x:311.7,y:305.8,regY:48.4,regX:17.4}},{t:this.ikNode_2,p:{rotation:-81.5,x:248.7,y:230.5,regY:105.4,regX:70.3}}]},1).to({state:[{t:this.ikNode_1},{t:this.ikNode_3,p:{regX:21.1,regY:100.4,rotation:-26.7,x:239.8,y:200.1}},{t:this.ikNode_4},{t:this.ikNode_5,p:{rotation:-85,x:135.3,y:270.1,regX:21.2,regY:43.9}},{t:this.ikNode_6,p:{regY:27.6,rotation:-26.7,x:232.3,y:87.5}},{t:this.ikNode_7,p:{rotation:0,x:253.6,y:315.6}},{t:this.ikNode_8,p:{rotation:0,x:311.7,y:305.8,regY:48.4,regX:17.4}},{t:this.ikNode_2,p:{rotation:-76.4,x:247.9,y:227.6,regY:105.4,regX:70.3}}]},1).to({state:[{t:this.ikNode_1},{t:this.ikNode_3,p:{regX:21.1,regY:100.4,rotation:-25,x:242.1,y:196.9}},{t:this.ikNode_4},{t:this.ikNode_5,p:{rotation:-79.3,x:131.3,y:256.8,regX:21.2,regY:44}},{t:this.ikNode_6,p:{regY:27.5,rotation:-25,x:238.2,y:83.8}},{t:this.ikNode_7,p:{rotation:0,x:253.6,y:315.6}},{t:this.ikNode_8,p:{rotation:0,x:311.7,y:305.8,regY:48.4,regX:17.4}},{t:this.ikNode_2,p:{rotation:-71.3,x:247.2,y:224,regY:105.4,regX:70.3}}]},1).to({state:[{t:this.ikNode_1},{t:this.ikNode_3,p:{regX:21.1,regY:100.4,rotation:-23.2,x:245.1,y:193.5}},{t:this.ikNode_4},{t:this.ikNode_5,p:{rotation:-73.7,x:128.6,y:242.7,regX:21.2,regY:43.9}},{t:this.ikNode_6,p:{regY:27.6,rotation:-23.2,x:244.8,y:80.4}},{t:this.ikNode_7,p:{rotation:0,x:253.6,y:315.6}},{t:this.ikNode_8,p:{rotation:0,x:311.7,y:305.8,regY:48.4,regX:17.4}},{t:this.ikNode_2,p:{rotation:-66.2,x:247.3,y:219.9,regY:105.4,regX:70.3}}]},1).to({state:[{t:this.ikNode_1},{t:this.ikNode_3,p:{regX:21.1,regY:100.4,rotation:-21.4,x:248.7,y:190.3}},{t:this.ikNode_4},{t:this.ikNode_5,p:{rotation:-68,x:127.6,y:228,regX:21.2,regY:43.9}},{t:this.ikNode_6,p:{regY:27.6,rotation:-21.4,x:252,y:77.1}},{t:this.ikNode_7,p:{rotation:0,x:253.6,y:315.6}},{t:this.ikNode_8,p:{rotation:0,x:311.7,y:305.8,regY:48.4,regX:17.4}},{t:this.ikNode_2,p:{rotation:-61.1,x:248.1,y:215.4,regY:105.4,regX:70.4}}]},1).to({state:[{t:this.ikNode_1},{t:this.ikNode_3,p:{regX:21.1,regY:100.4,rotation:-19.6,x:252.9,y:187.2}},{t:this.ikNode_4},{t:this.ikNode_5,p:{rotation:-62.3,x:128.3,y:213.2,regX:21.2,regY:43.9}},{t:this.ikNode_6,p:{regY:27.6,rotation:-19.6,x:259.9,y:74.1}},{t:this.ikNode_7,p:{rotation:0,x:253.6,y:315.6}},{t:this.ikNode_8,p:{rotation:0,x:311.7,y:305.8,regY:48.4,regX:17.4}},{t:this.ikNode_2,p:{rotation:-56,x:249.5,y:210.9,regY:105.4,regX:70.2}}]},1).to({state:[{t:this.ikNode_1},{t:this.ikNode_3,p:{regX:21.1,regY:100.4,rotation:-17.8,x:257.6,y:184.6}},{t:this.ikNode_4},{t:this.ikNode_5,p:{rotation:-56.7,x:130.6,y:198.4,regX:21.2,regY:43.9}},{t:this.ikNode_6,p:{regY:27.6,rotation:-17.8,x:268.3,y:71.6}},{t:this.ikNode_7,p:{rotation:0,x:253.6,y:315.6}},{t:this.ikNode_8,p:{rotation:0,x:311.7,y:305.8,regY:48.4,regX:17.4}},{t:this.ikNode_2,p:{rotation:-50.9,x:251.9,y:206.6,regY:105.4,regX:70.3}}]},1).to({state:[{t:this.ikNode_1},{t:this.ikNode_3,p:{regX:21.1,regY:100.4,rotation:-16,x:262.7,y:182.6}},{t:this.ikNode_4},{t:this.ikNode_5,p:{rotation:-51,x:134.3,y:184.4,regX:21.2,regY:43.9}},{t:this.ikNode_6,p:{regY:27.6,rotation:-16,x:277,y:69.8}},{t:this.ikNode_7,p:{rotation:0,x:253.6,y:315.6}},{t:this.ikNode_8,p:{rotation:0,x:311.7,y:305.8,regY:48.4,regX:17.4}},{t:this.ikNode_2,p:{rotation:-45.8,x:254.6,y:202.8,regY:105.4,regX:70.3}}]},1).to({state:[{t:this.ikNode_1},{t:this.ikNode_3,p:{regX:21.1,regY:100.4,rotation:-14.3,x:268,y:181.1}},{t:this.ikNode_4},{t:this.ikNode_5,p:{rotation:-45.3,x:139,y:171,regX:21.2,regY:43.9}},{t:this.ikNode_6,p:{regY:27.6,rotation:-14.3,x:285.9,y:68.8}},{t:this.ikNode_7,p:{rotation:0,x:253.6,y:315.6}},{t:this.ikNode_8,p:{rotation:0,x:311.7,y:305.8,regY:48.4,regX:17.4}},{t:this.ikNode_2,p:{rotation:-40.7,x:257.7,y:199.7,regY:105.4,regX:70.3}}]},1).to({state:[{t:this.ikNode_1},{t:this.ikNode_3,p:{regX:21.1,regY:100.4,rotation:-12.5,x:273.1,y:180.4}},{t:this.ikNode_4},{t:this.ikNode_5,p:{rotation:-39.7,x:144.6,y:158.4,regX:21.2,regY:43.9}},{t:this.ikNode_6,p:{regY:27.6,rotation:-12.5,x:294.6,y:68.6}},{t:this.ikNode_7,p:{rotation:0,x:253.6,y:315.6}},{t:this.ikNode_8,p:{rotation:0,x:311.7,y:305.8,regY:48.4,regX:17.4}},{t:this.ikNode_2,p:{rotation:-35.7,x:260.7,y:197.2,regY:105.4,regX:70.4}}]},1).to({state:[{t:this.ikNode_1},{t:this.ikNode_3,p:{regX:21.1,regY:100.4,rotation:-10.7,x:277.9,y:180.1}},{t:this.ikNode_4},{t:this.ikNode_5,p:{rotation:-34,x:150.9,y:146.7,regX:21.2,regY:43.9}},{t:this.ikNode_6,p:{regY:27.6,rotation:-10.7,x:303.1,y:68.9}},{t:this.ikNode_7,p:{rotation:0,x:253.6,y:315.6}},{t:this.ikNode_8,p:{rotation:0,x:311.7,y:305.8,regY:48.4,regX:17.4}},{t:this.ikNode_2,p:{rotation:-30.6,x:263.4,y:195.4,regY:105.4,regX:70.3}}]},1).to({state:[{t:this.ikNode_1},{t:this.ikNode_3,p:{regX:21.1,regY:100.4,rotation:-8.9,x:282.4,y:180.4}},{t:this.ikNode_4},{t:this.ikNode_5,p:{rotation:-28.3,x:157.9,y:135.6,regX:21.2,regY:43.9}},{t:this.ikNode_6,p:{regY:27.6,rotation:-8.9,x:311.2,y:69.9}},{t:this.ikNode_7,p:{rotation:0,x:253.6,y:315.6}},{t:this.ikNode_8,p:{rotation:0,x:311.7,y:305.8,regY:48.4,regX:17.4}},{t:this.ikNode_2,p:{rotation:-25.5,x:265.9,y:193.9,regY:105.4,regX:70.2}}]},1).to({state:[{t:this.ikNode_1},{t:this.ikNode_3,p:{regX:21.1,regY:100.4,rotation:-7.1,x:286.4,y:181}},{t:this.ikNode_4},{t:this.ikNode_5,p:{rotation:-22.7,x:165.3,y:125.3,regX:21.2,regY:43.9}},{t:this.ikNode_6,p:{regY:27.6,rotation:-7.1,x:318.8,y:71.4}},{t:this.ikNode_7,p:{rotation:0,x:253.6,y:315.6}},{t:this.ikNode_8,p:{rotation:0,x:311.7,y:305.8,regY:48.4,regX:17.4}},{t:this.ikNode_2,p:{rotation:-20.4,x:268.2,y:192.7,regY:105.4,regX:70.3}}]},1).to({state:[{t:this.ikNode_1},{t:this.ikNode_3,p:{regX:21.1,regY:100.4,rotation:-5.3,x:290,y:181.8}},{t:this.ikNode_4},{t:this.ikNode_5,p:{rotation:-17,x:173.3,y:115.7,regX:21.2,regY:44}},{t:this.ikNode_6,p:{regY:27.6,rotation:-5.3,x:325.9,y:73.1}},{t:this.ikNode_7,p:{rotation:0,x:253.6,y:315.6}},{t:this.ikNode_8,p:{rotation:0,x:311.7,y:305.8,regY:48.4,regX:17.4}},{t:this.ikNode_2,p:{rotation:-15.3,x:270.2,y:191.7,regY:105.4,regX:70.3}}]},1).to({state:[{t:this.ikNode_1},{t:this.ikNode_3,p:{regX:21.1,regY:100.4,rotation:-3.6,x:293.1,y:182.7}},{t:this.ikNode_4},{t:this.ikNode_5,p:{rotation:-11.3,x:181.8,y:106.7,regX:21.2,regY:44}},{t:this.ikNode_6,p:{regY:27.6,rotation:-3.6,x:332.5,y:75.1}},{t:this.ikNode_7,p:{rotation:0,x:253.6,y:315.6}},{t:this.ikNode_8,p:{rotation:0,x:311.7,y:305.8,regY:48.4,regX:17.4}},{t:this.ikNode_2,p:{rotation:-10.2,x:272,y:191,regY:105.4,regX:70.2}}]},1).to({state:[{t:this.ikNode_1},{t:this.ikNode_3,p:{regX:21,regY:100.4,rotation:-1.8,x:295.6,y:183.7}},{t:this.ikNode_4},{t:this.ikNode_5,p:{rotation:-5.7,x:190.8,y:98.4,regX:21.2,regY:43.9}},{t:this.ikNode_6,p:{regY:27.6,rotation:-1.8,x:338.7,y:77.3}},{t:this.ikNode_7,p:{rotation:0,x:253.6,y:315.6}},{t:this.ikNode_8,p:{rotation:0,x:311.7,y:305.8,regY:48.4,regX:17.4}},{t:this.ikNode_2,p:{rotation:-5.1,x:273.7,y:190.2,regY:105.4,regX:70.3}}]},1).to({state:[{t:this.ikNode_1},{t:this.ikNode_3,p:{regX:21.1,regY:100.4,rotation:0,x:298.1,y:184.6}},{t:this.ikNode_4},{t:this.ikNode_5,p:{rotation:0,x:200.2,y:90.8,regX:21.2,regY:43.9}},{t:this.ikNode_6,p:{regY:27.6,rotation:0,x:344.5,y:79.6}},{t:this.ikNode_7,p:{rotation:0,x:253.6,y:315.6}},{t:this.ikNode_8,p:{rotation:0,x:311.7,y:305.8,regY:48.4,regX:17.4}},{t:this.ikNode_2,p:{rotation:0,x:275,y:189.5,regY:105.4,regX:70.3}}]},1).to({state:[{t:this.ikNode_17},{t:this.ikNode_20},{t:this.ikNode_22},{t:this.ikNode_19},{t:this.ikNode_21},{t:this.ikNode_23},{t:this.ikNode_24},{t:this.ikNode_18}]},1).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B1A7A6").s().p("AgOgKIAQAIQAJAFAEAIg");
	this.shape.setTransform(205.9,69.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(132));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2B2626").s().p("AAAAAIABAAIAAAAIgBABg");
	this.shape_1.setTransform(318.9,155.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B1A7A6").s().p("AgOgKIAQAIQAJAFAEAIg");
	this.shape_2.setTransform(205.9,69.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#817878").s().p("AAAAEIAAgBIAAgGIABAHg");
	this.shape_3.setTransform(301.2,298);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#373333").s().p("AgBAAIADgBIAAADg");
	this.shape_4.setTransform(271.3,335.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FCCB9B").s().p("AgHCWQgYgJgUgiQgLgUgOgnQgDgJAAgKQABgxgRg6IAAgIQAJgPABgDQAIgiAmgKQAegJAlAIQAJACAHAGQATATABATQAEAyAPAaQAZAogXBJQgLAjgWASQgNAKgQADIgMACQgKAAgIgEg");
	this.shape_5.setTransform(283.7,286.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#695E61").s().p("AgSAxIAegvIAEgJIADgLIASg6IgEATQgDAMgBAIQgBARgKATQgEAHgPAZIgcAmIgHAIg");
	this.shape_6.setTransform(309.4,131.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#695E61").s().p("AAEgPIAng9IhRCWIgEADQARgxAdgrg");
	this.shape_7.setTransform(319.6,110.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FCCB9B").s().p("AhKCtQgUgOgggGIg4gGQAHABAQhVIACglQAEgTARgJIATgKIATgJQAYgNAOgWIAOgaQAIgRAIgIQAQgRAegHIA1gLQAJgDAWgQQAXgPAsgBQAMADADAPQADAQgJAKQgGAHgRAZQgCAEgKAEIgNAHQgMAIgPANQgYAXgUAcQgbAkgcA8QgDAIgWAgIgMAZQgIAQgGAHQgHAIgFAAQgFAAgIgFg");
	this.shape_8.setTransform(353.6,70.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FCCB9B").s().p("AAqDpQAAgGgHgIIgKgNQgNgngIgTQgVgmgJgUQgIgUgNgqQgahLgTgoQgfhCgogjIgFgIQABgoAnADQAKABALAHQAZASAIAKQALAOALAEQA7AWASAvIAOAtIADANQADAHAGAEQAKAJAbAOQAYAOALAOQAPAVAHAmQAHAogKAWQgEALAEAMQADAHAHANIARAhQhBgIgyAfQgFAEgEAAIgDgBg");
	this.shape_9.setTransform(195.9,70.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FCCB9B").s().p("AhyHPQgYgGgQgMQAHgMAhgJQAMgCAYACQAYACALgDQAZgGAAgcQAAgGgHgqQgLhDAEhaIAMidQALiaAHhQQAHhSAIg7IAFglQACgVAEgPIAGgWQADgQgEgGQAYAdAfA8IAZAuQAPAbAHATIAJAeQAHATAIADQgJASgNAmQgOAjgHAZIgVBSIgMAlQgHAXgCAPQgCASAEAYIAIAqQAIA+gLBNQgMBLgCAdIgBAYQAAAPAGAHQAFAGAMACIATAEIAZAGQAPAFAGAIQgOATgWAAIhUgDIgDAAIhFgCQgFAAgWAFQgJACgKAAQgMAAgOgDg");
	this.shape_10.setTransform(252,304.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FCCB9B").s().p("AhtHdQgGAAgCgDQgHgEAIgHQACgCAJgDIApgLQAXgIAGgRQAFgNAAgeQABgogDg7IgFhjIgCgzQgCgcgFgWQgGgXgag5QgXgygEgfIgEg8QgDgkgOgWQgHgLgMgNIgWgVQgGgGgBgCIADgKQABgHgBgaQAAgyAdgxQAMgVAVgZIAmgrQgBACAFAUIAPBNQAJAtAPA+IAcBpQARBCAJAoQAcB0AGBXQAEA5gFBnIgEBHQACAqAcAQQAKAGARAEIAcAHQAoARgHAJQgDAGgHABQhMAIhGAAQhBAAg9gHg");
	this.shape_11.setTransform(311.8,305.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FCCB9B").s().p("AhZCPQgmgGgpgNQgPgFgPACIgMABQgJACAAADQgBgOAFgWQAGgZABgMQALhCABgSQABgLgEgcQgDgaACgOQACgNAOgGQAJgEASgDQAagHAfgBQAxgEAogCQAVgBAtABQAoABAUABQAhACAaAGIAZAGIAFADIAGAIIgFA8QgCAhABAgQABAhAFAfIAGAcQAFARgBALIgEgMQgHgGgSAMQgUAQgFACQgUAKgdABIgzACQgfACgdAAQgxAAgugHg");
	this.shape_12.setTransform(280.5,229);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F3101C").s().p("AiEDIQgHgagEgLQgEgJgPgeQAAgDgFgHIgHgLIgmhEQgMgZgIgLIgJgPQgEgIgBgJQAAgHAEgVIAeh5QADgPALAAIAXAGQAhALAsAIQBNAPBOgEQAvgDAigIQAVgGASgIIARgKQAKgGAHgCQAJgDADAFIAFAPQAFATACApQAEApAGAdQAEAUgDAKQgCAGgGAGIgKALQgfAggQAaQggAyAAAxIABAWQAAANgDAHQgBAEgFADQgEACgJgBIgOgBQgGgKgDgOIgEgaQgDgXgOgLQgLgJgXgDQglgDgWAJQgSAIgLASIgSAiIgZADQgQAFgKANQgKANgHAAQgFAAgDgGg");
	this.shape_13.setTransform(279.8,260.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#744D28").s().p("AgbFKQgDgOgEgHQgFgLgLgEQgkgPgOgZIgKgWQgEgIgGAEIgFAAIABgCIgCgJIgCgRQgBgKgGgGQgKgKgJgOQgHgMAAgHQAAgJAEgiIAGg2IgIABQgFgKgEgEQgSgTABgUQABgWAEgOIAGgNQAFgIABgFQAKgngGggIgFglQgCgUADgRIAKhBIAIgNIAKgNQANgQAHgGQAMgLANgDQARA6gBAyQAAAKADAJQAQAuAbAlQAIAKAJAFQAUAMAXgGQAXgGAPgUQAJgMAHgSIAJghQAPg2gWglQgDgFgCgJIgDgPIAcABIAKAIIAdAcQALAKAIAVQAHAQADAVIADAmIABAdIgBAHIgDAKQAAAFAEAEIgBAHIgBAKIAKBIIACADIAAAHIAAACIABANIgGAAIgTgIIABAVQABAMAFAIIANARIADAIIgFAHIgKgBIgBAIIAAAIIAGAcQACALgHAJQgHAJgMAAQgIAAABAIIACAgQAAARgIANIAAAGIgFAFQgeAWADAcIgDAdIgBADIgBACIgGADIgDAAIgEgBIgKgJIgQgUIgDABIgFAfIgOgJQgHgFgBgIIgHgPIgDgNIAAgFIAEgUIgCgGIgEgGIgCAAQgKgLgGAKQgOAdAAAQQAAACAEAGIgBALQAAAGAFAEIACAEIAAgBIABAGQADAUgBAJQgDALgNAJQgJgBgCgMg");
	this.shape_14.setTransform(283.7,312.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#AB1418").s().p("AiUJ/IgIgSIgDgDQgyiRg/iHIgehAQgVgpgKgXIgchDQgRgqgLgYIgZgvIgXguIgKgRIhOieQgvhggjg7IgbgsQgQgcgKgSIgUgyQgNgegQgQIgVgZIgFgMIAHgCQAMgMAbgHQApgMAnAEIAIAPQALAWANAKQATAPATAYIAiArQAtA7AZAoQAYAlArBNIAbA2QARAhAOATQAgArBFBKQBKBMAeAmQATAZA4BSIAjA3QAYAgAVARQAJgHAJgTIAOgdIAig9QAig7Ang7QAigzBEhYIAxg/QAbglALggIARg8QAKgiAeg5QA2hmAdgxQAqhKAsg9QAIgJAOAAQAHAAASADQAqAEAZAQIASALQgGAfgXAsIgqBIIhSCeQglBFgRAkQgcA8gKAkIgSBFQgLArgIAYIhHDSIgRApQgKAcAFAPQgHADgFAPQgZBQgPA5QgFAUgRAtQgMAoADAcIAEALQABAHgBAEQgCADgEADIgGAFQgCADgBADIgCAJIgZgFQgagGgggCQgVgCgnAAQgtgBgXABQgoABgvAEQg9AFgkASQgOgGgEgPg");
	this.shape_15.setTransform(273.9,150.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},29).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},20).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},10).wait(73));

	// Layer_3
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(281.4,250,0.177,0.177,-90,0,0,250,39.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({y:145},20).wait(10).to({y:250},20).wait(53));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(454,246.9,192.9,307.3);
// library properties:
lib.properties = {
	id: '06B2549954094AC79D6901841566527A',
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 0.00,
	manifest: [
		{src:"images/yakult.png", id:"yakult"}
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
an.compositions['06B2549954094AC79D6901841566527A'] = {
	getStage: function() { return exportRoot.getStage(); },
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



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;