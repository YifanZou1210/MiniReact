// tailwind.config.js
export const theme = {
  extend: {
    animation: {
      'gradient-flow': 'gradientFlow 5s linear infinite', // 循环渐变动画
    },
    keyframes: {
      gradientFlow: {
        '0%': { backgroundPosition: '0% 50%' },
        '50%': { backgroundPosition: '100% 50%' },
        '100%': { backgroundPosition: '0% 50%' },
      },
    },
  },
}
export const plugins = []
