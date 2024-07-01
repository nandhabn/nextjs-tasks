"use client";
import { TokenDetails } from "@/staticdata";
import Image from "next/image";
import { useState } from "react";

export const TokenSwapInput = ({
  tokenIcon,
  symbol,
  balance,
  start = false,
}: {
  tokenIcon: string;
  symbol: string;
  balance: string;
  start?: boolean;
}) => {
  return (
    <div
      className={
        "bg-[#1E1E1E] py-5 px-12 h-32 w-1/2 me-1 flex justify-between" +
        (start ? " rounded-s-lg" : " rounded-e-lg")
      }
    >
      <div className="w-2/3">
        <input
          type="number"
          placeholder="0.00"
          className="text-5xl bg-transparent outline-none w-full"
        />
        <p className="text-sm text-[#666666]">$0.00</p>
      </div>
      <div>
        <div className="bg-black px-5 py-[10px] w-32 flex flex-row items-center">
          <Image
            src={tokenIcon}
            width={100}
            height={100}
            alt="token"
            className="w-9 p-1 h-10"
          />
          <p className="text-xl text-[#868686] ms-0 bg-transparent outline-none">
            {symbol}
          </p>
          <div className="ms-1 w-4 h-8 items-center flex justify-center">
            <Image
              src="./open-menu.svg"
              width={100}
              height={100}
              className="h-[10px] w-[6px]"
              alt="menu"
            />
          </div>
        </div>
        <p className="mt-2">
          Balance: <span className="text-sm text-[#3980FF]">{balance}</span>
        </p>
      </div>
    </div>
  );
};

export const TokenSwap = ({
  tokenA: defaultAToken,
  tokenB: defaultBToken,
}: {
  tokenA: TokenDetails;
  tokenB: TokenDetails;
}) => {
  const [tokenA, setTokenA] = useState(defaultAToken);
  const [tokenB, setTokenB] = useState(defaultBToken);

  const swapTokens = () => {
    setTokenA(tokenB);
    setTokenB(tokenA);
  };
  return (
    <>
      <div className="flex flex-row justify-between">
        <p>SWAP TOKENS</p>
        <Image
          src={"./gear_outline.svg"}
          height={100}
          width={100}
          alt="settings"
          className="w-7"
        />
      </div>
      <div className="mt-12 flex flex-row relative">
        <TokenSwapInput {...tokenA} start />
        <TokenSwapInput {...tokenB} />
        <button
          className="rounded-full p-[10px] bg-black absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          onClick={swapTokens}
        >
          <Image
            src={"./coins-swap.svg"}
            width={100}
            height={100}
            alt="coins_swap"
            className="w-8 h-8"
          />
        </button>
      </div>

      <div className="mt-8 flex justify-center items-center">
        <button className="py-3 px-4 border-none border-transparent bg-[#9945FF] w-64 h-[51px] rounded-tl-lg rounded-br-lg text-sm/[16px]">
          SWAP TOKENS
        </button>
      </div>

      <div className="mt-8 flex justify-between">
        <div>
          <p>
            1 {tokenA.symbol} = {tokenB.price} {tokenB.symbol}
          </p>
          <p className="text-[#3980FF]">Free exchange</p>
        </div>

        <div className="flex items-center justify-center">
          <p className="text-[#666666]">Updates in 4s</p>
        </div>
      </div>
    </>
  );
};
