import React from 'react'
import g, { Div } from 'glamorous'

const Button = g.button({
  color: 'green'
})
export default function TopBar() {
  return (    
    <Div
      css={{
        width: '100vw',
        backgroundColor: 'darkgrey'
      }}
      >
        <Button>Salu2nes</Button>
      </Div>
  )
}
