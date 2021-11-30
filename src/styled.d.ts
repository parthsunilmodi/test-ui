import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string
    colors: {
      secondaryColor: string,
      primaryColor: string,
      dark: string,
      background: string,
      greyDark: string,
    }
  }
}
