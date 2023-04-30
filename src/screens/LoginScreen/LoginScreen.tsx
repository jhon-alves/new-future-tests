import React, { useState, useCallback, useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
import BottomSheet, { BottomSheetBackdrop } from '@gorhom/bottom-sheet';
import {
  Container,
  HeaderContent,
  Footer,
  FooterContainer,
  Form,
  Input,
  SheetContainer,
  SheetText
} from './styles';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';

export function LoginScreen() {
  const navigation = useNavigation();
  const snapPoints = ["50%"];
  const sheetRef = useRef<BottomSheet>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleSnapPress = useCallback((index: number) => {
    sheetRef.current?.snapToIndex(index);
    setIsOpen(!isOpen);
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
        <SheetContainer>
          <SheetText size={22} weight="600">Acesse o app</SheetText>
          <Form>
            <Input
              placeholder="E-mail"
              inputMode="email"
              autoCapitalize="none"
            />
            <Input
              placeholder="Senha"
              autoCapitalize="none"
            />
            <Button onPress={() => navigation.navigate('Home')}>
              Entrar
            </Button>
            <SheetText size={12}>Esqueci a senha</SheetText>
          </Form>
        </SheetContainer>
      </BottomSheet>
    </Container>
  );
}
