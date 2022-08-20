import 'styled-components';

declare module "styled-components" {
  type ThemeType = {
    theme: {
      COLORS: {
        BACKGROUND: string;
        TEXT: string;
        ALERT: string;
        PRIMARY_900: string;
        PRIMARY_800: string;
      };
      FONTS: {
        REGULAR: string;
        MEDIUM: string;
        BOLD: string;
      };
    };
  };

  export interface DefaultTheme extends ThemeType {}
}
