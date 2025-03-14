import React from "react";

import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import { Box, FormControl, useTheme } from "@mui/material";
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const MultipleSelect = ({
  setFormData,
  labelName,
  formData,
  name,
  placeholder,
  error,
  option,
}) => {
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  function getStyles(name, personName, theme) {
    return {
      fontWeight: personName.includes(name)
        ? theme.typography.fontWeightMedium
        : theme.typography.fontWeightRegular,
    };
  }
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setFormData((prev) => ({ ...prev, interestedProducts: [...value] }));
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <FormControl sx={{ width: "100%" }} size="small">
      <InputLabel id="demo-multiple-chip-label">{labelName}</InputLabel>
      <Select
        labelId="demo-multiple-chip-label"
        id="demo-multiple-chip"
        multiple
        placeholder={placeholder}
        value={formData[name]}
        onChange={handleChange}
        input={<OutlinedInput id="select-multiple-chip" label={labelName} />}
        renderValue={(selected) => (
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
            {selected.map((value) => (
              <Chip key={value} label={value} />
            ))}
          </Box>
        )}
        error={!!error}
        helperText={error}
        MenuProps={MenuProps}
      >
        {option.map((name) => (
          <MenuItem
            key={name.label}
            value={name.value}
            style={getStyles(name.label, personName, theme)}
          >
            {name.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default MultipleSelect;
