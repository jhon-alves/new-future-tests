import styled from 'styled-components/native';
import { Platform, StatusBar } from 'react-native';
import { BottomSheetView, BottomSheetTextInput } from '@gorhom/bottom-sheet';
import { Text } from '../../components/Text';

const isAndroid = Platform.OS === 'android';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  background: #2e3952;
`;

export const HeaderContent = styled.SafeAreaView`
  align-items: center;
  margin-top: ${isAndroid ? `${StatusBar.currentHeight}px`: '0'};
`;

export const Footer = styled.View`
  min-height: 110px;
  padding: 16px 24px;
`;

export const FooterContainer = styled.SafeAreaView``;

export const Form = styled.View`
  margin-top: 32px;
  padding: 0 20px;
`;

export const SheetContainer = styled(BottomSheetView)`
  flex: 1;
  align-items: stretch;
  justify-content: center;
`;

export const Input = styled(BottomSheetTextInput)`
  background: #fff;
  border: 1px solid rgba(204, 204, 204, 0.5);
  padding: 16px;
  margin-bottom: 24px;
`;

export const SheetText = styled(Text)`
  text-align: center;
`;
