const scale = window.devicePixelRatio || 1
const width = window.innerWidth / scale
const height = window.innerHeight / scale

let state = {
  scale,
  width,
  height,
  origin: {
    x: width / 1.3,
    y: height
  },
  triangles: [],
  ticks: 0
}

export default state
