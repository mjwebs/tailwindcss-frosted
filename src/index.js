const plugin = require('tailwindcss/plugin')

module.exports = plugin.withOptions(
  ({} = {}) => {
    return function({
      addComponents,
      theme,
      variants
    }) {

      addComponents(
        [{
            '.frosted': {
              'background-color': 'rgba(255, 255, 255, 0.2)',
              'backdrop-filter': 'blur(20px) saturate(160%) contrast(45%) brightness(140%)',
              '-webkit-backdrop-filter': 'blur(20px) saturate(160%) contrast(45%) brightness(140%)'
            }
          },

        ])
    }
  },
  () => ({})
)