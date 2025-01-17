import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {},
    fontFamily: {
      proximanovaLight: [
        'var(--font-proximanova-light)',
        ...defaultTheme.fontFamily.sans,
      ],
      proximanovaRegular: [
        'var(--font-proximanova-regular)',
        ...defaultTheme.fontFamily.sans,
      ],
      proximanovaSemibold: [
        'var(--font-proximanova-semibold)',
        ...defaultTheme.fontFamily.sans,
      ],
    },
    colors: {
      black: '#000000',
      white: '#ffffff',
      transparent: 'transparent',
      current: 'currentColor',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1rem',
        lg: '2rem',
        xl: '0',
      },
      screens: {
        xl: '75rem',
      },
    },
  },
  plugins: [],
}
export default config
