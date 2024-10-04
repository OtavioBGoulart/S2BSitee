import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
    colors: {
        primary: {
            light: "#003c5d",
            lighter: "#2088c0",
            default: "blue"
        },
        secondary: {
            light: '#f5f1f1',
            lighter: 'white',
            default: '#06EFF3',
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
    }
}