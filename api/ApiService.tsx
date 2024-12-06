// api/ApiService.ts
import axios, { AxiosResponse, AxiosError } from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Define interfaces for your data structures
interface IconSummary {
  id: number;
  name: string;
  value: number;
}

interface PowerPlant {
  id: number;
  name: string;
  location: string;
}

interface LoginResponse {
  access_token: string;
  refresh_token: string;
  user_id: string;
}

interface DashboardData {
  iconSummaries: IconSummary[];
  powerPlants: PowerPlant[];
}

class ApiService {
  private baseUrl: string;

  constructor() {
    this.baseUrl = 'https://imost.ptplnnr.com/api/';
  }

  // Helper method to get headers
  private async _getHeaders(token?: string): Promise<Record<string, string>> {
    return {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
    };
  }

  // Token Management Methods
  async saveToken(key: string, value: string): Promise<void> {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (error) {
      console.error(`Error saving token ${key}:`, error);
    }
  }

  async getToken(key: string): Promise<string | null> {
    try {
      return await AsyncStorage.getItem(key);
    } catch (error) {
      console.error(`Error retrieving token ${key}:`, error);
      return null;
    }
  }

  // Fetch Icon Summaries Data
  async fetchIconSummariesData(): Promise<IconSummary[]> {
    try {
      const token = await this.getToken('accessToken');
      if (!token) {
        console.warn('No token found');
        return [];
      }

      const response: AxiosResponse<DashboardData> = await axios.get(
        `${this.baseUrl}dashboard`, 
        { headers: await this._getHeaders(token) }
      );

      return response.data.iconSummaries;
    } catch (error) {
      this.handleError(error, 'Error fetching icon summaries');
      return [];
    }
  }

  // Fetch Location Data
  async fetchLocation(): Promise<PowerPlant[]> {
    try {
      const token = await this.getToken('accessToken');
      if (!token) {
        console.warn('No token found');
        return [];
      }

      const response: AxiosResponse<DashboardData> = await axios.get(
        `${this.baseUrl}dashboard`, 
        { headers: await this._getHeaders(token) }
      );

      return response.data.powerPlants;
    } catch (error) {
      this.handleError(error, 'Error fetching locations');
      return [];
    }
  }

  // Login Method
  async postLoginData(
    email: string, 
    password: string
  ): Promise<LoginResponse | null> {
    try {
      const response: AxiosResponse<{ data: LoginResponse }> = await axios.post(
        `${this.baseUrl}v1/login`, 
        { email, password },
        { headers: await this._getHeaders() }
      );

      const { access_token, refresh_token, user_id } = response.data.data;

      // Save tokens
      await this.saveToken('accessToken', access_token);
      await this.saveToken('refreshToken', refresh_token);
      await this.saveToken('userId', user_id);

      return response.data.data;
    } catch (error) {
      this.handleError(error, 'Login failed');
      return null;
    }
  }

  // Error Handling Method
  private handleError(error: unknown, context: string): void {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;
      console.error(`${context}:`, {
        message: axiosError.message,
        status: axiosError.response?.status,
        data: axiosError.response?.data
      });
    } else if (error instanceof Error) {
      console.error(`${context}:`, error.message);
    } else {
      console.error(`${context}: An unknown error occurred`);
    }
  }

  // Logout Method
  async logout(): Promise<void> {
    try {
      // Remove all stored tokens
      await AsyncStorage.multiRemove([
        'accessToken', 
        'refreshToken', 
        'userId'
      ]);
    } catch (error) {
      console.error('Logout failed:', error);
    }
  }
}

// Export a singleton instance
export default new ApiService();