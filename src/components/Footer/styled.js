import styled from 'styled-components'

export const Footer = styled.footer`
  grid-area: footer;
  background: var(--primary-color);
  padding: 20px;
  color: #fff;
  display: flex;
  justify-content: space-between;
`

export const Stamp = styled.div`
  display: flex;
  p {
    max-width: 310px;
    font-size: 12px;
    line-height: 18px;
  }
  margin-right: 64px;
`

export const Label = styled.div`
  display: inline-block;
  min-width: 61px;
  height: 100%;
  background: #3a5a9a;
  margin-right: 20px;
`

export const Links = styled.div`
  display: inline-block;
  margin-right: 64px;
`

export const Social = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  a {
    color: #fff;
    svg {
      height: 24px;
      margin-right: 10px;
    }
  }
`
