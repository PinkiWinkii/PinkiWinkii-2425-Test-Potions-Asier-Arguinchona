/**
 * Para una explicación detallada de cada propiedad de configuración, visita:
 * https://jestjs.io/docs/configuration
 */

/** @type {import('jest').Config} */
const config = {
  transform: {
    '^.+\\.js$': 'babel-jest',  // Le indica a Jest que use Babel para transformar archivos JS
  },
  // Aquí puedes agregar otras configuraciones de Jest según sea necesario
};

export default config;
