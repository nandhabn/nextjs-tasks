import Image from "next/image";

export const Header = () => {
  return (
    <header className="flex justify-between min-h-20 mx-20 items-center text-sm">
      <div className="flex flex-1 justify-center flex-shrink sm:p-5">
        <Image src={"/blockchain.png"} width={190} height={25} alt="logo" />
      </div>
      <nav className="text-white flex flex-grow items-center justify-around">
        <div className="space-x-10">
          <a href="#">Exchange</a>

          <a href="#">Last Transactions</a>

          <a href="#">Invite Friend</a>

          <a href="#">Notifications</a>
        </div>
      </nav>

      <div className="w-1/3 space-x-4 flex flex-1 flex-shrink justify-center">
        <button className="p-2.5 border-solid border border-[#9945FF] h-9 rounded-tl-lg rounded-br-lg text-sm/[16px]">
          LOG IN
        </button>
        <button className="p-2.5 border-none border-transparent bg-[#9945FF] h-9 rounded-tl-lg rounded-br-lg text-sm/[16px]">
          SIGN IN
        </button>
      </div>
    </header>
  );
};
