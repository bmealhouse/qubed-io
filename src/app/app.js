import React from 'react'

/** Used for React dev tools */
window.React = React

let Content = React.createClass({

  render: function () {
    return (
      <div className='content'>&nbsp</div>
    )
  }

})

let PrimaryMessage = React.createClass({

  render: function () {
    return (
      <div className='primary-message'>
        {/*
        <div className='logo'>
          <svg version='1.1' id='logo' x='0px' y='0px' width='100%' height='100%' viewBox='0 0 100 100'>
            <g id='outline'>
              <polygon id='top' fill='#676767' points='50.7,11.6 50.7,11.6 25.4,26.2 32.5,30.3 50.7,19.7 50.7,19.7 69,30.3 76,26.2'/>
              <polygon id='bottom' fill='#4D4E4E' points='76,55.4 76,26.2 69,30.3 69,51.4 50.7,61.9 32.4,51.4 32.5,30.3 25.4,26.2 25.4,55.4 50.7,70 50.7,70 50.7,70 50.7,70 50.7,70 76,55.4 76,55.5 76,55.4 76,55.4'/>
            </g>
            <g id='cube'>
              <polyline id='left' fill='#8BC53F' points='50.7,59.2 34.7,50 34.7,31.5 50.7,40.6'/>
              <polygon id='top' fill='#B8D54F' points='50.7,40.6 34.7,31.5 50.7,22.3 66.7,31.5'/>
              <polygon id='right' fill='#A4CE44' points='50.7,59.2 66.7,50 66.7,31.5 50.7,40.6'/>
            </g>
            <g id='qubed'>
              <path id='q' fill='#A4CE44' d='M36.4,77.4c2,0,3.4,0.4,3.4,4.3c0,3.7-1.4,4.2-3.4,4.2c-2.1,0-3.4-0.4-3.4-4.2C32.9,77.8,34.4,77.4,36.4,77.4z M36.4,84.2c1.2,0,1.5-0.4,1.5-2.5c0-2.3-0.4-2.6-1.5-2.6c-1.1,0-1.5,0.2-1.5,2.6C34.8,83.8,35.1,84.2,36.4,84.2z M36.8,86.3c0.2,0.7,1.2,0.5,1.8,0.4v1.4c-1.3,0.2-2.8-0.2-2.9-1.8H36.8z'/>
              <path id='u' fill='#A4CE44' d='M40.7,77.5h1.9v4.7c0,1.5,0.2,2,1.4,2c1.1,0,1.3-0.5,1.3-2v-4.7h1.9v4.7c0,3.7-1.8,3.7-3.2,3.7c-1.6,0-3.3,0.1-3.3-3.7V77.5z'/>
              <path id='b' fill='#A4CE44' d='M48.3,77.5h3.6c1.8,0,2.4,1,2.4,2.3c0,0.7-0.4,1.7-1.2,1.8c0.8,0.1,1.4,0.9,1.4,1.9c0,1.7-0.8,2.5-2.6,2.5h-3.6V77.5z M51.8,80.7c0.5,0,0.7-0.3,0.7-0.8c0-0.7-0.4-0.8-0.7-0.8h-1.5v1.6H51.8z M51.8,84.3c0.5,0,0.8-0.3,0.8-1c0-0.5-0.2-1-0.8-1h-1.6v2H51.8z'/>
              <path id='e' fill='#A4CE44' d='M55.3,79.3c0-1.6,1.2-1.8,2-1.8c0,0,2.7,0,3.7,0.2v1.6h-3.2c-0.6,0-0.6,0.3-0.6,0.6v1l3.3,0.1v1.6l-3.3,0.1v1c0,0.6,0.4,0.6,0.7,0.6H61v1.6c-0.9,0.1-3.6,0.2-3.6,0.2c-0.7,0-2.1-0.1-2.1-1.8V79.3z'/>
              <path id='d' fill='#A4CE44' d='M61.8,77.5h3.7c2.4,0,2.9,2,2.9,4.2c0,2.7-0.9,4.2-2.9,4.2h-3.7V77.5z M65.4,84.3c0.9,0,1.2-0.9,1.2-2.6c0-2.2-0.4-2.6-1.2-2.6h-1.7v5.2H65.4z'/>
            </g>
          </svg>
        </div>
        <div className='slogan tk-fira-sans-2'>
          <h1>Simple, elegant, &amp functional JavaScript development. Done right the first time.</h1>
        </div>
        */}
      </div>
    )
  }

})

let App = React.createClass({

  render: function () {
    return (
      <div>
        <PrimaryMessage/>
        <Content/>
      </div>
    )
  }

})

const appNode = document.getElementById('app')
React.render(<App/>, appNode)

// import galaxy from './pixi/galaxy'
// import renderer from './pixi/renderer'
// import state from './pixi/state'
//
// renderer.init(state)
// galaxy.init(renderer, state)
