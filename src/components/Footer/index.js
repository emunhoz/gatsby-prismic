import React from 'react'
import { Link } from 'gatsby'
import { Youtube, Twitter, Facebook } from 'styled-icons/boxicons-logos'
// import PropTypes from 'prop-types'

import * as S from './styled'

const Footer = () => (
  <S.Footer>
    <S.Stamp>
      <S.Label />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mollis
        quam urna, sed vehicula sapien sollicitudin non.
      </p>
    </S.Stamp>
    <S.Links>ahhhhh</S.Links>
    <S.Social>
      <Link to='/'>
        <Youtube /> Link 1
      </Link>
      <Link to='/'>
        <Twitter />
        Link 2
      </Link>
      <Link to='/'>
        <Facebook />
        Link 3
      </Link>
    </S.Social>
  </S.Footer>
)

export default Footer
