import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('renders the App component', () => {
    render(<App />)
    expect(document.querySelector('.card')).to.not.be.null;
    screen.debug(); // prints out the jsx in the App component unto the command line
  })
  
  it('renders the App component...again', () => {
    render(<App />)
    expect(document.querySelector('.card')).to.not.be.null;
    screen.debug(); // prints out the jsx in the App component unto the command line
  })
})
