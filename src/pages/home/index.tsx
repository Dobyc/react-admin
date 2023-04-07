import React from "react";
import img from "@/assets/33.png";
import { useSelector } from "react-redux";
import { type RootState } from "@/store";
import type { Props } from "@/types";
import { usePageSelector } from "@/utils/hook";

function Page(props: Props) {
  const app = useSelector((state: RootState) => state.app);
  const data = usePageSelector(props);

  return (
    <div className="App dark:bg-black">
      home
      {/* <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img className="h-48 w-full object-cover md:h-full md:w-48" src={img} alt="Man looking at item at a store" />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Case study</div>
            <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
              Finding customers for your new business
            </a>
            <p className="mt-2 text-gray-500">
              Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.
            </p>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Page;
