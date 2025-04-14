import axios from "axios";

const ACCESS_KEY = "xCW9qGHehtwspTlfSivxG7tj1AU-NdnadCHDu2MYEIM";

export const fetchImages = async (query, page) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    params: {
      query,
      page,
      per_page: 20,
      client_id: ACCESS_KEY,
    },
  });
  return response.data;
};
