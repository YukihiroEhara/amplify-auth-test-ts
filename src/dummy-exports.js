const arrayChange = (str) => {
    let array = [];
    str !== "empty" && array.push(str);
    return array;
  };
  
  const awsmobile = {
    aws_project_region: process.env.REACT_APP_AWS_REGION,
    aws_appsync_graphqlEndpoint:
      process.env.REACT_APP_AWS_APPSYNC_GRAPHQLENDPOINT,
    aws_appsync_region: process.env.REACT_APP_AWS_REGION,
    aws_appsync_authenticationType:
      process.env.REACT_APP_AWS_APPSYNC_AUTHENTICATIONTYPE,
    //   aws_appsync_apiKey: process.env.REACT_APP_AWS_APPSYNC_APIKEY,
    aws_cognito_identity_pool_id:
      process.env.REACT_APP_AWS_COGNITO_IDENTITY_POOL_ID,
    aws_cognito_region: process.env.REACT_APP_AWS_REGION,
    aws_user_pools_id: process.env.REACT_APP_AWS_USER_POOLS_ID,
    aws_user_pools_web_client_id:
      process.env.REACT_APP_AWS_USER_POOLS_WEB_CLIENT_ID,
  
    //   oauth: process.env.REACT_APP_OAUTH,
    oauth: {},
    //   aws_cognito_username_attributes: [],
    aws_cognito_username_attributes: arrayChange(
      process.env.REACT_APP_AWS_COGNITO_USERNAME_ATTRIBUTES
    ),
    //   aws_cognito_social_providers: [],
    aws_cognito_social_providers: arrayChange(
      process.env.REACT_APP_AWS_COGNITO_SOCIAL_PROVIDERS
    ),
    aws_cognito_signup_attributes: arrayChange(
      process.env.REACT_APP_AWS_COGNITO_SIGNUP_ATTRIBUTES
    ),
    aws_cognito_mfa_configuration:
      process.env.REACT_APP_AWS_COGNITO_MFA_CONFIGURATION,
    aws_cognito_mfa_types: arrayChange(
      process.env.REACT_APP_AWS_COGNITO_MFA_TYPES
    ),
    aws_cognito_password_protection_settings: {
      passwordPolicyMinLength: 8,
      // passwordPolicyMinLength: process.env.REACT_APP_PASSWORDPOLICYMINLENGTH,
      passwordPolicyCharacters: arrayChange(
        process.env.REACT_APP_PASSWORDPOLICYCHARACTERS
      ),
    },
    aws_cognito_verification_mechanisms: arrayChange(
      process.env.REACT_APP_AWS_COGNITO_VERIFICATION_MECHANISMS
    ),
  };
  
  export default awsmobile;
  