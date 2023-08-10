import React, { useCallback } from "react";
import img from "@/assets/33.png";
import { useDispatch, useSelector } from "react-redux";
import { type RootState } from "@/store";
import { useAppDispatch, usePageSelector } from "@/hooks";
import { Button } from "tdesign-react";
// import { login } from "@/store/user";
import dayjs from "dayjs";

function Page(props: Props) {
  const app = useSelector((state: RootState) => state.app);
  const data = usePageSelector(props);
  const dispatch = useAppDispatch();

  const handleLogin = useCallback(() => {
    console.log("login");
    // dispatch(login({ userName: "root", password: "123456" }));
  }, []);

  return (
    <div className="App dark:bg-black">
      <h2>Home</h2>
      <Button onClick={handleLogin}>login</Button>
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
