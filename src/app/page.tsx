import Image from "next/image";
import Chart from "@/components/layout/Chart/Chart";
import Withdraw from "@/components/layout/Chart/Withdraw";
import { Figures } from "@/components/layout/Figures/Figures";
import Transactions from "@/components/layout/Transactions/Transactions";
import Filter from "@/components/layout/Filter/Filter";
import Overlay from "@/components/layout/Filter/Overlay";

export default function Home() {
  return (
    <main className="pt-10 container flex flex-col">
      <div className="flex justify-between flex-wrap">
        <div
        className="pt-32 pb-32"
        >
          <Withdraw />
          <Chart />
        </div>
        <Figures />
      </div>
      <Transactions />
      <Filter />
      <Overlay />
    </main>
  );
}
