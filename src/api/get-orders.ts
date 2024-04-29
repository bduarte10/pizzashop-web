import { api } from "@/lib/axios";

interface GetOrdersQuery {
  pageIndex: number;
}

interface GetOrdersResponse {
  orders: {
    orderId: string;
    createdAt: string;
    status: "pending" | "canceled" | "processing" | "delivering" | "delivered";
    customerName: string;
    total: number;
  }[];
  meta: {
    pageIndex: number;
    perPage: number;
    totalCount: number;
  };
}

export async function GetOrders({ pageIndex }: GetOrdersQuery) {
  const response = await api.get<GetOrdersResponse>("/orders", {
    params: {
      pageIndex,
    },
  });
  return response.data;
}
