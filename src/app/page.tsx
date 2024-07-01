"use client";
import { Header } from "@/components/Header";
import { TokenPriceTable } from "@/components/PriceTable";
import { TokenSwap } from "@/components/TokenSwap";
import { environment } from "@/constants";
import {
  PriceData,
  TokenDetails,
  priceTableData,
  swapTokenDetails as tokenDetails,
} from "@/staticdata";
import { useEffect, useState } from "react";

const HeroSection = () => {
  return (
    <div className="flex items-center mt-[90px] flex-col">
      <p className="max-w-3xl text-[68px] leading-[76px] text-center">
        Easy send and Request Crypto.
      </p>
      <p className="mt-[30px] max-w-lg text-center">
        Bring blockchain to the people. Solana supports experiences for power
        users, new consumers, and everyone in between.
      </p>
    </div>
  );
};

export default function Home() {
  const [pageData, setPageData] = useState<
    | {
      tokenPriceTable: PriceData[];
        tokenSwap: {
          btc: TokenDetails;
          bnb: TokenDetails;
        };
      }
    | undefined
  >(undefined);

  useEffect(() => {
    fetch(`${environment.baseUrl}/api/home`, {
      cache: "no-cache",
    })
      .then((res) => res.json())
      .then((pageData) => setPageData(pageData));
  }, []);

  if (!pageData) {
    return <></>;
  }

  return (
    <div className="bg-[url('/hero-bg.jpeg')] bg-[39%_0%] bg-[length:1600px_839px] min-h-[839px] bg-no-repeat">
      <Header />
      <HeroSection />
      <div className="mx-[120px] border border-[#464646] rounded-[10px] py-10 px-10 mt-14 bg-[#000000CC] backdrop-blur">
        <TokenPriceTable priceData={pageData.tokenPriceTable} />
      </div>
      <div className="mx-[120px] border border-[#464646] rounded-[10px]  py-10 px-10 mt-14 bg-[#000000CC] mb-40">
        <TokenSwap
          tokenA={pageData.tokenSwap.btc}
          tokenB={pageData.tokenSwap.bnb}
        />
      </div>
    </div>
  );
}
