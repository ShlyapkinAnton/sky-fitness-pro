import styled, { createGlobalStyle } from "styled-components";

// import StratosSkyengWoff from '../fonts/StratosSkyeng.woff'
// import StratosSkyengWoff2 from '../fonts/StratosSkyeng.woff2'

export const GlobalStyle = createGlobalStyle`
    :root {
        --color-main-bg-dark: #271A58;
        --color-main-bg-light: #FAFAFA;
        --color-bg-light-purple: #F9EBFF;
        --color-bg-palette-purple-90: #580EA2;
        --color-bg-palette-purple-110: #3F007D;
        --color-bg-palette-purple-100: #271A58;
        --color-bg-palette-grey-10: #F4F5F6;
        --color-bg-palette-grey-20: #D9D9D9;
        --monochrome-white-20: #FFF;
        --monochrome-black-20: #000;
        --color-button-bg: #140D40;
        --color-button-bg-hover: #2D1F79;
        --color-button-bg-active: #3B29A1;
        --color-text-light-grey: #F4F4FF;
        --color-text-light-green: #C7E957;
        --color-text-light-green-hover: #DAF289;
        --color-text-light-green-active: #EBFFAB;
    }

    @font-face {
    font-family:' StratosSkyeng';
    src: local('StratosSkyeng'), url('../../public/fonts/StratosSkyeng.woff2') format("woff2"),
         url('../../public/fonts/StratosSkyeng.woff') format("woff");
    font-style: normal;
}
    
    * {
        box-sizing: border-box;
    }

    html {
        line-height: 1.15;
        -webkit-text-size-adjust: 100%;
    }

    body,
    p,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        margin: 0;
    }

    main {
        display: block;
    }

    hr {
        box-sizing: content-box;
        height: 0;
        overflow: visible;
    }

    pre {
        font-family: monospace, monospace;
        font-size: 1em;
    }

    a {
        background-color: transparent;
        text-decoration: none;
        color: #fff;
    }

    abbr[title] {
        border-bottom: none;
        text-decoration: underline;
        text-decoration: underline dotted;
    }

    b,
    strong {
        font-weight: bolder;
    }

    code,
    kbd,
    samp {
        font-family: monospace, monospace;
        font-size: 1em;
    }

    small {
        font-size: 80%;
    }

    sub,
    sup {
        font-size: 75%;
        line-height: 0;
        position: relative;
        vertical-align: baseline;
    }

    sub {
        bottom: -0.25em;
    }

    sup {
        top: -0.5em;
    }

    img {
        border-style: none;
    }

    button,
    input,
    optgroup,
    select,
    textarea {
        font-family: inherit;
        font-size: 100%;
        line-height: 1.15;
        margin: 0;
    }

    button,
    input {
        overflow: visible;
    }

    button,
    select {
        text-transform: none;
    }

    button,
    [type="button"],
    [type="reset"],
    [type="submit"] {
        -webkit-appearance: button;
    }

    button::-moz-focus-inner,
    [type="button"]::-moz-focus-inner,
    [type="reset"]::-moz-focus-inner,
    [type="submit"]::-moz-focus-inner {
        border-style: none;
        padding: 0;
    }

    button:-moz-focusring,
    [type="button"]:-moz-focusring,
    [type="reset"]:-moz-focusring,
    [type="submit"]:-moz-focusring {
        outline: 1px dotted ButtonText;
    }

    fieldset {
        padding: 0.35em 0.75em 0.625em;
    }

    legend {
        box-sizing: border-box;
        color: inherit;
        display: table;
        max-width: 100%;
        padding: 0;
        white-space: normal;
    }

    progress {
        vertical-align: baseline;
    }

    textarea {
        overflow: auto;
    }

    [type="checkbox"],
    [type="radio"] {
        box-sizing: border-box;
        padding: 0;
    }

    [type="number"]::-webkit-inner-spin-button,
    [type="number"]::-webkit-outer-spin-button {
        height: auto;
    }

    [type="search"] {
        -webkit-appearance: textfield;
        outline-offset: -2px;
    }

    [type="search"]::-webkit-search-decoration {
        -webkit-appearance: none;
    }

    ::-webkit-file-upload-button {
        -webkit-appearance: button;
        font: inherit;
    }

    details {
        display: block;
    }

    summary {
        display: list-item;
    }

    template {
        display: none;
    }

    [hidden] {
        display: none;
    }

    button {
        background: none;
        font-family: inherit;
        color: inherit;
        outline: none;
        border: none;
    }

    body {
        font-family: 'StratosSkyeng', sans-serif;
        font-weight: 400;
        color: var(--monochrome-black-20);
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
            monospace;
    }

    ul {
        margin: 0;
        padding: 0;
    }

    li {
        list-style-type: none;
    }
`

export const Container = styled.div`
    max-width: 1190px;
    width: 100%;
    margin: 0 auto;
    padding: 0 15px;
`