"use client";
import { PriceData } from "@/staticdata";
import Image from "next/image";

export const TableRow = ({
  tokenIcon,
  tokenPair,
  tokenSymbol,
  todayChange,
  todayPrice,
  todayChangePercentage,
  todayChangeDirection,
}: {
  tokenIcon: string;
  tokenPair: string;
  tokenSymbol: string;
  todayChange: string;
  todayPrice: string;
  todayChangePercentage: string;
  todayChangeDirection: string;
}) => {
  const textColorClass = ` text-${
    todayChangeDirection === "up"
      ? "#6dffdc"
      : todayChangeDirection === "down"
      ? "#ff5454"
      : "[#666666]"
  }`;

  return (
    <tr className="grid grid-cols-9 gap-4 items-center">
      <td className="col-span-2 flex flex-row items-center">
        <div className="flex items-center min-h-5 w-16 h-16 overflow-hidden">
          <Image
            className="w-20 object-cover"
            src={tokenIcon}
            height={150}
            width={150}
            alt="token logo"
          />
        </div>
        <p className="ms-3 text-lg w-fit">
          {tokenSymbol}/<span className="text-[#666666]">{tokenPair}</span>
        </p>
      </td>
      <td className="col-span-2">{todayPrice}</td>
      <td className={"col-span-2" + textColorClass}>{todayChangePercentage}</td>
      <td className={"col-span-2" + textColorClass}>{todayChange}</td>
      <td className="w-full flex justify-end col-span-1 flex-grow-[0!important]">
        <button className="bg-[#6DFF8B] text-[#00554B] p-[10px]">Trade</button>
      </td>
    </tr>
  );
};

export const TableHead = () => {
  return (
    <tr className="grid grid-cols-9 gap-4 items-center border-[#464646] border-b pb-3 [&>*]:text-start [&>*]:text-xl [&>*]:font-semibold [&>*]:leading-5">
      <th className="col-span-2">ASSETS</th>
      <th className="col-span-2">LAST TRADE</th>
      <th className="col-span-2">24H %</th>
      <th className="col-span-2">24H CHANGE</th>
      <th className="w-full flex justify-end col-span-1 text-[#3980FF]">
        MORE &gt;
      </th>
    </tr>
  );
};

export const TokenPriceTable = ({ priceData }: { priceData: PriceData[] }) => {
  return (
    <table className="table-auto w-full mt-[10px]">
      <thead className="h-[50px]">
        <TableHead />
      </thead>
      <tbody className="[&>*]:h-20 text-lg">
        {priceData.map((data, i) => (
          <TableRow {...data} key={i} />
        ))}
      </tbody>
    </table>
  );
};
