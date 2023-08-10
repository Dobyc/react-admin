import React from "react";
import { usePageSelector } from "@/hooks";

function index(props: Props) {
  const data = usePageSelector(props);

  return <div>ab-c</div>;
}

export default index;
