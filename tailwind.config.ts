import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'text-default': 'var(--text, #4D4D4D)',
        'black-100': 'var(--black-100)',
        'black-200': 'var(--black-200)',
        'black-300': 'var(--black-300)',
        'black-400': 'var(--black-400)',
        'black-500': 'var(--black-500)',
        'black-600': 'var(--black-600)',
        'black-700': 'var(--black-700)',
        'black-800': 'var(--black-800)',
        'black-900': 'var(--black-900)',
        'blue-100': 'var(--blue-100)',
        'blue-200': 'var(--blue-200)',
        'blue-300': 'var(--blue-300)',
        'blue-400': 'var(--blue-400)',
        'blue-500': 'var(--blue-500)',
        'blue-600': 'var(--blue-600)',
        'blue-700': 'var(--blue-700)',
        'blue-800': 'var(--blue-800)',
        'blue-900': 'var(--blue-900)',
        'orange-100': 'var(--orange-100)',
        'orange-200': 'var(--orange-200)',
        'orange-300': 'var(--orange-300)',
        'orange-400': 'var(--orange-400)',
        'orange-500': 'var(--orange-500)',
        'orange-600': 'var(--orange-600)',
        'orange-700': 'var(--orange-700)',
        'orange-800': 'var(--orange-800)',
        'orange-900': 'var(--orange-900)',
        'palette-black': 'var(--palette-black)',
        'palette-blue-100': 'var(--palette-blue-100)',
        'palette-blue-200': 'var(--palette-blue-200)',
        'palette-blue-300': 'var(--palette-blue-300)',
        'palette-blue-500': 'var(--palette-blue-500)',
        'palette-blue-600': 'var(--palette-blue-600)',
        'palette-blue-700': 'var(--palette-blue-700)',
        'palette-blue-800': 'var(--palette-blue-800)',
        'palette-blue-900': 'var(--palette-blue-900)',
        'palette-orange-100': 'var(--palette-orange-100)',
        'palette-orange-200': 'var(--palette-orange-200)',
        'palette-orange-300': 'var(--palette-orange-300)',
        'palette-orange-400': 'var(--palette-orange-400)',
        'palette-orange-500': 'var(--palette-orange-500)',
        'palette-orange-600': 'var(--palette-orange-600)',
        'palette-orange-700': 'var(--palette-orange-700)',
        'palette-orange-800': 'var(--palette-orange-800)',
        'palette-orange-900': 'var(--palette-orange-900)',
        'palette-red-100': 'var(--palette-red-100)',
        'palette-red-200': 'var(--palette-red-200)',
        'palette-red-300': 'var(--palette-red-300)',
        'palette-red-400': 'var(--palette-red-400)',
        'palette-red-500': 'var(--palette-red-500)',
        'palette-red-600': 'var(--palette-red-600)',
        'palette-red-700': 'var(--palette-red-700)',
        'palette-red-800': 'var(--palette-red-800)',
        'palette-red-900': 'var(--palette-red-900)',
        'palette-white': 'var(--palette-white)',
        'palette-yellow-100': 'var(--palette-yellow-100)',
        'palette-yellow-200': 'var(--palette-yellow-200)',
        'palette-yellow-300': 'var(--palette-yellow-300)',
        'palette-yellow-500': 'var(--palette-yellow-500)',
        'palette-yellow-600': 'var(--palette-yellow-600)',
        'palette-yellow-700': 'var(--palette-yellow-700)',
        'palette-yellow-800': 'var(--palette-yellow-800)',
        'palette-yellow-900': 'var(--palette-yellow-900)',
        'red-100': 'var(--red-100)',
        'red-200': 'var(--red-200)',
        'red-300': 'var(--red-300)',
        'red-400': 'var(--red-400)',
        'red-500': 'var(--red-500)',
        'red-600': 'var(--red-600)',
        'red-700': 'var(--red-700)',
        'red-800': 'var(--red-800)',
        'red-900': 'var(--red-900)',
        'semantic-bg': 'var(--semantic-bg)',
        'semantic-bg-box': 'var(--semantic-bg-box)',
        'semantic-bg-header': 'var(--semantic-bg-header)',
        'semantic-bg-icon': 'var(--semantic-bg-icon)',
        'semantic-box-text': 'var(--semantic-box-text)',
        'semantic-color-bg-brand': 'var(--semantic-color-bg-brand)',
        'semantic-color-bg-brand-b': 'var(--semantic-color-bg-brand-b)',
        'semantic-shadow-long-black': 'var(--semantic-shadow-long-black)',
        'semantic-shadow-object-black': 'var(--semantic-shadow-object-black)',
        'semantic-shadow-object-white': 'var(--semantic-shadow-object-white)',
        'semantic-text-box': 'var(--semantic-text-box)',
        'yellow-100': 'var(--yellow-100)',
        'yellow-200': 'var(--yellow-200)',
        'yellow-300': 'var(--yellow-300)',
        'yellow-400': 'var(--yellow-400)',
        'yellow-500': 'var(--yellow-500)',
        'yellow-600': 'var(--yellow-600)',
        'yellow-700': 'var(--yellow-700)',
        'yellow-800': 'var(--yellow-800)',
        'yellow-900': 'var(--yellow-900)',
      },
      fontFamily: {
        'body-EN-medium': 'var(--body-EN-medium-font-family)',
        'body-KR-large': 'var(--body-KR-large-font-family)',
        'body-KR-medium': 'var(--body-KR-medium-font-family)',
        'body-KR-small': 'var(--body-KR-small-font-family)',
        'KR': ['Noto Sans KR', 'sans-serif'],
        varela: ['Varela', 'sans-serif'],
        button: 'var(--button-font-family)',
        caption: 'var(--caption-font-family)',
        'headline-01': 'var(--headline-01-font-family)',
        'headline-02': 'var(--headline-02-font-family)',
        'headline-03': 'var(--headline-03-font-family)',
        'headline-04': 'var(--headline-04-font-family)',
        'KR-button': 'var(--KR-button-font-family)',
        'KR-label': 'var(--KR-label-font-family)',
        'subtitle-KR-large': 'var(--subtitle-KR-large-font-family)',
        'subtitle-KR-medium': 'var(--subtitle-KR-medium-font-family)',
        'subtitle-KR-small': 'var(--subtitle-KR-small-font-family)',
        'temperature-14': 'var(--temperature-14-font-family)',
        'temperature-16': 'var(--temperature-16-font-family)',
        'temperature-18': 'var(--temperature-18-font-family)',
        'temperature-60': 'var(--temperature-60-font-family)',
      },
      boxShadow: {
        '': 'var(--)',
        'icon-button': 'var(--icon-button)',
      },
      lineHeight:{
        '130': '1.3',
      },
      letterSpacing: {
        '-0.32': '-0.32px',
        '-0.28': '-0.28px',
        '-0.02': '-0.02em',
      },
      opacity: {
        'sds-size-stroke-border': 'var(--sds-size-stroke-border)',
      },
      backgroundColor: {
        'black-121212': 'var(--Black, #121212)',
      },
      padding: {
        'sds-200': 'var(--sds-size-space-200)',
        'blur-10': 'var(--Blur-10, 10px)',
      },
      gap: {
        '4': '4px',
      },
      borderRadius: {
        'sds-200': 'var(--sds-size-radius-200)',
      },
      blur: {
        2: '2px',
        4: '4px',
        20: '20px',
      },
      borderWidth: {
        1: '1px',
      },
      spacing: {
        '1.5': '6px',
        '1':'4px',
      },
      // lineHeight: {
      //   '130%': '20.8px',
      // },
      boxShadowPc: {
        'custom': '0px 0px 2px 0px rgba(0, 0, 0, 0.05), 4px 4px var(--Blur-20, 20px) 0px rgba(0, 0, 0, 0.05)',
      },
      
    },
  },
  plugins: [],
};

export default config;
