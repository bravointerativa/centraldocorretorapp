import * as React from 'react';
import { WebView } from 'react-native-webview';
import { StyleSheet, StatusBar, SafeAreaView } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync() // <- previne a splashscreen de se esconder automaticamente 


export default function App() {
  React.useEffect(() => {
    setTimeout(async () => {
      await SplashScreen.hideAsync();
    }, 5000); // <-- Para a Splashscreen se esconder após 5segundos
  }, []);

  return (
    <>
      <SafeAreaView style={styles.topo}>
        <WebView
          style={styles.container}
          source={{
            uri: 'https://centraldocorretor.construtoradiamond.com.br/?acesso_app',
          }}
        />
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  topo: {
    flex: 1,
    backgroundColor: '#2f2f2f',
  },
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
});