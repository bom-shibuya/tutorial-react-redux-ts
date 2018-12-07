import * as React from 'react'
import { Link } from 'react-router-dom'
// import styled from 'styled-components'
// import { mq } from '../../styles'

export const Footer = () => (
  <footer>
    <ul>
      <li>
        <Link to="/">HOME</Link>
      </li>
      <li>
        <Link to="/todo">TODO</Link>
      </li>
      <li>
        <Link to="/counter">COUNTER</Link>
      </li>
    </ul>
  </footer>
)
