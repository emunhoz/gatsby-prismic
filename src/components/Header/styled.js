import styled from 'styled-components'
// import media from 'styled-media-query'

export const Header = styled.header`
  display: flex;
  grid-area: header;
  background: var(--primary-color);
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`

export const Logo = styled.div`
  width: 100px;
  height: 100%;
  display: inline-block;
  background: #3a5a9a;
`

export const Menu = styled.nav`
  display: flex;
`

export const Nav = styled.ul`
  list-style: none;
  display: flex;
`

export const NavLink = styled.li`
  margin: 0 20px;
  a {
    color: #fff;
  }
`
