import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
  color: {
    grayDark: "#2d2d2d", // dark gray
    grayLight: "#f3f3f3", // light gray
    greenDark: "#00af43", // green
    orangeDark: "#ff9900", // orange
  },
  fontFamily: {
    main: `"Roboto", sans-serif`
  },
  fontSize: {
    default: "1rem",
    small: "1.4rem",
    medium: "1.6rem",
    large: "2rem",
    xLarge: "2.6rem",
    xxLarge: "3rem"
  },
  mediaQuery: {
    xSmall: "320px",
    small: "480px",
    medium: "768px",
    large: "992px",
    xLarge: "1200px"
  }
};

export default theme;