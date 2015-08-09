import R from 'ramda'
import loop from './loop'
import Triangle from './triangle'

const tickInterval = 10 // 4

const galaxy = {
  init: (renderer, state) => {

    const allocateTriangle = triangle => triangle.allocate(state)

    const createTriangle = () => {
      const triangle = new Triangle(state)
      renderer.addChild(triangle)
      state.triangles.push(triangle)
      console.log('triangles.length:', state.triangles.length)
    }

    const generateTriangle = R.compose(
      R.ifElse(R.isNil, createTriangle, allocateTriangle),
      R.find(R.propEq('active', false))
    )

    const outOfBounds = (triangle) =>
      triangle.x / state.scale < 0 ||
      triangle.y / state.scale < 0 ||
      triangle.x / state.scale > state.width / state.scale ||
      triangle.y / state.scale > state.height / state.scale

    const releaseTriangle = triangle => triangle.release()
    const releaseTriangles = R.compose(
      R.map(R.ifElse(R.isEmpty, R.identity, releaseTriangle)),
      R.filter(outOfBounds)
    )

    const updateTriangle = triangle => triangle.update()
    const updateTriangles = R.compose(
      R.map(R.ifElse(R.isEmpty, R.identity, updateTriangle)),
      R.filter(R.propEq('active', true))
    )

    loop.init(updateState, renderState)

    function updateState () {

      if (!R.mathMod(state.ticks, tickInterval)) {
        generateTriangle(state.triangles)
      }

      releaseTriangles(state.triangles)
      updateTriangles(state.triangles)
    }

    function renderState (tickOffset) {
      renderer.render(tickOffset, state)
      state.ticks = R.inc(state.ticks)
    }
  }
}

export default galaxy
