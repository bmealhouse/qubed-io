import React from "react";
// import bonsai from "bonsai";

/** Used for React dev tools */
window.React = React;

let Content = React.createClass({

  render: function() {
    return (
      <div className="content">&nbsp;</div>
    );
  }

});

let PrimaryMessage = React.createClass({

  render: function() {
    return (
      <div className="primary-message">
        {/*
        <div className="logo">
          <svg version="1.1" id="logo" x="0px" y="0px" width="100%" height="100%" viewBox="0 0 100 100">
            <g id="outline">
              <polygon id="top" fill="#676767" points="50.7,11.6 50.7,11.6 25.4,26.2 32.5,30.3 50.7,19.7 50.7,19.7 69,30.3 76,26.2"/>
              <polygon id="bottom" fill="#4D4E4E" points="76,55.4 76,26.2 69,30.3 69,51.4 50.7,61.9 32.4,51.4 32.5,30.3 25.4,26.2 25.4,55.4 50.7,70 50.7,70 50.7,70 50.7,70 50.7,70 76,55.4 76,55.5 76,55.4 76,55.4"/>
            </g>
            <g id="cube">
              <polyline id="left" fill="#8BC53F" points="50.7,59.2 34.7,50 34.7,31.5 50.7,40.6"/>
              <polygon id="top" fill="#B8D54F" points="50.7,40.6 34.7,31.5 50.7,22.3 66.7,31.5"/>
              <polygon id="right" fill="#A4CE44" points="50.7,59.2 66.7,50 66.7,31.5 50.7,40.6"/>
            </g>
            <g id="qubed">
              <path id="q" fill="#A4CE44" d="M36.4,77.4c2,0,3.4,0.4,3.4,4.3c0,3.7-1.4,4.2-3.4,4.2c-2.1,0-3.4-0.4-3.4-4.2C32.9,77.8,34.4,77.4,36.4,77.4z M36.4,84.2c1.2,0,1.5-0.4,1.5-2.5c0-2.3-0.4-2.6-1.5-2.6c-1.1,0-1.5,0.2-1.5,2.6C34.8,83.8,35.1,84.2,36.4,84.2z M36.8,86.3c0.2,0.7,1.2,0.5,1.8,0.4v1.4c-1.3,0.2-2.8-0.2-2.9-1.8H36.8z"/>
              <path id="u" fill="#A4CE44" d="M40.7,77.5h1.9v4.7c0,1.5,0.2,2,1.4,2c1.1,0,1.3-0.5,1.3-2v-4.7h1.9v4.7c0,3.7-1.8,3.7-3.2,3.7c-1.6,0-3.3,0.1-3.3-3.7V77.5z"/>
              <path id="b" fill="#A4CE44" d="M48.3,77.5h3.6c1.8,0,2.4,1,2.4,2.3c0,0.7-0.4,1.7-1.2,1.8c0.8,0.1,1.4,0.9,1.4,1.9c0,1.7-0.8,2.5-2.6,2.5h-3.6V77.5z M51.8,80.7c0.5,0,0.7-0.3,0.7-0.8c0-0.7-0.4-0.8-0.7-0.8h-1.5v1.6H51.8z M51.8,84.3c0.5,0,0.8-0.3,0.8-1c0-0.5-0.2-1-0.8-1h-1.6v2H51.8z"/>
              <path id="e" fill="#A4CE44" d="M55.3,79.3c0-1.6,1.2-1.8,2-1.8c0,0,2.7,0,3.7,0.2v1.6h-3.2c-0.6,0-0.6,0.3-0.6,0.6v1l3.3,0.1v1.6l-3.3,0.1v1c0,0.6,0.4,0.6,0.7,0.6H61v1.6c-0.9,0.1-3.6,0.2-3.6,0.2c-0.7,0-2.1-0.1-2.1-1.8V79.3z"/>
              <path id="d" fill="#A4CE44" d="M61.8,77.5h3.7c2.4,0,2.9,2,2.9,4.2c0,2.7-0.9,4.2-2.9,4.2h-3.7V77.5z M65.4,84.3c0.9,0,1.2-0.9,1.2-2.6c0-2.2-0.4-2.6-1.2-2.6h-1.7v5.2H65.4z"/>
            </g>
          </svg>
        </div>
        <div className="slogan tk-fira-sans-2">
          <h1>Simple, elegant, &amp; functional JavaScript development. Done right the first time.</h1>
        </div>
        */}
      </div>
    );
  }

});

let App = React.createClass({

  render: function() {
    return (
      <div>
        <PrimaryMessage/>
        <Content/>
      </div>
    );
  }

});

let appNode = document.getElementById("app");
React.render(<App/>, appNode);

import galaxy from "./pixi/galaxy";

const config = {
  width: window.innerWidth,
  height: 563,
  origin: { x: 285, y: 230 },
  resolution: window.devicePixelRatio
};

galaxy.init(config);

var renderer = PIXI.autoDetectRenderer(800, 600, { antialias: true });
// document.body.appendChild(renderer.view);

// create the root of the scene graph
var stage = new PIXI.Container();
var graphics = new PIXI.Graphics();

// set a fill and line style
graphics.beginFill(0xFF3300);
graphics.lineStyle(10, 0xffd900, 1);

// draw a shape
graphics.moveTo(50,50);
graphics.lineTo(250, 50);
graphics.lineTo(100, 100);
graphics.lineTo(250, 220);
graphics.lineTo(50, 220);
graphics.lineTo(50, 50);
graphics.endFill();

// set a fill and line style again
// graphics.lineStyle(10, 0xFF0000, 0.8);
// graphics.beginFill(0xFF700B, 1);

// draw a second shape
// graphics.moveTo(210,300);
// graphics.lineTo(450,320);
// graphics.lineTo(570,350);
// graphics.quadraticCurveTo(600, 0, 480,100);
// graphics.lineTo(330,120);
// graphics.lineTo(410,200);
// graphics.lineTo(210,300);
// graphics.endFill();

// draw a rectangle
graphics.lineStyle(0);
graphics.beginFill(0x0000FF, 1);
//graphics.drawRect(50, 250, 100, 100);


let point = 2;
let position;

const PI2 = Math.PI * 2;

graphics.position.x = 100;
graphics.position.y = 100;
graphics.moveTo(0, -20);

while (point) {
  position = PI2 * point / 3;

  graphics.lineTo(
    Math.sin(position) * 20,
    -Math.cos(position) * 20
  );

  point -= 1;
}

// draw a circle
// graphics.lineStyle(0);
// graphics.beginFill(0xFFFF0B, 0.5);
// graphics.drawCircle(470, 200,100);
// graphics.endFill();

// graphics.lineStyle(20, 0x33FF00);
// graphics.moveTo(30,30);
// graphics.lineTo(600, 300);


stage.addChild(graphics);

// let's create a moving shape
var thing = new PIXI.Graphics();
stage.addChild(thing);
thing.position.x = 620/2;
thing.position.y = 380/2;

var count = 0;

// run the render loop
animate();

function animate() {

    thing.clear();

    count += 0.1;

    thing.clear();
    thing.lineStyle(10, 0xff0000, 1);
    thing.beginFill(0xffFF00, 0.5);

    thing.moveTo(-120 + Math.sin(count) * 20, -100 + Math.cos(count)* 20);
    thing.lineTo( 120 + Math.cos(count) * 20, -100 + Math.sin(count)* 20);
    thing.lineTo( 120 + Math.sin(count) * 20, 100 + Math.cos(count)* 20);
    thing.lineTo( -120 + Math.cos(count)* 20, 100 + Math.sin(count)* 20);
    thing.lineTo( -120 + Math.sin(count) * 20, -100 + Math.cos(count)* 20);

    thing.rotation = count * 0.1;
    renderer.render(stage);
    requestAnimationFrame( animate );
}
