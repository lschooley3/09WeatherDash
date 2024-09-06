import dotenv from "dotenv";
dotenv.config();

// TODO: Define an interface for the Coordinates object
interface Coordinates {
  lat: number;
  lon: number;
  name: string;
  state: string;
  country: string;
}

// TODO: Define a class for the Weather object
class Weather {
  city: string;
  date: string;
  temperature: number;
  wind: number;
  humidity: number;
  icon: string;
  iconDescription: string;
  constructor(
    city: string,
    date: string,
    temperature: number,
    wind: number,
    humidity: number,
    icon: string,
    iconDescription: string
  ) {
    this.city = city;
    this.date = date;
    this.temperature = temperature;
    this.wind = wind;
    this.humidity = humidity;
    this.icon = icon;
    this.iconDescription = iconDescription;
  }
}
// TODO: Complete the WeatherService class
class WeatherService {
  // TODO: Define the baseURL, API key, and city name properties
  private baseURL: string;
  private apiKey: string;
  private cityName: "";
  constructor() {
    this.baseURL = process.env.API_BASE_URL || "";
    this.apiKey = process.env.WEATHER_API_KEY || "";
    this.cityName = "";
  }

  // TODO: Create fetchLocationData method
private async fetchLocationData(query: string) {
  try { if(!this.baseURL||!this.apiKey) {
    throw new Error("Missing API URL or API Key");
  }
  const response = await fetch(`${this.baseURL}/geocode?city=${query}&key=${this.apiKey}`);
  if (!response.ok) {
    throw new Error("Failed to fetch location data");
  }
  // TODO: Create destructureLocationData method
  private destructureLocationData(locationData: Coordinates): Coordinates {
    if(!locationData.results[0].components.city) {
      throw new Error("City not found");
    }
    const {lat, lon, city, state, country} = locationData.results[0];
    const coordinates: Coordinates = {
      lat,
      lon,
      name: city,
      state,
      country
    };
  }
  // TODO: Create buildGeocodeQuery method
  private buildGeocodeQuery(): string {}
  // TODO: Create buildWeatherQuery method
  private buildWeatherQuery(coordinates: Coordinates): string {}
  // TODO: Create fetchAndDestructureLocationData method
  private async fetchAndDestructureLocationData() {}
  // TODO: Create fetchWeatherData method
  private async fetchWeatherData(coordinates: Coordinates) {}
  // TODO: Build parseCurrentWeather method
  private parseCurrentWeather(response: any) {}
  // TODO: Complete buildForecastArray method
  private buildForecastArray(currentWeather: Weather, weatherData: any[]) {}
  // TODO: Complete getWeatherForCity method
  async getWeatherForCity(city: string) {}
}

export default new WeatherService();
