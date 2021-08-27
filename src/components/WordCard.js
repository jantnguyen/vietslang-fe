import React, { Component } from 'react';
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";


 class WordCard extends Component {
  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Type any words..."
          InputAdornment={{
            endAdornment: (
              <InputAdornment>
                <IconButton>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            )
          }}
        />
      </div>
    )
  }
}
export default WordCard