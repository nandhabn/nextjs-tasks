export type PriceData = {
  tokenIcon: string;
  tokenSymbol: string;
  tokenPair: string;
  todayPrice: string;
  todayChangePercentage: string;
  todayChange: string;
  todayChangeDirection: string;
};
export const priceTableData: PriceData[] = [
  {
    tokenIcon: "/btc.svg",
    tokenSymbol: "BTC",
    tokenPair: "USD",
    todayPrice: "$63,000.00",
    todayChangePercentage: "-2.21%",
    todayChange: "-$1.426.18",
    todayChangeDirection: "down",
  },
  {
    tokenIcon: "/eth.svg",
    tokenSymbol: "ETH",
    tokenPair: "USD",
    todayPrice: "$3,408.90",
    todayChangePercentage: "-2.21%",
    todayChange: "-0.33%",
    todayChangeDirection: "down",
  },
  {
    tokenIcon: "/doge.svg",
    tokenSymbol: "DOGE",
    tokenPair: "USD",
    todayPrice: "$0.15",
    todayChangePercentage: "+15.75%",
    todayChange: "$0.02",
    todayChangeDirection: "up",
  },
  {
    tokenIcon: "/algo.svg",
    tokenSymbol: "ALGO",
    tokenPair: "USD",
    todayPrice: "$0.15",
    todayChangePercentage: "+0.00%",
    todayChange: "$0.00",
    todayChangeDirection: "noChange",
  },
  {
    tokenIcon: "/dot.svg",
    tokenSymbol: "DOT",
    tokenPair: "USD",
    todayPrice: "$5.64",
    todayChangePercentage: "+0.00%",
    todayChange: "$0.00",
    todayChangeDirection: "noChange",
  },
  {
    tokenIcon: "/uni.svg",
    tokenSymbol: "UNI",
    tokenPair: "USD",
    todayPrice: "$9.79",
    todayChangePercentage: "+0.00%",
    todayChange: "$0.00",
    todayChangeDirection: "noChange",
  },
  {
    tokenIcon: "/comp.svg",
    tokenSymbol: "COMP",
    tokenPair: "USD",
    todayPrice: "$45.67",
    todayChangePercentage: "-0.95%",
    todayChange: "-$0.44",
    todayChangeDirection: "down",
  },
];

export type TokenDetails = {
  tokenIcon: string;
  symbol: string;
  balance: string;
  price: string;
};

export const swapTokenDetails: Record<string, TokenDetails> = {
  btc: {
    tokenIcon: "./btc_outline.svg",
    symbol: "BTC",
    balance: "24,100",
    price: "32.4039",
  },
  bnb: {
    tokenIcon: "./bnb.svg",
    symbol: "BNB",
    balance: "63,790",
    price: "10.43",
  },
};
