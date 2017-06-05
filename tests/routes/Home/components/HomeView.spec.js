import React from 'react'
import { HomeView } from 'routes/Home/components/HomeView'
import { render } from 'enzyme'

describe('(View) Home', () => {
  let _component

  beforeEach(() => {
    _component = render(<HomeView />)
  })

  it('Renders our CTA button', () => {
    const cta = _component.find('.btn')
    expect(cta).to.exist()
    expect(cta.text()).to.match(/Send Your Deck Now/)
  })

  it('Renders an awesome logo image', () => {
    const duck = _component.find('img')
    expect(duck).to.exist()
    expect(duck.attr('alt')).to.match(/TossDeck/)
  })
})
