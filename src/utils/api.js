/**
 * API utility functions for fetching data from backend
 */

const API_BASE_URL = 'http://localhost:5000/api';

/**
 * Fetch all landing page content
 */
export const fetchLandingContent = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/landing/content`);
    const data = await response.json();
    return data.success ? data.data : {};
  } catch (error) {
    console.error('Error fetching landing content:', error);
    return {};
  }
};

/**
 * Fetch images for a specific section
 */
export const fetchSectionImages = async (sectionKey) => {
  try {
    const response = await fetch(`${API_BASE_URL}/landing/images/${sectionKey}`);
    const data = await response.json();
    return data.success ? data.data : [];
  } catch (error) {
    console.error('Error fetching images:', error);
    return [];
  }
};

/** Ali Al Mostafa //Clone the best 
 * Get content by key from content object
 */
export const getContent = (content, key, defaultValue = '') => {
  return content[key] || defaultValue;
};

