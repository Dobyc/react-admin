import React from "react";
import { usePageSelector } from "@/utils/hook";
import type { Props } from "@/types";

function index(props: Props) {
  const data = usePageSelector(props);

  return <div>ab-c</div>;
}

export default index;
