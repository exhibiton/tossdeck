import React from 'react'
import logo from '../assets/tossDeck.png'
import iMac from '../assets/iMac.png'

const HeaderView = () =>
  <div className='header'>
    <div className='limit-width flex-col'>

      <div className='pvs flex-row flex-ha'>
        <img className='color-dark-blue ' alt='TossDeck' src={logo} />
        <a href='mailto:inbox@tossdeck.com?subject=TossDeck PitchDeck Review&body=Hey,
          here is a link to our Pitch Deck. Thanks for the help!'
          className='btn-link signup-btn flex-row flex-vc'>
          <div className='t4 font-semibold color-white pas'>
            Send Deck
          </div>
        </a>
      </div>

      <div className='header__content flex-row flex-ha'>
        <div className='flex-col mtm mbm'>
          <h1 className='color-white header-title mbm'>
            Toss your pitch <br />
            deck, receive free feedback
          </h1>
          <a href='mailto:inbox@tossdeck.com?subject=TossDeck PitchDeck Review&body=Hey,
            here is a link to our Pitch Deck. Thanks for the help!'
            className='flex-row flex-vc flex-hc'>
            <div className='btn t4 color-white'>
              Send Your Deck Now
            </div>
          </a>
        </div>
        <div>
          <img className='desktop-only' src={iMac} />
        </div>
      </div>
    </div>

  </div>

export default HeaderView
