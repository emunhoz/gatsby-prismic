import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --primary-color: #192742;
  }

  body {
    margin: 0;
    /* font-family: -apple-system,BlinkMacSystemFont,Segoe UI,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Helvetica Neue,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol; */
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    font-variant: tabular-nums;
    -webkit-font-feature-settings: "tnum";
    font-feature-settings: "tnum";
    line-height: 1.5;
    color: rgba(0,0,0,.65);
    height: 100%;
  }

  a {
    color: var(--primary-color)
  }

  #gatsby-focus-wrapper {
    display: grid;
    grid-template: "header header header" 60px
                        "main main aside" 1fr
                        "footer footer footer" 120px / 1fr;
    min-height: 100vh;
  }
`
export default GlobalStyles
