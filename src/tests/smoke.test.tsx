import { fireEvent, render, screen } from "@testing-library/react"

import Dummy from "@/components/Dummy"

describe("Smoke test", () => {
  it("should work", () => {
    expect(true).toBe(true)
  })
  it("should render component", () => {
    render(<Dummy id="1" />)
    expect(screen.getByRole("heading", { level: 2 })).toBeInTheDocument()
    expect(screen.queryAllByText(/test/i)).toHaveLength(0)
    expect(screen.queryByRole("button")).not.toBeInTheDocument()
  })
  it("should render component with name", () => {
    render(<Dummy id="1" name="Test" />)
    expect(screen.getByRole("heading", { level: 2 })).toBeInTheDocument()
    expect(screen.queryAllByText(/test/i)).toHaveLength(1)
  })
  it("should handle click on button", () => {
    const mock = vitest.fn()
    render(<Dummy id="1" name="Test" onClickHandler={mock} />)
    const button = screen.getByRole("button")
    fireEvent.click(button)
    expect(screen.getByRole("heading", { level: 2 })).toBeInTheDocument()
    expect(screen.queryAllByText(/test/i)).toHaveLength(1)
    expect(button).toBeInTheDocument()
    expect(mock).toHaveBeenCalledTimes(1)
  })
})
