import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('renders the App component', () => {
    render(<App />);
    return expect(document.querySelector('.card')).to.not.be.null;
  })

  it('renders the App component...again', () => {
    render(<App />);
    return expect(document.querySelector('.card')).to.not.be.null;
  })
})
