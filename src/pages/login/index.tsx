import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "tdesign-react";

function Page() {
  const navigate = useNavigate();

  return (
    <div>
      <Button onClick={() => navigate("/home")}>login</Button>
    </div>
  );
}

export default Page;
