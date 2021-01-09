import { createMuiTheme } from '@material-ui/core/styles';

const aekeBlue = '#0B72B9';
const aekeOrange = '#FFBA60';

export default createMuiTheme({
    palette: {
        common: {
            blue: `${aekeBlue}`,
            orange: `${aekeOrange}`,
        },
        primary: {
            main: `${aekeBlue}`
        },
        secondary: {
            main: `${aekeOrange}`
        }
    },
    typography: {
        h3: {
            fontWeight: 300
        }
    }
})