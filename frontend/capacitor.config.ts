import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.prideride.prideride',
  appName: 'PrideRide',
  webDir: 'www/browser',
  server: {
    androidScheme: 'https',
    cleartext: true,
    allowNavigation: [
      'pride-ride-backend.vercel.app'
    ]
  }
};

export default config;