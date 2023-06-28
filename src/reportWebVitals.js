// Function to measure and report on web vitals performance
const reportWebVitals = onPerfEntry => {
  // Check if the 'onPerfEntry' callback function exists and is a function
  if (onPerfEntry && onPerfEntry instanceof Function) {
    // Dynamically import the 'web-vitals' library which allows you to measure the Web Vitals
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);  
      getFCP(onPerfEntry); 
      getLCP(onPerfEntry);  
      getTTFB(onPerfEntry);
    });
  }
};

// Export the 'reportWebVitals' function as a default export
export default reportWebVitals;
