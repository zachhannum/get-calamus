// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    bg: string;
    fg: string;
    fgSecondary: string;
    primary: string;
    primaryShadow: string;
    secondary: string;
    secondaryShadow: string;
  }
}
