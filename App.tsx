import { SafeAreaView } from 'react-native-safe-area-context';
import Resume from './src/screens/resume';
import { StatusBar } from 'expo-status-bar';  

import { useFonts, Inter_600SemiBold, Inter_500Medium, Inter_400Regular, Inter_300Light } from '@expo-google-fonts/inter';

export default function App() {
  const [fontLoaded] = useFonts({
    Inter_600SemiBold,
    Inter_500Medium,
    Inter_400Regular,
    Inter_300Light
  });

  if(!fontLoaded) return null
 
  return (
    <>
    <StatusBar backgroundColor='#ff6201' style='light'/>
      <SafeAreaView>
          <Resume/>
      </SafeAreaView>
    </>
  );
}

