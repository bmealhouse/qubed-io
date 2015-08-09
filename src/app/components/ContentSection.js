import React from 'react'

export default React.createClass({

  propTypes: {
    children: React.PropTypes.node
  },

  render () {
    return (
      <section className='row content-row'>
        <div className='col-xs-12 col-sm-offset-6 col-sm-5'>
          <div className='content-box text-center'>
            <h1>{ this.props.children }</h1>
          </div>
        </div>
      </section>
    )
  }

})
