import React from 'react'
import Header from './Header'
import PrimaryMessage from './PrimaryMessage'
import Footer from './Footer'

export default React.createClass({

  render () {
    return (
      <div>
        <Header/>
        <PrimaryMessage/>
        <Footer/>
      </div>
    )
  }

})
