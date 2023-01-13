import {
  defineConfig,
  presetUno,
  presetIcons,
  transformerDirectives
} from 'unocss'

export default defineConfig({
  presets: [presetUno(), presetIcons()],
  transformers: [transformerDirectives()],
  theme: {
    colors: {
      gray: {
        20: '#F8F4EB',
        50: '#EFE6E6',
        100: '#DFCCCC',
        500: '#5E0000'
      },
      primary: {
        100: '#FFE1E0',
        300: '#FFA6A3',
        500: '#FF6B66'
      },
      secondary: {
        400: '#FFCD5B',
        500: '#FFC132'
      }
    },
    fontFamily: {
      dmsans: ['DM Sans', 'sans-serif'],
      montserrat: ['Montserrat', 'sans-serif']
    },
    breakpoints: {
      xs: '480px',
      sm: '768px',
      md: '1060px'
    }
  },
  rules: [
    [
      'content-evolvetext',
      {
        content: `url('@/assets/EvolveText.png')`
      }
    ],
    [
      'content-abstractwaves',
      {
        content: `url('@/assets/AbstractWaves.png')`
      }
    ],
    [
      'content-sparkles',
      {
        content: `url('@/assets/Sparkles.png')`
      }
    ],
    [
      'content-circles',
      {
        content: `url('@/assets/Circles.png')`
      }
    ]
  ]
})
