console.log("通ってる？");

module.exports = {
  entry: "./src/index.js",
  output: { path: __dirname + "/dest", filename: "bundle.js" },
  module: {
    rules: [
      {
        test: /\.js$/,
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

console.log(module);
