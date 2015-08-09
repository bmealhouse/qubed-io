import React from 'react'
import AppCanvas from './components/AppCanvas'
require('./less/main.less')

// Used for React dev tools
window.React = React

const appNode = document.getElementById('app')
React.render(<AppCanvas/>, appNode)

import galaxy from './pixi/galaxy'
import renderer from './pixi/renderer'
import state from './pixi/state'

renderer.init(state)
galaxy.init(renderer, state)
