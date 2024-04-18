import React, { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export default function BasicRadio() {
  const [value, setValue] = useState("female");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  return (
    <div className="flex flex-col gap-6">
      <FormControl>
        <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel
            value="male"
            control={
              <Radio
                sx={{
                  color: "#006BD6",
                  "&.Mui-checked": {
                    color: "#006BD6",
                  },
                }}
              />
            }
            label="Male"
          />
          <FormControlLabel
            value="female"
            control={
              <Radio
                sx={{
                  color: "#F08080",
                  "&.Mui-checked": {
                    color: "#F08080",
                  },
                }}
              />
            }
            label="Female"
          />
        </RadioGroup>
      </FormControl>
      <div>Value : {value}</div>
    </div>
  );
}
