import raf from 'raf'
import now from 'performance-now'

const fps = 60
const simTicks = 1000 / fps
let frameBuffer = 0
let lastTime = 0

const loop = {
  init: (updateState, renderState) => {

    frame()

    function frame () {

      // calculate the time that has elasped since the last frame
      const currentTime = now()
      let ticks = currentTime - lastTime

      // optionally correct any unexpected huge gaps in the elapsed time
      if (ticks > 100) ticks = simTicks

      // add elapsed time to the frame buffer
      frameBuffer += ticks

      // update the frame if the lag counter is greater than or
      // equal to the simulated ticks
      while (frameBuffer >= simTicks) {
        // capture the sprites previous positions
        // capturePreviousPositions(sprites)

        // update the logic
        updateState()

        // reduce the frame buffer by the simulated ticks
        frameBuffer -= simTicks
      }

      // calculate the lag offset. This tells us how far
      // we are into the next frame
      var lagOffset = frameBuffer / simTicks

      // render the sprites using the `lagOffset` to
      // extrapolate the sprites' positions
      renderState(lagOffset)

      // capture the current time to be used as the previous
      // time in the next frame
      lastTime = ticks

      raf(frame)
    }

  }
}

export default loop
