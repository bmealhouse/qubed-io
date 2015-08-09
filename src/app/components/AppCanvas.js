import React from 'react'
import LogoSection from './LogoSection'
import ContentSection from './ContentSection'

export default React.createClass({

  render () {
    return (
      <div>
        <LogoSection/>
        <ContentSection>Simple, elegant, &amp; functional JavaScript development. Done right the first time.</ContentSection>
        <ContentSection>Simple, elegant, &amp; functional JavaScript development. Done right the first time.</ContentSection>
        <ContentSection>Simple, elegant, &amp; functional JavaScript development. Done right the first time.</ContentSection>
        <ContentSection>Simple, elegant, &amp; functional JavaScript development. Done right the first time.</ContentSection>
        <ContentSection>Simple, elegant, &amp; functional JavaScript development. Done right the first time.</ContentSection>
      </div>
    )
  }

})
