import React, { useState, useCallback, useRef } from 'react';
import {
  Container,
  HeaderContent,
  Footer,
  FooterContainer,
  Form,
  Input
} from './styles';

import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Text } from '../../components/Text';
import BottomSheet, {
  BottomSheetView,
  BottomSheetBackdrop
} from '@gorhom/bottom-sheet';

export function LoginScreen() {
  const snapPoints = ["50%"];
  const sheetRef = useRef<BottomSheet>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleSnapPress = useCallback((index: number) => {
    sheetRef.current?.snapToIndex(index);
    setIsOpen(!isOpen);
  }, []);

  const handleClosePress = useCallback(() => {
    sheetRef.current?.close();
  }, []);

  const renderBackdrop = useCallback((props: any) => (
    <BottomSheetBackdrop
      {...props}
      disappearsOnIndex={-1}
      appearsOnIndex={0}
    />
  ), []);

  return (
    <Container>
      <HeaderContent>
        <Header />
      </HeaderContent>

      <Footer>
        <FooterContainer>
          <Button onPress={() => handleSnapPress(0)}>
            Entrar
          </Button>
        </FooterContainer>
      </Footer>

      <BottomSheet
        index={-1}
        ref={sheetRef}
        snapPoints={snapPoints}
        enablePanDownToClose={true}
        keyboardBehavior="interactive"
        keyboardBlurBehavior="restore"
        backdropComponent={renderBackdrop}
        onClose={() => setIsOpen(!isOpen)}
      >
        <BottomSheetView>
          <Text size={22} weight="600">Acesse o app</Text>
          <Form>
            <Input placeholder="E-mail" />
            <Input placeholder="Senha" />
            <Button onPress={handleClosePress}>
              Entrar
            </Button>
          </Form>
        </BottomSheetView>
      </BottomSheet>
    </Container>
  );
}
