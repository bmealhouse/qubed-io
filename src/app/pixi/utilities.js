const PI2 = Math.PI * 2
const floor = Math.floor
const random = Math.random

const utilities = {

  radians: degrees => (degrees / 360) * PI2,

  randomFloat: (min, max) => {
    if (!max) [min, max] = [0, min]
    return min + random() * (max - min + 1)
  },

  randomInt: (min, max) => {
    if (!max) [min, max] = [0, min]
    return min + floor(random() * (max - min + 1))
  }

}

export default utilities
