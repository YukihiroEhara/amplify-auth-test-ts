console.log("通ってる？");

const envLoader = {
  entry: "./src/index.tsx",
  output: { path: __dirname + "/dest", filename: "bundle.js" },
  module: {
    rules: [
      {
        test: /dummy-exports.js/,
        loader: "string-replace-loader",
        options: {
          multiple: [
            {
              search: "process.env.REACT_APP_AWS_REGION",
              replace: `"${process.env.REACT_APP_AWS_REGION}"`,
            },
            {
              search: "process.env.REACT_APP_AWS_APPSYNC_GRAPHQLENDPOINT",
              replace: `"${process.env.REACT_APP_AWS_APPSYNC_GRAPHQLENDPOINT}"`,
            },
            {
              search: "process.env.REACT_APP_AWS_REGION",
              replace: `"${process.env.REACT_APP_AWS_REGION}"`,
            },
            {
              search: "process.env.REACT_APP_AWS_APPSYNC_AUTHENTICATIONTYPE",
              replace: `"${process.env.REACT_APP_AWS_APPSYNC_AUTHENTICATIONTYPE}"`,
            },
            {
              search: "process.env.REACT_APP_AWS_COGNITO_IDENTITY_POOL_ID",
              replace: `"${process.env.REACT_APP_AWS_COGNITO_IDENTITY_POOL_ID}"`,
            },
            {
              search: "process.env.REACT_APP_AWS_REGION",
              replace: `"${process.env.REACT_APP_AWS_REGION}"`,
            },
            {
              search: "process.env.REACT_APP_AWS_USER_POOLS_ID",
              replace: `"${process.env.REACT_APP_AWS_USER_POOLS_ID}"`,
            },
            {
              search: "process.env.REACT_APP_AWS_USER_POOLS_WEB_CLIENT_ID",
              replace: `"${process.env.REACT_APP_AWS_USER_POOLS_WEB_CLIENT_ID}"`,
            },
            {
              search: "process.env.REACT_APP_AWS_COGNITO_USERNAME_ATTRIBUTES",
              replace: `"${process.env.REACT_APP_AWS_COGNITO_USERNAME_ATTRIBUTES}"`,
            },
            {
              search: "process.env.REACT_APP_AWS_COGNITO_SOCIAL_PROVIDERS",
              replace: `"${process.env.REACT_APP_AWS_COGNITO_SOCIAL_PROVIDERS}"`,
            },
            {
              search: "process.env.REACT_APP_AWS_COGNITO_SIGNUP_ATTRIBUTES",
              replace: `"${process.env.REACT_APP_AWS_COGNITO_SIGNUP_ATTRIBUTES}"`,
            },
            {
              search: "process.env.REACT_APP_AWS_COGNITO_MFA_CONFIGURATION",
              replace: `"${process.env.REACT_APP_AWS_COGNITO_MFA_CONFIGURATION}"`,
            },
            {
              search: "process.env.REACT_APP_AWS_COGNITO_MFA_TYPES",
              replace: `"${process.env.REACT_APP_AWS_COGNITO_MFA_TYPES}"`,
            },
            {
              search: "process.env.REACT_APP_PASSWORDPOLICYCHARACTERS",
              replace: `"${process.env.REACT_APP_PASSWORDPOLICYCHARACTERS}"`,
            },
            {
              search:
                "process.env.REACT_APP_AWS_COGNITO_VERIFICATION_MECHANISMS",
              replace: `"${process.env.REACT_APP_AWS_COGNITO_VERIFICATION_MECHANISMS}"`,
            },
          ],
        },
      },
    ],
  },
};

const babelLoader = {
  /* ビルドの起点となるファイルの設定 */
  entry: "./src/index.tsx",
  /* 出力されるファイルの設定 */
  output: { path: __dirname + "/dist", filename: "bundle.js" },
  /* ソースマップをファイル内に出力させる場合は以下を追加 */
  devtool: "inline-source-map",
  module: {
    /* loaderの設定 */
    rules: [
      {
        test: /\.(js|jsx)$/, // 対象となるファイルの拡張子（正規表現可）
        exclude: /node_modules/, // 除外するファイル/ディレクトリ（正規表現可）
        loader: "babel-loader", // 使用するloader
      },
    ],
  },
};

module.exports = [envLoader, babelLoader];

// module.exports = {
//   entry: "./src/index.tsx",
//   output: { path: __dirname + "/dest", filename: "bundle.js" },
//   module: {
//     rules: [
//       {
//         /* loaderの設定 */
//         loaders: [
//           {
//             test: /\.(ts|tsx)$/, // 対象となるファイルの拡張子（正規表現可）
//             exclude: /node_modules/, // 除外するファイル/ディレクトリ（正規表現可）
//             loader: "babel-loader", // 使用するloader
//           },
//         ],
//         test: /dummy-exports.js/,
//         loader: "string-replace-loader",
//         options: {
//           multiple: [
//             {
//               search: "process.env.REACT_APP_AWS_REGION",
//               replace: `"${process.env.REACT_APP_AWS_REGION}"`,
//             },
//             {
//               search: "process.env.REACT_APP_AWS_APPSYNC_GRAPHQLENDPOINT",
//               replace: `"${process.env.REACT_APP_AWS_APPSYNC_GRAPHQLENDPOINT}"`,
//             },
//             {
//               search: "process.env.REACT_APP_AWS_REGION",
//               replace: `"${process.env.REACT_APP_AWS_REGION}"`,
//             },
//             {
//               search: "process.env.REACT_APP_AWS_APPSYNC_AUTHENTICATIONTYPE",
//               replace: `"${process.env.REACT_APP_AWS_APPSYNC_AUTHENTICATIONTYPE}"`,
//             },
//             {
//               search: "process.env.REACT_APP_AWS_COGNITO_IDENTITY_POOL_ID",
//               replace: `"${process.env.REACT_APP_AWS_COGNITO_IDENTITY_POOL_ID}"`,
//             },
//             {
//               search: "process.env.REACT_APP_AWS_REGION",
//               replace: `"${process.env.REACT_APP_AWS_REGION}"`,
//             },
//             {
//               search: "process.env.REACT_APP_AWS_USER_POOLS_ID",
//               replace: `"${process.env.REACT_APP_AWS_USER_POOLS_ID}"`,
//             },
//             {
//               search: "process.env.REACT_APP_AWS_USER_POOLS_WEB_CLIENT_ID",
//               replace: `"${process.env.REACT_APP_AWS_USER_POOLS_WEB_CLIENT_ID}"`,
//             },
//             {
//               search: "process.env.REACT_APP_AWS_COGNITO_USERNAME_ATTRIBUTES",
//               replace: `"${process.env.REACT_APP_AWS_COGNITO_USERNAME_ATTRIBUTES}"`,
//             },
//             {
//               search: "process.env.REACT_APP_AWS_COGNITO_SOCIAL_PROVIDERS",
//               replace: `"${process.env.REACT_APP_AWS_COGNITO_SOCIAL_PROVIDERS}"`,
//             },
//             {
//               search: "process.env.REACT_APP_AWS_COGNITO_SIGNUP_ATTRIBUTES",
//               replace: `"${process.env.REACT_APP_AWS_COGNITO_SIGNUP_ATTRIBUTES}"`,
//             },
//             {
//               search: "process.env.REACT_APP_AWS_COGNITO_MFA_CONFIGURATION",
//               replace: `"${process.env.REACT_APP_AWS_COGNITO_MFA_CONFIGURATION}"`,
//             },
//             {
//               search: "process.env.REACT_APP_AWS_COGNITO_MFA_TYPES",
//               replace: `"${process.env.REACT_APP_AWS_COGNITO_MFA_TYPES}"`,
//             },
//             {
//               search: "process.env.REACT_APP_PASSWORDPOLICYCHARACTERS",
//               replace: `"${process.env.REACT_APP_PASSWORDPOLICYCHARACTERS}"`,
//             },
//             {
//               search:
//                 "process.env.REACT_APP_AWS_COGNITO_VERIFICATION_MECHANISMS",
//               replace: `"${process.env.REACT_APP_AWS_COGNITO_VERIFICATION_MECHANISMS}"`,
//             },
//           ],
//         },
//       },
//     ],
//   },
// };

// console.log(module);
