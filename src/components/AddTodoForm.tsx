import * as React from 'react'

export interface IProps {
  onSubmit: (value: string) => void
  onAsyncSubmit: (value: string) => void
}

const AddTodoForm = ({ onSubmit, onAsyncSubmit }: IProps) => {
  let input: HTMLInputElement | null

  const submitValue = (
    e: React.MouseEvent,
    submitFunction: (value: string) => void
  ) => {
    e.preventDefault()
    if (!input || !input.value) {
      return
    }
    submitFunction(input.value)
    input.value = ''
  }

  const handleSubmit = (e: React.MouseEvent) => {
    submitValue(e, onSubmit)
  }

  const handleAsyncSubmit = (e: React.MouseEvent) => {
    submitValue(e, onAsyncSubmit)
  }
  return (
    <div>
      <form>
        <input type="text" ref={node => (input = node)} />
        <button onClick={handleSubmit} type="button">
          Add
        </button>
        <button onClick={handleAsyncSubmit} type="button">
          Async Add.
        </button>
      </form>
    </div>
  )
}

export default AddTodoForm
