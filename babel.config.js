module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        // extensions: [
        //   '.ios.ts',
        //   '.android.ts',
        //   '.ts',
        //   '.ios.tsx',
        //   '.android.tsx',
        //   '.tsx',
        //   '.jsx',
        //   '.js',
        //   '.json',
        // ],
        alias: {
          'containers': './src/containers',
          'components': './src/components',
          'utils': './src/utils',
          'hooks': './src/hooks',
          'styles': './src/styles',
          'providers': './src/providers',
        },
      },
    ],
  ],
};
