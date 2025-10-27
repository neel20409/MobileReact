import { WeatherDataTypes } from "../App";
import React from "react";
import { StyleSheet, View, Text } from 'react-native';

interface WeatherDisplayProps{
    data:WeatherDataTypes;
}


const WeatherDisplay:React.FC<WeatherDisplayProps> = ({data}) => {


    const currentWeather = data.list?.[0];

    // Safety check: If the required first item doesn't exist, stop rendering.
    if (!currentWeather) {
        return <Text style={styles.initialText}>No forecast data available.</Text>;
    }

    // Data extraction from the first forecast item
    const city: string = data.city.name;
    const temperature: number = currentWeather.main.temp;
    // Access the description from the nested 'weather' array at index 0.
    const description: string = currentWeather.weather?.[0]?.description || 'N/A';

    const humidity: number = currentWeather.main.humidity;
    const windSpeed: number = currentWeather.wind.speed;

  return (
   <View style={styles.displayContainer}>
        <Text style={styles.cityText}>{city}</Text>
        <Text style={styles.tempText}>{`${Math.round(temperature)}\u00b0C`}</Text>
        <Text style={styles.descriptionText}>{description}</Text>
        <View style={styles.detailsRow}>
            <Text style={styles.detailText}>Humidity: {Math.round(humidity)}%</Text>
            <Text style={styles.detailText}>Wind Speed: {Math.round(windSpeed)} m/s</Text>
        </View>
   </View>
  )
}
const styles = StyleSheet.create({
    displayContainer: {
        alignItems: 'center', // Center all content horizontally
        marginTop: 30,
        padding: 20,
        borderRadius: 15,
        backgroundColor: '#FFF', // Card-like appearance
        elevation: 3, // Shadow for Android
        shadowColor: '#000', // Shadow for iOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    cityText: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#333',
    },
    tempText: {
        fontSize: 72, // Large, dominant font size
        fontWeight: '200',
        color: '#FF6F61', // A warm, inviting color for temperature
        marginBottom: 5,
    },
    descriptionText: {
        fontSize: 20,
        marginBottom: 25,
        color: '#666',
    },
    detailsRow: {
        flexDirection: 'row', // Aligns children (humidity, wind speed) horizontally
        justifyContent: 'space-around', // Distribute space evenly
        width: '80%',
        paddingTop: 15,
        borderTopWidth: 1,
        borderTopColor: '#EEE',
    },
    detailText: {
        fontSize: 16,
        color: '#333',
        fontWeight: '500',
    },
    initialText: {
        fontSize: 18,
        color: '#888',
        textAlign: 'center',
        marginTop: 40,
    },
});

export default WeatherDisplay;