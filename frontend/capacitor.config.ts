import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.tuempresa.prideride',
  appName: 'PrideRide',
  webDir: 'www/browser',
  server: {
    androidScheme: 'http',
    cleartext: true
  }
};

export default config;