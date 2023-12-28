import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.condsolution.images',
  appName: 'mobileImagem',
  webDir: 'www',
  bundledWebRuntime: false,
  plugins: {
    PushNotifications: {
        presentationOptions: ['badge', 'sound', 'alert']
    }
}
};


export default config;
