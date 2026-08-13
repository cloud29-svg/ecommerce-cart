import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  thumbnail: string;
}

interface ProductsResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
  tagTypes: ["Product"],
  endpoints: (builder) => ({
    getProducts: builder.query<ProductsResponse, void>({
      query: () => "/products?limit=0",
      providesTags: (result) =>
        result
          ? [
              ...result.products.map(({ id }) => ({ type: "Product" as const, id })),
              { type: "Product" as const, id: "LIST" },
            ]
          : [{ type: "Product" as const, id: "LIST" }],
    }),
    getProductById: builder.query<Product, number>({
      query: (id) => `/products/${id}`,
      providesTags: (result, error, id) => [{ type: "Product", id }],
    }),
  }),
});

export const { useGetProductsQuery, useGetProductByIdQuery } = productsApi;