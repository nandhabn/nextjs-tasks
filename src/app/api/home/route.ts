import tokens from "@/schema/tokens";
import connectDB from "@/services/dbConnection";
import { swapTokenDetails } from "@/staticdata";

export const GET = async () => {
    await connectDB();
  const tokenDetails = await tokens.find({});
  return Response.json({
    tokenPriceTable: tokenDetails,
    tokenSwap: swapTokenDetails,
  });
};
