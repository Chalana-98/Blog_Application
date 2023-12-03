import apiEndpoints from "../api/apiEndpoints";

export default function useFetchFunction(endPointKey, data, method) {
  const fetchFunctionReg = async () => {
    try {
      // Access token is not used here
      const response = await fetch(apiEndpoints[endPointKey], {
        method: method,
        headers: {
          "Content-Type": "application/json",
          // Remove the Authorization header
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const jsonResponse = await response.json();
        console.log(jsonResponse);
        console.log("Request successful.");
      } else {
        console.log("Failed to perform the request.");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return { fetchFunctionReg };
}
