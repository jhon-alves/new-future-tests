import {
  DrawerContentScrollView,
  DrawerItemList
} from '@react-navigation/drawer';
import {
  DrawerContainer,
  DrawerHeader
} from './styles';
import { Text } from '../Text';

export function CustomDrawer(props: any) {
  return (
    <DrawerContainer colors={['#4c669f', '#192f6a']}>
      <DrawerContentScrollView {...props}>
        <DrawerHeader>
          <Text size={18} weight="600" color="#fff">
            Jonatas Alves
          </Text>
        </DrawerHeader>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </DrawerContainer>
  );
}
