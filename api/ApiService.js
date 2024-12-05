import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

class ApiService {
  constructor() {
    this.baseUrl = 'https://imost.ptplnnr.com/api/';
  }

  // Helper method to get headers
  async _getHeaders(token) {
    return {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
    };
  }

  // Save token to AsyncStorage
  async saveToken(key, value) {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (e) {
      console.error('Error saving token:', e);
    }
  }

  // Get token from AsyncStorage
  async getToken(key) {
    try {
      return await AsyncStorage.getItem(key);
    } catch (e) {
      console.error('Error retrieving token:', e);
      return null;
    }
  }

  // Fetch Icon Summaries Data
  async fetchIconSummariesData() {
    const token = await this.getToken('accessToken');
    if (!token) {
      console.warn('No token found');
      return [];
    }

    try {
      const response = await axios.get(`${this.baseUrl}dashboard`, {
        headers: await this._getHeaders(token),
      });
      if (response.status === 200) {
        return response.data.iconSummaries.map((item) => item);
      } else {
        console.error('Error:', response.status);
        return [];
      }
    } catch (error) {
      console.error('Error fetching icon summaries:', error);
      return [];
    }
  }

  // Fetch Location Data
  async fetchLocation() {
    const token = await this.getToken('accessToken');
    if (!token) {
      return [];
    }

    try {
      const response = await axios.get(`${this.baseUrl}dashboard`, {
        headers: await this._getHeaders(token),
      });
      if (response.status === 200) {
        return response.data.powerPlants.map((item) => item);
      } else {
        console.error('Error:', response.status);
        return [];
      }
    } catch (error) {
      console.error('Error fetching locations:', error);
      return [];
    }
  }

  // Fetch Project Data
  async fetchProjectData() {
    const token = await this.getToken('accessToken');
    if (!token) {
      console.warn('No token found');
      return null;
    }

    try {
      const response = await axios.get(`${this.baseUrl}overview`, {
        headers: await this._getHeaders(token),
      });
      if (response.status === 200) {
        return response.data;
      } else {
        throw new Error(`Failed to load project data: ${response.status}`);
      }
    } catch (error) {
      console.error('Error fetching project data:', error);
      return null;
    }
  }

  // Post Login Data
  async postLoginData(email, password) {
    try {
      const response = await axios.post(`${this.baseUrl}v1/login`, {
        email,
        password,
      }, {
        headers: await this._getHeaders(),
      });

      if (response.status === 200) {
        const { access_token, refresh_token, user_id } = response.data.data;
        await this.saveToken('accessToken', access_token);
        await this.saveToken('refreshToken', refresh_token);
        await this.saveToken('userId', user_id);

        return response.data.data;
      } else {
        throw new Error(`Failed to login: ${response.data}`);
      }
    } catch (error) {
      console.error('Error during login:', error);
      return null;
    }
  }

  // Fetch Dashboard Data
  async fetchDashboardData() {
    const token = await this.getToken('accessToken');
    if (!token) {
      throw new Error('No token found');
    }

    try {
      const response = await axios.get(`${this.baseUrl}v1/dashboard`, {
        headers: await this._getHeaders(token),
      });

      if (response.status === 200) {
        return response.data;
      } else {
        throw new Error(`Failed to fetch dashboard data: ${response.status}`);
      }
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
      throw error;
    }
  }
}

export default new ApiService();
