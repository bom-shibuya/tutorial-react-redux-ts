import * as React from 'react'

export interface IProps {
  onSubmit: (value: string) => void
}

const AddTodoForm = ({ onSubmit }: IProps) => {
  let input: HTMLInputElement | null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input || !input.value) {
      return
    }
    onSubmit(input.value)
    input.value = ''
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={node => (input = node)} />
        <button type="submit">Add</button>
      </form>
    </div>
  )
}

export default AddTodoForm
