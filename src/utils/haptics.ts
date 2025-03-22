/**
 * Haptic feedback utilities for mobile devices
 * Uses the navigator.vibrate API which is supported on most mobile browsers
 */

/**
 * Check if vibration is supported in the current browser
 */
export const isVibrationSupported = (): boolean => {
  return typeof navigator !== 'undefined' && 'vibrate' in navigator;
};

/**
 * Light feedback for UI interactions like button taps
 */
export const lightHapticFeedback = (): void => {
  if (isVibrationSupported()) {
    navigator.vibrate(10);
  }
};

/**
 * Medium feedback for more significant actions like form submissions
 */
export const mediumHapticFeedback = (): void => {
  if (isVibrationSupported()) {
    navigator.vibrate(20);
  }
};

/**
 * Heavy feedback for important actions or errors
 */
export const heavyHapticFeedback = (): void => {
  if (isVibrationSupported()) {
    navigator.vibrate([30, 50, 30]);
  }
};

/**
 * Success pattern for completed actions
 */
export const successHapticFeedback = (): void => {
  if (isVibrationSupported()) {
    navigator.vibrate([10, 30, 10]);
  }
};

/**
 * Error pattern to indicate something went wrong
 */
export const errorHapticFeedback = (): void => {
  if (isVibrationSupported()) {
    navigator.vibrate([40, 30, 40, 30, 40]);
  }
};

/**
 * Custom pattern for specialized feedback
 * @param pattern - Vibration pattern in milliseconds. Even indices = vibrate, odd = pause.
 */
export const customHapticFeedback = (pattern: number | number[]): void => {
  if (isVibrationSupported()) {
    navigator.vibrate(pattern);
  }
};

/**
 * Stop any ongoing vibration
 */
export const stopHapticFeedback = (): void => {
  if (isVibrationSupported()) {
    navigator.vibrate(0);
  }
};

/**
 * React component props for haptic feedback
 */
export interface HapticProps {
  onPress?: () => void;
  hapticType?: 'light' | 'medium' | 'heavy' | 'success' | 'error' | 'none';
}

/**
 * Utility function to handle haptic feedback in React components
 */
export const handleHapticFeedback = (
  e: React.MouseEvent | React.TouchEvent,
  hapticType: HapticProps['hapticType'] = 'light',
  callback?: () => void
): void => {
  // Prevent default behavior if needed
  // e.preventDefault();
  
  // Apply haptic feedback based on type
  switch (hapticType) {
    case 'light':
      lightHapticFeedback();
      break;
    case 'medium':
      mediumHapticFeedback();
      break;
    case 'heavy':
      heavyHapticFeedback();
      break;
    case 'success':
      successHapticFeedback();
      break;
    case 'error':
      errorHapticFeedback();
      break;
    case 'none':
    default:
      // No haptic feedback
      break;
  }
  
  // Execute callback if provided
  if (callback) {
    callback();
  }
}; 