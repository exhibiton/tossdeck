import React from 'react'

const MidContentView = () =>
  <div className='limit-width flex-row-lt-desktop flex-hc-lt-desktop'>
    <div className='flex-row-desktop flex-ha-desktop flex-col-lt-desktop mvxl'>
      <div className='left mbm mts phm'>
        <div className='left-title t2 color-green font-bold'>
            Why?
        </div>
        <div className='desc mts t2'>
            As a <strong>first-time founder</strong>, making Pitch Decks for the first time is hard.
            We remember this and we’ve lately helped others with their presentations
            and found this <strong>rewarding and exciting.</strong>. So we decided to <strong>give back </strong>
            and create this website!
        </div>
      </div>
      <div className='right mbm mts phm'>
        <div className='color-green t2 font-bold'>
            Some background.
        </div>
        <div className='desc mts t2'>
            We’ve raised financing with our presentations on <strong>several occasions </strong> for multiple products
            and helped others do the same. To successfully raise money for our products, we have had to
            <strong> iterate countless times</strong> on our decks.
            We want to offer our help with this service for <strong>free</strong>.
        </div>
      </div>
    </div>
  </div>

export default MidContentView
