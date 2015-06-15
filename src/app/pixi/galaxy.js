import loop from "./loop";

const CREATE_INTERVAL = 4;
const MIN_SIZE = 5;
const MAX_SIZE = 15;
const MAX_DEGREES = 360;
const MAX_ROTATION = 2;
const MAX_SPEED = 4;
const OPACITY = 0.5;

const PI = Math.PI;
const PI2 = PI * 2;
const sin = Math.sin;
const cos = Math.cos;

const calcx = (angle) => cos(angle * PI / 180);
const calcy = (angle) => sin(angle * PI / 180);
const radians = (degrees) => (degrees / MAX_DEGREES) * PI2;

let state = {
  triangles: [],
  stage: {},
  frameCount: 0
};

const galaxy = {
  init: function init(config) {

    // You can use either `new PIXI.WebGLRenderer`,
    // `new PIXI.CanvasRenderer`, or `PIXI.autoDetectRenderer`
    const appNode = document.getElementById("app");
    const renderer = PIXI.autoDetectRenderer(config.width/2, config.height/2, {
      antialias: true,
      backgroundColor: 0x373837,
      resolution: config.resolution
    });

    document.body.insertBefore(renderer.view, appNode);
    const stage = new PIXI.Container();

    function random(min, max) {
      if (!max) {
        max = min;
        min = 0;
      }

      return min + Math.floor(Math.random() * (max - min));
    }

    function createColor() {
      let colors = [
        0x666666, 0x6F6E70, 0x58585B,
        0xA5Ce44, 0x8CC63E, 0xB9D54E
      ];

      return colors[random(colors.length)];
    }

    function createTriangle() {
      let triangle = {

        x: config.origin.x/2,
        y: config.origin.y/2,
        color: createColor(),

        angle: random(MAX_DEGREES),
        radius: random(MIN_SIZE, MAX_SIZE)/2,
        rotation: random(MAX_DEGREES),

        movementSpeed: random(1, MAX_SPEED)/2,
        rotationSpeed: random(~MAX_ROTATION, MAX_ROTATION)

      };

      triangle.instance = new PIXI.Graphics();
      triangle.instance.position.x = triangle.x;
      triangle.instance.position.y = triangle.y;
      triangle.instance.rotation = radians(triangle.rotation);

      return triangle;
    }

    function renderTriangle(triangle) {
      if (!triangle) return;

      let point = 2;
      let position;

      triangle.instance.clear();
      triangle.instance.beginFill(triangle.color, 1);
      triangle.instance.moveTo(0, -triangle.radius);

      while (point) {
        position = PI2 * point / 3;

        triangle.instance.lineTo(
          sin(position) * triangle.radius,
          -cos(position) * triangle.radius
        );

        point -= 1;
      }
    }

    function loop() {
      let outOfBounds = (triangle) =>
        triangle.x < 0 || triangle.x > config.width/2 ||
        triangle.y < 0 || triangle.y > config.height/2;

      if (state.frameCount < 2000) {
        requestAnimationFrame(loop);
      } else {
        console.log(state.triangles);
      }

      if (state.frameCount % CREATE_INTERVAL === 0) {
        let triangle = createTriangle();

        stage.addChild(triangle.instance);
        state.triangles.push(triangle);
      }

      for (let i = 0, len = state.triangles.length; i < len; i++) {
        let triangle = state.triangles[i];
        if (!triangle) continue;

        if (outOfBounds(triangle)) {
          stage.removeChild(triangle.instance);
          state.triangles.splice(i, 1);
          // state.triangles[i] = null;
          continue;
        }

        triangle.x += triangle.movementSpeed * calcx(triangle.angle);
        triangle.instance.position.x = triangle.x;

        triangle.y += triangle.movementSpeed * calcy(triangle.angle);
        triangle.instance.position.y = triangle.y;

        triangle.rotation += triangle.rotationSpeed;
        triangle.instance.rotation = radians(triangle.rotation);
      }

      state.triangles.forEach(renderTriangle);
      renderer.render(stage);

      state.frameCount += 1;
    }

    loop();
  }

};

export default galaxy;
