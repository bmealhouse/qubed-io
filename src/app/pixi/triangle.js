import { radians, randomInt, randomFloat } from "./utilities";

const PI = Math.PI;
const PI2 = Math.PI * 2;
const cos = Math.cos;
const sin = Math.sin;

const degrees = 360;
const minRadius = 7;
const maxRadius = 13;
const maxSpin = 2;
const maxSpeed = 4;
const opacity = 1;
const colors = [
  0x666666, 0x6F6E70, 0x58585B,
  0xA5Ce44, 0x8CC63E, 0xB9D54E
];

export default class Triangle {

  constructor(state) {
    this.ref = new PIXI.Graphics();
    this.setState(state);
  }

  allocate(state) {
    this.setState(state);
    return this;
  }

  release() {
    this.active = false;
    return this;
  }

  setState({ origin, scale }) {
    this.x = origin.x / scale;
    this.y = origin.y / scale;

    this.active = true;
    this.angle = randomFloat(degrees);
    this.color = colors[randomInt(colors.length - 1)];
    this.radius = randomFloat(minRadius, maxRadius) / scale;
    this.rotation = randomFloat(degrees);
    this.spin = randomFloat(~maxSpin, maxSpin);
    this.velocity = randomFloat(1, maxSpeed) / scale;

    this.ref.position.x = this.x;
    this.ref.position.y = this.y;
    this.ref.rotation = radians(this.rotation);
  }

  update() {
    this.x += this.velocity * cos(this.angle * PI / 180);
    this.ref.position.x = this.x;

    this.y += this.velocity * sin(this.angle * PI / 180);
    this.ref.position.y = this.y;

    this.rotation += this.spin;
    this.ref.rotation = radians(this.rotation);
  }

  render(tickOffset) {
    let point = 2;
    let sides = 3;

    this.ref.clear();
    this.ref.beginFill(this.color, opacity);
    this.ref.moveTo(0, -this.radius);

    while (point) {
      const position = PI2 * point / sides;

      this.ref.lineTo(
        sin(position) * this.radius,
        -cos(position) * this.radius
      );

      point -= 1;
    }
  }

};
