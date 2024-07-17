import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
const wallpaper1 = require('../assets/wallpaper1.jpg');
const wallpaper2 = require('../assets/wallpaper2.jpg');


export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Paddy Expert System</Text>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
        source={wallpaper1}
        style={styles.cardImage}
        />
        {/* <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Hawa Mahal</Text>
            <Text style={styles.cardLabel}>Pink City, jaipur</Text>
            <Text style={styles.cardDescription}>The Hawa Mahal is a palace in the city of Jaipur, India. Built from
            red and pink sandstone, it is on the edge of the City Palace.</Text>
            <Text style={styles.cardFooter}>12 mins away</Text>
        </View> */}
      </View>

      <View style={[styles.card, styles.cardElevated]}>
        <Image
        source={wallpaper2}
        style={styles.cardImage}
        />
        {/* <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Hawa Mahal</Text>
            <Text style={styles.cardLabel}>Pink City, jaipur</Text>
            <Text style={styles.cardDescription}>The Hawa Mahal is a palace in the city of Jaipur, India. Built from
            red and pink sandstone, it is on the edge of the City Palace.</Text>
            <Text style={styles.cardFooter}>12 mins away</Text>
        </View> */}
      </View>

      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
        textAlign:'center',
        color:'#0000cd',
        margin:20
    },

    card: {
        width: 350,
        height: 220,
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 16
        
    },
    cardElevated: {
        backgroundColor: '#FFFFFF',
        elevation: 3,
        shadowOffset: {
            width: 1,
            height: 1
        }
        
    },
    cardImage: {
        width: '100%',
        height: undefined, // Remove fixed height
        aspectRatio: 16 / 9, // Adjust based on your image aspect ratio
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
        
    },
    cardBody: {
        flex: 1,
        flexGrow: 1,
        paddingHorizontal: 12
    },
    cardTitle: {
        color: '#000000',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 4
    },
    cardLabel: {
        color: '#000000',
        fontSize: 14,
        marginBottom: 6
    },
    cardDescription: {
        color: '#242B2E',
        fontSize: 12,
        marginBottom: 12,
        marginTop: 6,
        flexShrink: 1
    },
    cardFooter: {
        color: '#000000'
    }

})