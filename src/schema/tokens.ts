import mongoose from "mongoose";

const Token = new mongoose.Schema(
  {
    tokenIcon: String,
    tokenSymbol: String,
    tokenPair: String,
    todayPrice: String,
    todayChangePercentage: String,
    todayChange: String,
    todayChangeDirection: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Tokens || mongoose.model("Tokens", Token);
