import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --theme-background: #fff;
    --theme-background-secondary: #efefef;
    --theme-background-tertiary: #dcdcdc;
    --theme-text-color: #3d3d3d;
  }

  html.dark {
    --theme-background: #3d3d3d;
    --theme-background-secondary: #525252;
    --theme-background-tertiary: #656565;
    --theme-text-color: #fff;
  }

  body {
    background: var(--theme-background);
    color: var(--theme-text-color);
    font-family: 'Public Sans', sans-serif;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  a {
    color: var(--theme-text-color);
  }

  li {
    list-style-type: none;
  }

  *,*::before,*::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .carousel .control-dots .dot {
    background: var(--theme-text-color)
  }

  .carousel.carousel-slider .control-arrow {
    background: var(--theme-background);
    color: var(--theme-text-color);
  }
  .carousel .control-next.control-arrow:before {
    border-left: 8px solid var(--theme-text-color);
  }

  .carousel .control-prev.control-arrow:before {
    border-right: 8px solid var(--theme-text-color);
  }
`;
