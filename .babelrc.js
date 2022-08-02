const getEnvironmentConfig = ({isProductionEnv}) => {
    return {
      plugins: [
        [
          'emotion',
          isProductionEnv
            ? {hoist: true}
            : {
                sourceMap: true,
                autoLabel: true,
              },
        ],
        [
          'const-enum',
          {
            transform: 'constObject',
          },
        ],
        '@babel/plugin-transform-react-jsx',
        [
          '@babel/plugin-transform-typescript',
          {
            isTSX: true,
            allExtensions: true,
          },
        ],
        '@babel/plugin-proposal-class-properties',
        '@babel/plugin-transform-runtime',
      ],
    };
  };
  
  const config = {
    presets: [
      [
        '@babel/preset-env',
        {
          targets: {
            chrome: '58',
            ie: '11',
          },
        },
      ],
    ],
    env: {
      production: getEnvironmentConfig({isProductionEnv: true}),
      development: getEnvironmentConfig({isProductionEnv: false}),
      test: getEnvironmentConfig({isProductionEnv: false}),
    },
  };
  
  module.exports = config;
  