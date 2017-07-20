/*eslint-disable no-console */
import webpack from 'webpack'
import webpackConfig from '../webpack.config.prod.babel'
import colors from 'colors'

process.env.NODE_ENV = 'production'

console.log('bundling, please wait...'.yellow)

webpack(webpackConfig).run((err, stats) => {
  if (err) {
    console.log(err.bold.red)
    return 1
  }

  const jsonStats = stats.toJson()

  if (jsonStats.hasErrors) {
    return jsonStats.errors.map(error => console.log(error.red))
  }

  if (jsonStats.hasWarnings) {
    return jsonStats.warnings.map(warning => console.log(warning.yellow))
  }

  console.log(`Webpack stats: ${stats}`)
  console.log('build succeeded'.green)
})
