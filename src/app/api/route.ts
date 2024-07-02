import tokens from "@/schema/tokens";
import connectDB from "@/services/dbConnection";
import { priceTableData, swapTokenDetails } from "@/staticdata";

export const GET = async () => {
  try {
    await connectDB();
    return Response.json({ status: "good" });
  } catch {
    return Response.json({ status: "bad" });
  }
};
