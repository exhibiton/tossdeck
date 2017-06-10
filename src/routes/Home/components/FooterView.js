import React from 'react'
import logos from '../assets/logos.png'

const FooterView = () =>
  <div>
    <div className='footer-top pvl phs'>
      <div className='flex-col flex-vc'>
        <div className='t2'>
            Investors and advisors who have joined our companies have invested in other companies like:
        </div>
        <div className='ptm pbs'>
          <img src={logos} />
        </div>
      </div>
    </div>
    <div className='footer-bottom flex-row flex-vc flex-hc t4 color-white phm'>
      Disclaimer - Please don't worry about us stealing your idea. We're busy with our own for years to come :)
    </div>
  </div>

export default FooterView
