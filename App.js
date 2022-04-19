import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync()

export default function App() {
  React.useEffect(() => {
    setTimeout(async () => {
      await SplashScreen.hideAsync();
    }, 3000);
  }, []);

  return (
    <WebView
      source={{ uri: 'https://centraldocorretor.construtoradiamond.com.br/?acesso_app' }}
      startInLoadingState={true}
      renderLoading={this.renderLoading}
    />
  );
}