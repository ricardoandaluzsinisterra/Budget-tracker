import {StatusBar, useColorScheme, View} from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import {AppStyles} from './styles/AppStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createInitialBulkEntries} from './services/BulkCreationService';
import {useEffect} from 'react';

function App() {
  useEffect(() => {
    initializeApp();
  }, []); //Empty dependency array?

  const initializeApp = async () => {
    try {
      const existingBudgetItems = await AsyncStorage.getItem('budgetItems');

      if (existingBudgetItems) {
        // If exists then parse
        const items = JSON.parse(existingBudgetItems);
      } else {
        const defaultItems = createInitialBulkEntries();
        await AsyncStorage.setItem('budgetItems', JSON.stringify(defaultItems));
      }
    } catch (error) {
      console.error('Error initializing app:', error);
    }
  };

  return (
    <SafeAreaProvider>
      <StatusBar />
      <AppContent />
    </SafeAreaProvider>
  );
}

function AppContent() {
  const safeAreaInsets = useSafeAreaInsets();

  return <View style={AppStyles.container}></View>;
}

export default App;
