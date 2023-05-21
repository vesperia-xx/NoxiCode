import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const purpleTheme = createTheme({
    palette: {
        primary: {
            main: '#00b0f6'
        },
        secondary: {
            main: '#FFFFFF'
        },
    error: {
            main: red.A400
        }
    }
})