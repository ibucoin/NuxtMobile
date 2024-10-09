import presetIcons from '@unocss/preset-icons'
import { defineConfig, presetAttributify, presetUno, transformerDirectives } from 'unocss'

export default defineConfig({
  transformers: [
    transformerDirectives(),
  ],
  theme: {
    colors: {
      ring: 'hsl(240 5.9% 10%)',
      primary: 'hsl(240 5.9% 10%)',
    },
  },
  presets: [
    presetAttributify({

    }),
    presetUno(),
    presetIcons({
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },
    }),
  ],
})
