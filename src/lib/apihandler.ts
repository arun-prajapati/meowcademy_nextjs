const apihandler = async ({
    path,
    apiConfig = {},
  }: {
    path: string;
    apiConfig?: any;
  }) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}${path}`,
        {
          ...apiConfig,
          cache: "no-store", // Disable caching
        }
      );
  
      if (!response.ok) {
        throw new Error(`API request failed with status: ${response.status}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("API request error:", error);
      return null; // or return a specific error object if you prefer
    }
  };
  
  export default apihandler;