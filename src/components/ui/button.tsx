import React, { useState } from "react";
import Button from "@mui/material/Button";

export default function BasicButton() {
  const [count, setCount] = useState({
    text: 0,
    contained: 0,
    outlined: 0,
  });

  const handleClickButton = (e: React.SyntheticEvent) => {
    const { name } = e.target as HTMLButtonElement;
    setCount((prevCount) => ({
      ...prevCount,
      [name]: prevCount[name as keyof typeof prevCount] + 1,
    }));
  };

  return (
    <div className="flex gap-6">
      <div className="flex flex-col gap-6">
        <Button variant="text" name="text" onClick={handleClickButton}>
          Text
        </Button>
        Clicked {count.text}
      </div>
      <div className="flex flex-col gap-6">
        <Button
          variant="contained"
          name="contained"
          onClick={handleClickButton}
        >
          Contained
        </Button>
        Clicked {count.contained}
      </div>
      <div className="flex flex-col gap-6">
        <Button variant="outlined" name="outlined" onClick={handleClickButton}>
          Outlined
        </Button>
        Clicked {count.outlined}
      </div>
    </div>
  );
}
