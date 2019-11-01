import React from 'react'
import PropTypes from 'prop-types'
// import { useStaticQuery, graphql } from 'gatsby'

// import { TransitionPortal } from 'gatsby-plugin-transition-link'

import GlobalStyles from '../../styles'
import Header from '../Header'
import Footer from '../Footer'
import Aside from '../Aside'
// import Sidebar from '../Sidebar'
// import MenuBar from '../MenuBar'

import * as S from './styled'

const Layout = ({ children }) => {
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
    <>
      <GlobalStyles />
      <Header />
      <S.Wrapper>
        <S.Main>{children}</S.Main>
        <Aside />
      </S.Wrapper>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
