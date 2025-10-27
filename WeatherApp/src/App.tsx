import React, { useState,useEffect } from 'react';
import { StyleSheet, View, Text, ActivityIndicator, Button } from 'react-native';
import WeatherDisplay from './components/WeatherDisplay';
import { fetchWeatherData } from './components/WeatherService';

import SeacrhBar from './components/SeacrhBar';


type ErrorHandlerProps = {
  message: string | null;
  onRetry: () => void;
};

function ErrorHandler({ message, onRetry }: ErrorHandlerProps) {
  return (
    <View style={{ padding: 16 }}>
      <Text style={{ marginBottom: 8 }}>{message ?? 'An error occurred.'}</Text>
      <Button title="Retry" onPress={onRetry} />
    </View>
  );
}

export interface WeatherDataTypes{
  city:{
    name:string;
  };
  list:Array<{
    main:{
      temp:number;
      humidity:number;
    };
    weather:Array<{
      description:string;
    }>;
    wind:{
      speed:number;
    }
  }>
}


const API_KEY: string = '3ff48553ccbd20200b37f127c8daebe8';
function App() {
  const [cityInput,setcityInput] = useState<string>('Delhi');
  const [weatherData, setWeatherData] = useState<WeatherDataTypes | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<string | null>(null);

  const getWeather = async (): Promise<void> => {
    
    setIsLoading(true);    // START: Immediately display the loading spinner.
    setIsError(null);     // CLEAR: Remove any error message from the previous attempt.
    setWeatherData(null); // CLEAR: Remove previous weather data to prevent stale information from being shown.

    try {
        
        const data = await fetchWeatherData(cityInput, API_KEY);
        setWeatherData(data); // Update the main weatherData state with the successfully fetched data.
        
    } catch (error) {
       
        setIsError((error as Error).message); 
        
    } finally {
        
        setIsLoading(false); // STOP: Hide the loading spinner.
    }
};

  useEffect(() => {
    // 1. Define the wrapper function (explained in detail in Section 4.2)
    const loadWeather = async () => {
        // Calls the core fetching logic
        await getWeather();
    };

    // 2. Immediately call the wrapper function
    loadWeather(); 

    // 3. The Dependency Array: The most critical part. [7, 8]
}, [cityInput]); 

 return (
  <View style={styles.container}>
    <SeacrhBar cityInput={cityInput} setcityInput={setcityInput} />
        
        {/* Start of Conditional Flow: */}
        
        {/* State 1: Is Loading? */}
        {isLoading? (
            // Renders the built-in loading spinner
            <ActivityIndicator size="large" color="#0000ff" />
        ) : 
        
        /* State 2: Is Error? */
        isError? (
            // Renders an error component, passing the error message
            <ErrorHandler message={isError} onRetry={getWeather} />
        ) : 
        
        /* State 3: Is Data Ready? */
        weatherData? (
            // Renders the display component, passing the successful data
            <WeatherDisplay data={weatherData} />
    ) : (
            
    /* State 4: Initial/Idle State */
      // If no search has happened yet, show a prompt.
      <Text style={styles.initialText}>Enter a city to retrieve the forecast.</Text>
    )}
    </View>
);

}


const styles = StyleSheet.create({
    container: {
        flex: 1, // 1. Occupies the entire screen space. 
        paddingTop: 60, // 2. Provides top padding (for status bar clearance).
        paddingHorizontal: 20, // 3. Adds padding on the left and right sides.
        backgroundColor: '#F5F5F5', // 4. A light background for contrast.
    },
    initialText: {
        fontSize: 18,
        color: '#666',
        textAlign: 'center',
        marginTop: 50, // 5. Position the initial prompt visually lower.
    }
});
export default App;
