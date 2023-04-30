import { SafeAreaView, Text } from 'react-native';
import { Button } from '../../components/Button';

export function HomeScreen({ navigation }: {navigation: any}) {
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    >
      <Button onPress={() => navigation.navigate('VictoryChart')}>
        Go to Chart
      </Button>
    </SafeAreaView>
  );
}
