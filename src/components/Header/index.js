import React from 'react'
import { Link } from 'gatsby'

import * as S from './styled'

const Header = () => {
  // const { site } = useStaticQuery(
  //   graphql`
  //     query {
  //       site {
  //         siteMetadata {
  //           title
  //           description
  //         }
  //       }
  //     }
  //   `
  // )

  return (
    <S.Header>
      <S.Logo />
      <S.Menu>
        <S.Nav>
          <S.NavLink>
            <Link to='/'>Link 1</Link>
          </S.NavLink>
          <S.NavLink>
            <Link to='/'>Link 2</Link>
          </S.NavLink>
          <S.NavLink>
            <Link to='/'>Link 3</Link>
          </S.NavLink>
          <S.NavLink>
            <Link to='/'>Link 4</Link>
          </S.NavLink>
        </S.Nav>
      </S.Menu>
    </S.Header>
  )
}

export default Header
