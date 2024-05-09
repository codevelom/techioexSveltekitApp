export const emailFormatChecker = (value : string) => {
    // Regular expression for email validation
    const validRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    // Check if the value matches the regex
    return validRegex.test(value);
}
