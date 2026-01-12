import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'PrideRide_Ionic',
  webDir: 'www/browser',
  server: {
    androidScheme: 'http',
    hostname: 'localhost',
    cleartext: true,
    allowNavigation: ['*']
  }
};

export default config;
