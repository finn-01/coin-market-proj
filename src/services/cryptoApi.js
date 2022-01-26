import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Note: Change v1 to v2 on rapid api

const baseUrl = "https://coinranking1.p.rapidapi.com";

const cryptoApiHeaders = {
	"x-rapidapi-host": "coinranking1.p.rapidapi.com",
	"x-rapidapi-key": "e796ad7b1bmsh648085b11607197p1073e2jsn69a489ec8dab",
};
const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
	reducerPath: "cryptoApi",
	baseQuery: fetchBaseQuery({
		baseUrl,
	}),
	endpoints: (builder) => ({
		getCryptos: builder.query({
			query: (count) => createRequest(`/coins?limit=${count}`),
		}),
	}),
});

export const {
	useGetCryptosQuery,
	useGetCryptoDetailsQuery,
	useGetExchangesQuery,
	useGetCryptoHistoryQuery,
} = cryptoApi;
