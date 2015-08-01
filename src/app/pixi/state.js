const scale = window.devicePixelRatio || 1

let state = {
  scale,
  width: window.innerWidth / scale,
  height: 563 / scale,
  origin: { x: 285, y: 230 },
  triangles: [],
  ticks: 0
}

export default state
