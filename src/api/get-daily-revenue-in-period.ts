import { api } from "@/lib/axios";

export type getDailyRevenueInPeriodResponse = {
  date: string;
  receipt: number;
}[];
export async function getDailyRevenueInPeriod() {
  const response = await api.get<getDailyRevenueInPeriodResponse>(
    "/metrics/daily-receipt-in-period",
  );
  return response.data;
}
