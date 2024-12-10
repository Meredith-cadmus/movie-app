import Axios from "axios";

export const axios = Axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YTE4MmUxNTJkODYwNGIzNWUxNWMzZjI4NTY3ZjQwMSIsIm5iZiI6MTczMjg1MzM5OC4yNjkxNTAzLCJzdWIiOiI2NmI1ZjRhNjVkODNhYTUwNWUyODBjMGUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.D0AChfWhcqZc8C8wkc5UhhrEBksVjQhM7c_C_kyYWy8";
