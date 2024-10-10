import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
    colors: {
        primary: {
            light: "#003c5d",
            lighter: "#80c6e8",
            default: "blue"
        },
        secondary: {
            light: '#f5f1f1',
            lighter: 'white',
            dark: 'gray',
            default: '#d1d1d1',
        },
        terciary: {
            light: '#007d64',
            lighter: '#66d1b3',
            dark: 'gray',
            default: '#d1d1d1',
        }
    },
    fonts: {
        main: "'Roboto', sans-serif",
        heading: "'Poppins', sans-serif",
        content: "'Montserrat', sans-serif",
    },
    fontSizes: {
        small: "0.8rem",
        medium: "1rem",
        xmedium: "1.2rem",
        large: "1.5rem",
        xlarge: "1.8rem",
    }
}