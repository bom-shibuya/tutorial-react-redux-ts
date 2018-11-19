import * as React from 'react'

export interface IProps {
  active: boolean
  children: React.ReactNode
  onClick: () => void
}

const Link: React.SFC<IProps> = ({ active, children, onClick }: IProps) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    onClick()
  }

  const activeLink = () => <span>{children}</span>

  const inactiveLink = () => (
    <a href="" onClick={handleClick}>
      {children}
    </a>
  )

  return active ? activeLink() : inactiveLink()
}

export default Link
