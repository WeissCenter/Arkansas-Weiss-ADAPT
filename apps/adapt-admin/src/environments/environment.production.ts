import { NgxLoggerLevel } from 'ngx-logger';

export const environment = {
  // NgxLoggerLevels: TRACE|DEBUG|INFO|LOG|WARN|ERROR|FATAL|OFF
  logLevel: NgxLoggerLevel.OFF,
  API_URL: 'https://7ofu7w4qrc.execute-api.us-east-1.amazonaws.com/ade-prod/',
  VAPID_KEY: 'BAKgZF9sRSyyxTy0qwCFNMU5_KfpK0dlpsrYUcLBtCLmUtumD6cJVNR0RsAGEwZbdjI3Tu-ErrkihqOU3JxM8BQ',
  cognitoRegion: 'us-east-1',
  cognitoDomainName: 'ade-prod-adaptadmin',
  s3PublicAssetsDomainName: 'ade-prod-adaptpublicassetsbucket',
  clientId: '26mm5pn3ofmu3d5k5f487oojlp',
  contentRoot: 'assets/text',
  contentFileName: 'admin-content-text.json',
  appDomain: 'ade-admin.adaptdata.org',
  enforceLogin: true,
  envLabel: 'Prod',
  enforceRole: true,
  callbackUrl: 'https://ade-admin.adaptdata.org/auth/redirect',
  Cognito: {
    userPoolId: 'us-east-1_ieDdK9JLy',
    userPoolClientId: '26mm5pn3ofmu3d5k5f487oojlp',
  },
  loginContent: 'assets/content-labels.json',
  pagesContent: 'assets/text/admin-content-text.json',
};
