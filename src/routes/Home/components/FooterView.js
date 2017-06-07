import React from 'react'
import logos from '../assets/logos.png'

const FooterView = () =>
  <div>
    <div className='footer-top pvl phs'>
      <div className='flex-col flex-vc'>
        <div className='t2'>
            Investors and advisors who have joined our companies have invested in other companies like:
        </div>
        <div className='pvl'>
          <img src={logos} />
        </div>
      </div>
    </div>
    <div className='footer-bottom flex-row flex-vc flex-hc t4 color-white phm'>
      When sending your deck, please use links like dropbox or google docs instead of attachments.
    </div>
  </div>

export default FooterView
