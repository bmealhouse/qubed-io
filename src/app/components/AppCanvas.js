import React from 'react'
import SvgLogo from './SvgLogo'
import ContentSection from './ContentSection'

export default React.createClass({

  render () {
    return (
      <div>
        <SvgLogo/>
        <main>
          <ContentSection>Simple, elegant, &amp; functional JavaScript development. Done right the first time.</ContentSection>
          <ContentSection>Simple, elegant, &amp; functional JavaScript development. Done right the first time.</ContentSection>
          <ContentSection>Simple, elegant, &amp; functional JavaScript development. Done right the first time.</ContentSection>
          <ContentSection>Simple, elegant, &amp; functional JavaScript development. Done right the first time.</ContentSection>
          <ContentSection>Simple, elegant, &amp; functional JavaScript development. Done right the first time.</ContentSection>
        </main>
      </div>
    )
  }

})
