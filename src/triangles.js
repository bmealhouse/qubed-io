"use strict";

//
// Init
//

var frameCalcText;
var groups = [];
var setup;
var triangles = [];
var dynamic = {
    scale: false,
    opacity: false,
    blur: false,
    speed: 1
};

var fps = {
  strength: 20,
  frameTime: 0,
  lastLoop: new Date(),
  thisLoop: null,
  measure: function() {
    fps.frameTime += ((fps.thisLoop = new Date()) - fps.lastLoop - fps.frameTime) / fps.strength;
    fps.lastLoop = fps.thisLoop;
    return this;
  },
  toString: function() {
    return (1000 / this.frameTime).toFixed(1) + " fps";
  }
};

groups.push(new Group().addTo(stage));
groups.push(new Group().addTo(stage));

updateSetup();
env.on("change", updateSetup);

var currentState = stateInit;
stage.on("tick", function() { currentState(); });

//
// Tools
//

function updateSetup() {
  var width = env.windowWidth;

  console.log(env.windowWidth);

  setup = {
    stageWidth: width,
    stageHeight: env.windowHeight,
    stageCenter: {
      x: width / 2,
      y: env.windowHeight / 2
    }
  };
}

function newTriangle(){
  var triangle = {
    width: Math.random() * 40,
    height: Math.random() * 40,
    scale: 0.2,
    opacity: 1,
    x: setup.stageCenter.x,
    y: setup.stageCenter.y,
    xSpeed: Math.random() * 10 - 5,
    ySpeed: Math.random() * 10 - 5,
    radius: 10,
    sides: 3
  };

  triangle.shape = Path.polygon(
    triangle.x,
    triangle.y,
    triangle.radius,
    triangle.sides
  );

  triangle.shape.attr({
    fillColor: newColor(),
    opacity: triangle.opacity
  });

  return triangle;
}

function newColor() {
  return color("white").randomize();
}

//
// States
//

function stateInit() {
  frameCalcText = new Text("Calculating...");

  frameCalcText.attr({
    x: 10,
    y: 16,
    fontFamily: "Arial",
    fontSize: "12px",
    textFillColor: "white"
  });

  frameCalcText.addTo(stage);

  setInterval(stats, 1000);
  currentState = stateRun;
}

function stateRun(){
  stats();

  var i = 0;

  for (; i < dynamic.speed; i++) {
    var triangle = newTriangle();
    triangle.shape.addTo(groups[1], 0);
    triangles.push(triangle);
  }

  // filters are now on groups
  if (dynamic.blur) {
    groups[1].attr("filters", [new filter.Blur(2)]);
  } else {
    groups[1].attr("filters", []);
  }

  for (i = 0; i < triangles.length; i++) {

    if (
      triangles[i].opacity <= 0 ||
      triangles[i].x > setup.stageWidth ||
      triangles[i].x < 0 ||
      triangles[i].y > setup.stageHeight ||
      triangles[i].y < 0
    ) {

      triangles[i].shape.remove();
      triangles.splice(i, 1);

    }

    triangles[i].x += triangles[i].xSpeed;
    triangles[i].y += triangles[i].ySpeed;
    triangles[i].scale *= 1.04;
    triangles[i].opacity -= 0.015;

    if (dynamic.scale) {
      triangles[i].shape.attr("scale", triangles[i].scale);
    }

    if (dynamic.opacity) {
      triangles[i].shape.attr("opacity", triangles[i].opacity);
    }

    if (dynamic.blur) {
      triangles[i].shape.attr("filters", [new filter.Blur(1)]);
    }

    triangles[i].shape.attr("x", triangles[i].x);
    triangles[i].shape.attr("y", triangles[i].y);
  }
}

function statePause() {
  stats();
}

function stateDispose() {
  /* implement */
}

//
// Stats
//

function stats() {
  var statsStr = triangles.length + " triangles at " + fps.measure().toString();
  frameCalcText.attr("text", statsStr);
}
