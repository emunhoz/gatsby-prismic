import styled from 'styled-components'

export const PostSummary = styled.div`
  display: flex;
  background: #ffffff;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 40px;
  padding: 16px;
  transition: all 0.2s ease-in;
  &:hover {
    box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.1);
  }
`

export const Image = styled.img`
  margin-right: 16px;
  max-width: 302px;
`

export const Title = styled.h2`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 17px;
`

export const Description = styled.p`
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
`

export const Wrapper = styled.div`
  max-width: 980px;
  margin: 0 auto;
  display: flex;
  width: 100%;
`

export const Info = styled.div`
  display: flex;
  flex-flow: column;
`
