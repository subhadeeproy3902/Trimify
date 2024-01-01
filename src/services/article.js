import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const rapidApiKeys = [
  import.meta.env.VITE_RAPID_API_ARTICLE_KEY,
  import.meta.env.VITE_RAPID_API_ARTICLE_KEY2,
  import.meta.env.VITE_RAPID_API_ARTICLE_KEY3,
  import.meta.env.VITE_RAPID_API_ARTICLE_KEY4,
  import.meta.env.VITE_RAPID_API_ARTICLE_KEY5,
  import.meta.env.VITE_RAPID_API_ARTICLE_KEY6,
  import.meta.env.VITE_RAPID_API_ARTICLE_KEY7,
  import.meta.env.VITE_RAPID_API_ARTICLE_KEY8,
];

export const articleApi = createApi({
  reducerPath: "articleApi",
  baseQuery: async (args, api, extraOptions) => {
    let result;
    for (const key of rapidApiKeys) {
      result = await fetchBaseQuery({
        baseUrl: "https://article-extractor-and-summarizer.p.rapidapi.com/",
        prepareHeaders: (headers) => {
          headers.set("X-RapidAPI-Key", key);
          headers.set(
            "X-RapidAPI-Host",
            "article-extractor-and-summarizer.p.rapidapi.com"
          );
          return headers;
        },
      })(args, api, extraOptions);

      if (result.error === undefined) {
        break;
      }
    }
    return result;
  },
  endpoints: (builder) => ({
    getSummary: builder.query({
      query: (params) =>
        `summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`,
    }),
  }),
});

export const { useLazyGetSummaryQuery } = articleApi;
