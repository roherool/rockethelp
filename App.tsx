import { NativeBaseProvider, StatusBar } from 'native-base'
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'

import { Loading } from './src/components/Loading'
import { Home } from './src/screens/Home'

import { THEME } from './src/styles/theme'

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  })

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar 
        backgroundColor="transparent" 
        barStyle='light-content' 
        translucent 
      />
      {fontsLoaded ? <Home /> : <Loading />}
    </NativeBaseProvider>
  )
}
