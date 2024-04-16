import React, { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function BasicCheckbox() {
  const [checked, setChecked] = useState({
    checkedA: true,
    checkedB: true,
    checkedC: true,
  });

  const [data, setData] = useState([
    {
      id: 1,
      label: "Item 1",
      checked: false,
    },
    {
      id: 2,
      label: "Item 2",
      checked: false,
    },
    {
      id: 3,
      label: "Item 3",
      checked: false,
    },
    {
      id: 4,
      label: "Item 4",
      checked: false,
    },
    {
      id: 5,
      label: "Item 5",
      checked: false,
    },
  ]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked({
      ...checked,
      [event.target.name]: event.target.checked,
    });
  };

  const handleChangeCheckedValue = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const check = data.map((item) => {
      if (item.label == event.target.name) {
        return {
          ...item,
          checked: event.target.checked,
        };
      } else {
        return { ...item };
      }
    });
    setData(check);
  };

  return (
    <div className="flex flex-col gap-20">
      <div className="flex gap-20 items-start">
        <div className="flex flex-col">
          <Checkbox
            {...label}
            disableRipple
            checked={checked.checkedA}
            name="checkedA"
            onChange={handleChange}
          />
          {checked.checkedA ? "checked" : "unchecked"}
        </div>
        <div className="flex flex-col">
          <Checkbox
            {...label}
            disableRipple
            checked={checked.checkedB}
            sx={{
              color: "#F08080",
              "&.Mui-checked": {
                color: "#F08080",
              },
            }}
            name="checkedB"
            onChange={handleChange}
          />
          {checked.checkedB ? "checked" : "unchecked"}
        </div>
        <div className="flex flex-col">
          <Checkbox
            {...label}
            disableRipple
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite />}
            checked={checked.checkedC}
            sx={{
              color: "#red",
              "&.Mui-checked": {
                color: "red",
              },
            }}
            name="checkedC"
            onChange={handleChange}
          />
          {checked.checkedC ? "checked" : "unchecked"}
        </div>
      </div>
      <div>
        <FormGroup className="flex flex-row gap-20">
          {data.map((item) => (
            <FormControlLabel
              key={item.id}
              control={
                <Checkbox
                  name={item.label}
                  value={item.checked}
                  onChange={(event) => handleChangeCheckedValue(event)}
                />
              }
              label={item.label}
            />
          ))}
        </FormGroup>
        {data.map((item) => {
          return (
            <div key={item.id} className="flex flex-col gap-10">
              {item.label} - {item.checked ? "true" : "false"}
            </div>
          );
        })}
      </div>
    </div>
  );
}
