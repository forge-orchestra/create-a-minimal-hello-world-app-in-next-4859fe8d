import { LucideIcon } from 'lucide-react';

/**
 * @interface HelloWorldProps
 * @description Props for the HelloWorld component.
 */
export interface HelloWorldProps {
  /**
   * @property {string} message - The message to display.
   */
  message: string;

  /**
   * @property {LucideIcon} icon - The icon to display alongside the message.
   */
  icon: LucideIcon;
}

/**
 * @interface ApiResponse
 * @description Structure of the API response.
 */
export interface ApiResponse<T> {
  /**
   * @property {T} data - The data returned by the API.
   */
  data: T;

  /**
   * @property {boolean} success - Indicates if the API call was successful.
   */
  success: boolean;

  /**
   * @property {string} [error] - Error message if the API call failed.
   */
  error?: string;
}

/**
 * @type ApiData
 * @description Type alias for data returned by the API.
 */
export type ApiData = {
  /**
   * @property {string} content - The content of the API data.
   */
  content: string;
};

/**
 * @type LoadingState
 * @description Represents the loading state of a component.
 */
export type LoadingState = 'idle' | 'loading' | 'loaded' | 'error';

export type { LucideIcon };