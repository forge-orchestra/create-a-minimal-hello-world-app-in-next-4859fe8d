// lib/utils.ts

import { LucideIcon } from 'lucide-react';

/**
 * Type representing a generic API response.
 */
export type ApiResponse<T> = {
  data: T;
  error: string | null;
};

/**
 * Fetch data from a given API endpoint.
 * @param url - The API endpoint URL.
 * @returns A promise that resolves to an ApiResponse object.
 */
export async function fetchData<T>(url: string): Promise<ApiResponse<T>> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data: T = await response.json();
    return { data, error: null };
  } catch (error) {
    return { data: null as any, error: (error as Error).message };
  }
}

/**
 * Format a string to capitalize the first letter.
 * @param str - The string to format.
 * @returns The formatted string with the first letter capitalized.
 */
export function capitalizeFirstLetter(str: string): string {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * A utility function to render a Lucide icon.
 * @param Icon - The Lucide icon component.
 * @param className - Additional classes for styling the icon.
 * @returns A JSX element representing the icon.
 */
export function renderIcon(Icon: LucideIcon, className?: string): JSX.Element {
  return <Icon className={`w-6 h-6 ${className || ''}`} />;
}

export { LucideIcon };