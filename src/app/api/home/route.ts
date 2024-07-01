import { priceTableData, swapTokenDetails } from "@/staticdata";

export const GET = () => {
  return Response.json({
    tokenPriceTable: priceTableData,
    tokenSwap: swapTokenDetails,
  });
};
