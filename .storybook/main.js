const path = require('path')

module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  // Add any Storybook addons you want here: https://storybook.js.org/addons/
  addons: [],
  webpackFinal: async (config) => {
    config.resolve.alias['@'] = path.resolve(
      __dirname,
      '../src',
    )
    config.resolve.alias['@components'] = path.resolve(
      __dirname,
      '../src/components',
    )
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    })

    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve('babel-loader'),
      options: {
        presets: [
          ['react-app', { flow: false, typescript: true }],
        ],
      },
    })
    config.resolve.extensions.push('.ts', '.tsx')

    return config
  },
}
