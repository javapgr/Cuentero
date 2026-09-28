import { ImageBackground, StyleSheet, View } from 'react-native';
import { useTema } from './theme';

const textura = require('../assets/fondo-kene-lineas.png');

export default function Fondo({ children, style }) {
  const { oscuro } = useTema();

  return (
    <ImageBackground
      source={textura}
      resizeMode="repeat"
      imageStyle={{ opacity: oscuro ? 0.2 : 0.4 }}
      style={[styles.base, style]}
    >
      <View
        pointerEvents="none"
        style={[
          StyleSheet.absoluteFill,
          {
            backgroundColor: oscuro
              ? 'rgba(18, 26, 22, 0.4)'
              : 'rgba(247, 245, 240, 0.42)',
          },
        ]}
      />
      {children}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  base: { flex: 1 },
});
