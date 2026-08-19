import React from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>

        {/* HEADER */}
        <View style={styles.header}>
          <Text style={styles.logo}>ICE STONE</Text>
          <Text style={styles.logoSub}>SERVICE</Text>
        </View>

        {/* HERO */}
        <View style={styles.hero}>
          <Text style={styles.iceEmoji}>🧊</Text>

          <Text style={styles.title}>
            Ghiaccio quando{'\n'}ne hai bisogno.
          </Text>

          <Text style={styles.subtitle}>
            Consegna rapida di ghiaccio per bar, eventi
            e privati.
          </Text>

          <View style={styles.badge}>
            <View style={styles.badgeDot} />
            <Text style={styles.badgeText}>
              CONSEGNA 7 GIORNI SU 7
            </Text>
          </View>
        </View>

        {/* BUTTON */}
        <View style={styles.buttons}>
          <Pressable
            style={({ pressed }) => [
              styles.primaryButton,
              pressed && styles.buttonPressed,
            ]}
            onPress={() => console.log('Prenota ghiaccio')}
          >
            <Text style={styles.primaryButtonText}>
              🧊  PRENOTA GHIACCIO
            </Text>
          </Pressable>

          <Pressable
            style={({ pressed }) => [
              styles.secondaryButton,
              pressed && styles.buttonPressed,
            ]}
            onPress={() => console.log('I miei ordini')}
          >
            <Text style={styles.secondaryButtonText}>
              I MIEI ORDINI
            </Text>
          </Pressable>
        </View>

        {/* FOOTER */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Mantova • Modena • Reggio Emilia • Verona
          </Text>
        </View>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#07111f',
  },

  content: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: 'space-between',
    paddingBottom: 24,
  },

  header: {
    paddingTop: 20,
  },

  logo: {
    color: '#ffffff',
    fontSize: 25,
    fontWeight: '800',
    letterSpacing: 3,
  },

  logoSub: {
    color: '#55c8ff',
    fontSize: 13,
    fontWeight: '700',
    letterSpacing: 5,
    marginTop: 2,
  },

  hero: {
    alignItems: 'center',
  },

  iceEmoji: {
    fontSize: 64,
    marginBottom: 20,
  },

  title: {
    color: '#ffffff',
    fontSize: 38,
    lineHeight: 44,
    fontWeight: '800',
    textAlign: 'center',
  },

  subtitle: {
    color: '#aebdce',
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
    marginTop: 18,
    maxWidth: 330,
  },

  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 24,
    paddingHorizontal: 14,
    paddingVertical: 9,
    borderRadius: 20,
    backgroundColor: '#10263b',
  },

  badgeDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#39d98a',
    marginRight: 8,
  },

  badgeText: {
    color: '#ffffff',
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 1,
  },

  buttons: {
    gap: 12,
  },

  primaryButton: {
    backgroundColor: '#25aee4',
    minHeight: 58,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },

  primaryButtonText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '800',
    letterSpacing: 0.5,
  },

  secondaryButton: {
    backgroundColor: '#102033',
    borderWidth: 1,
    borderColor: '#29415a',
    minHeight: 54,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },

  secondaryButtonText: {
    color: '#dcecff',
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: 1,
  },

  buttonPressed: {
    opacity: 0.7,
  },

  footer: {
    alignItems: 'center',
    paddingTop: 18,
  },

  footerText: {
    color: '#64788c',
    fontSize: 11,
    textAlign: 'center',
  },
});
