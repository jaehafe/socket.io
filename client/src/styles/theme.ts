import { ThemeConfig, extendTheme } from '@chakra-ui/react';

const theme = {
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  styles: {
    global: {
      body: {
        margin: 0,
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen','Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',sans-serif",
        '-webkit-font-smoothing': 'antialiased',
        '-moz-osx-font-smoothing': 'grayscale',
      },

      code: {
        fontFamily:
          "source-code-pro, Menlo, Monaco, Consolas, 'Courier New',monospace",
      },
    },
  },
};

export default extendTheme(theme);

// import { extendTheme, type ThemeConfig } from '@chakra-ui/react';

// // 2. Add your color mode config
// const config: ThemeConfig = {
//   initialColorMode: 'dark',
//   useSystemColorMode: false,
// };

// // 3. extend the theme
// const theme = extendTheme({ config });

// export default theme;
