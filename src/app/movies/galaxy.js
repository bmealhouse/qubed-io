'use strict'

let state = {
  particles: [],
  stage: {},
  tickCount: 0
}

const CREATE_INTERVAL = 4
const MAX_DEGREES = 360
const RADIANS = 2 * Math.PI
const PARTICLE = {
  MAX_ROTATION: 2,
  MIN_SIZE: 5,
  MAX_SIZE: 15,
  MAX_SPEED: 4,
  OPACITY: 0.5,
  SIDES: 3
}

let calcx = (angle) => Math.cos(angle * Math.PI / 180)
let calcy = (angle) => Math.sin(angle * Math.PI / 180)
let radians = (degrees) => (degrees / MAX_DEGREES) * RADIANS

function setState () {
  state.stage.width = env.windowWidth
  state.stage.height = env.windowHeight
  state.stage.origin = {
    x: 285,
    y: 230
  }

  // state.stage.origin = {
  //   x: env.windowWidth / 2,
  //   y: env.windowHeight / 2
  // }
}

function random (min, max) {
  if (!max) {
    max = min
    min = 0
  }

  return min + Math.floor(Math.random() * (max - min))
}

function createColor () {
  let colors = [
    '#666666', '#6D6E70', '#58585B',
    '#A5CE44', '#8CC63E', '#B9D54E'
  ]

  return colors[random(colors.length)]
}

function createParticle () {
  let particle = {

    x: state.stage.origin.x,
    y: state.stage.origin.y,

    angle: random(MAX_DEGREES),
    radius: random(PARTICLE.MIN_SIZE, PARTICLE.MAX_SIZE),
    rotation: random(MAX_DEGREES),

    movementSpeed: random(1, PARTICLE.MAX_SPEED),
    rotationSpeed: random(~PARTICLE.MAX_ROTATION, PARTICLE.MAX_ROTATION)

  }

  particle.instance = Path.polygon(
    particle.x, particle.y,
    particle.radius, PARTICLE.SIDES
  )

  particle.instance.attr({
    fillColor: createColor(),
    opacity: PARTICLE.OPACITY,
    rotation: radians(particle.rotation)
  })

  return particle
}

function nextTick () {
  let outOfBounds = (particle) =>
    particle.x < 0 || particle.x > state.stage.width ||
    particle.y < 0 || particle.y > state.stage.height

  if (state.tickCount % CREATE_INTERVAL === 0) {
    let particle = createParticle()

    particle.instance.addTo(stage)
    state.particles.push(particle)
  }

  for (let i = 0; i < state.particles.length; i += 1) {
    state.tickCount += 1

    let particle = state.particles[i]

    if (outOfBounds(particle)) {
      particle.instance.remove()
      state.particles.splice(i, 1)
      continue
    }

    particle.x += particle.movementSpeed * calcx(particle.angle)
    particle.instance.attr('x', particle.x)

    particle.y += particle.movementSpeed * calcy(particle.angle)
    particle.instance.attr('y', particle.y)

    particle.rotation += particle.rotationSpeed
    particle.instance.attr('rotation', radians(particle.rotation))
  }
}

setState()

env.on('change', setState)
stage.on('tick', nextTick)
