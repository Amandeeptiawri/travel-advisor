import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Box, InputBase, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import useStyles from './style';
 


const Header = ({ onSearch }) => {
  const classes = useStyles();
  const [searchInput, setSearchInput] = useState('');

  const handleSearch = () => {
    if (searchInput.trim()) {
      onSearch(searchInput);
    } else {
      alert('Please enter a location');
    }
  };

  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h5" className={classes.title}>
          Travel Advisor
        </Typography>
        <Box className={classes.search}>
         
          <InputBase
            placeholder="Search for a location..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className={classes.inputInput}
          />
          <Button
            variant="contained"
            color="primary"
            className={classes.searchButton}
            onClick={handleSearch}
          >
          <SearchIcon className={classes.searchIcon} />
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
