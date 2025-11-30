import axios, { AxiosResponse } from 'axios';

/**
 * Type representing the API response structure.
 */
type ApiResponse<T> = {
  data: T;
  error?: string;
};

/**
 * Type representing the structure of a Hello World message.
 */
type HelloWorldMessage = {
  message: string;
};

/**
 * Fetches the Hello World message from the server.
 * @returns {Promise<HelloWorldMessage>} The Hello World message.
 * @throws Will throw an error if the request fails.
 */
export async function fetchHelloWorldMessage(): Promise<HelloWorldMessage> {
  try {
    const response: AxiosResponse<ApiResponse<HelloWorldMessage>> = await axios.get('/api/hello-world');
    if (response.data.error) {
      throw new Error(response.data.error);
    }
    return response.data.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data.error || 'An error occurred while fetching the Hello World message.');
    }
    throw new Error('An unexpected error occurred.');
  }
}

/**
 * Posts a new Hello World message to the server.
 * @param {string} message - The message to post.
 * @returns {Promise<HelloWorldMessage>} The posted Hello World message.
 * @throws Will throw an error if the request fails.
 */
export async function postHelloWorldMessage(message: string): Promise<HelloWorldMessage> {
  try {
    const response: AxiosResponse<ApiResponse<HelloWorldMessage>> = await axios.post('/api/hello-world', { message });
    if (response.data.error) {
      throw new Error(response.data.error);
    }
    return response.data.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data.error || 'An error occurred while posting the Hello World message.');
    }
    throw new Error('An unexpected error occurred.');
  }
}