import React from "react";
import { Autocomplete, TextField, Box } from "@mui/material";
import BaseComponent from "./BaseComponent";

class AutocompleteComponent extends BaseComponent {
  createAutocomplete(label, options) {
    const id = this.generateId();
    return {
      id,
      element: (
        <Autocomplete
          id={id}
          options={options}
          renderInput={(params) => (
            <TextField {...params} label={label} variant="outlined" />
          )}
        />
      )
    };
  }

  createMultipleAutocomplete(label, options) {
    const id = this.generateId();
    return {
      id,
      element: (
        <Autocomplete
          id={id}
          multiple
          options={options}
          renderInput={(params) => (
            <TextField {...params} label={label} variant="outlined" />
          )}
        />
      )
    };
  }

  createFlagAutocomplete(label, countries) {
    const id = this.generateId();
    return {
      id,
      element: (
        <Autocomplete
          id="country-select-demo"
          sx={{ width: 300 }}
          options={countries}
          autoHighlight
          getOptionLabel={(option) => option.label}
          renderOption={(props, option) => {
            const { key, ...optionProps } = props;
            return (
              <Box
                key={key}
                component="li"
                sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
                {...optionProps}
              >
                <img
                  loading="lazy"
                  width="20"
                  srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                  src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                  alt=""
                />
                {option.label} ({option.code}) +{option.phone}
              </Box>
            );
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              label={label}
              slotProps={{
                htmlInput: {
                  ...params.inputProps,
                  autoComplete: 'new-password', // disable autocomplete and autofill
                },
              }}
            />
          )}
        />
      )
    };
  }
}

export default AutocompleteComponent;