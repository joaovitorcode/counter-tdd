import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Home from '../src/pages/index'

describe('Home', () => {
  it('should renders home component', () => {
    render(<Home />)

    const heading = screen.getByRole('heading', { name: 0 })

    expect(heading).toBeInTheDocument()
  })

  it('should start with value 0', () => {
    render(<Home />)

    const heading = screen.getByRole('heading', { name: 0 })

    expect(heading).toBeInTheDocument()
  })

  it('should decrement value when decrement button is clicked', async () => {
    render(<Home />)

    const decrement = screen.getByRole('button', { name: 'Decrementar' })
    const heading = screen.getByRole('heading', { name: 0 })

    await userEvent.click(decrement)
    expect(heading).toHaveTextContent(/^-1$/)
  })

  it('should increment value when increment button is clicked', async () => {
    render(<Home />)

    const increment = screen.getByRole('button', { name: 'Incrementar' })
    const heading = screen.getByRole('heading', { name: 0 })

    await userEvent.click(increment)
    expect(heading).toHaveTextContent(/^1$/)
  })

  it('should change the jump when input jump value is changed', async () => {
    render(<Home />)

    const heading = screen.getByRole('heading', { name: 0 })
    const increment = screen.getByRole('button', { name: 'Incrementar' })
    const input = screen.getByDisplayValue(1)

    await userEvent.type(input, '10')
    await userEvent.click(increment)
    // O userEvent.type só aceita dados do tipo string
    // Logo, ao invés de fazer uma soma, ele faz uma concatenação
    expect(heading).toHaveTextContent(/^110$/)
  })
})
