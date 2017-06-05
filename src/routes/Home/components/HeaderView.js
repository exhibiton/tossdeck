import React from 'react'
import logo from '../assets/tossDeck.svg'
import iMac from '../assets/iMac.png'

const HeaderView = () =>
  <div className='header'>
    <div className='flex-col'>

      <div className='pvs flex-row flex-ha'>
        <img className='color-dark-blue' alt='TossDeck' src={logo} />
        <a href='mailto:decks@tossdeck.com' className='btn-link signup-btn flex-row flex-vc'>
          <div className='t4 font-semibold color-white pas'>
            Send Deck
          </div>
        </a>
      </div>

      <div className='flex-row flex-ha' style={{ paddingRight: 335, paddingLeft: 335, paddingTop: 169 }}>
        <div className='flex-col mtm'>
          <h1 className='color-white header-title mbm'>
            Toss your pitch <br />
            deck, receive free feedback
          </h1>
          <a href='mailto:decks@tossdeck.com' className='flex-row flex-vc flex-hc'>
            <div className='btn t4 color-white'>
              Send Your Deck Now
            </div>
          </a>
        </div>
        <div>
          <img src={iMac} />
        </div>
      </div>
    </div>

  </div>

export default HeaderView
