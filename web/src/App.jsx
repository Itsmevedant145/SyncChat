import { useState } from 'react'
import { Show, SignInButton, SignUpButton, UserButton } from '@clerk/react'

import './App.css'

function App() {
  

  return (
    <>
    <h1></h1>
        <Show when="signed-out">
          <SignInButton />
          <SignUpButton />
        </Show>
        <Show when="signed-in">
          <UserButton />
        </Show>
    </>
    
  )
}

export default App
