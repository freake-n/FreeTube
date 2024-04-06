import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, IconButton } from '@mui/material';
import { Search } from '@mui/icons-material';

const SearchBar = () => {

  const [searchTerm, setSearchTerm] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
        e.preventDefault();

        if(searchTerm){
            navigate(`/search/${searchTerm}`);
            setSearchTerm('');
        }
  }
  return (

    <Paper
        component="form"
        onSubmit={handleSubmit}
        sx={{
            borderRadius: 20,
            border: '1px solid #e3e3e3',
            pl: 2,
            boxShadow: 'none',
            mr: { sm: 5 },
            transition: 'transform 0.3s', 
            '&:hover': {
                transform: 'scale(1.05)',
                border: '3px solid #A32BCA',
            }
        }}
    >
        <input
            className="search-bar"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ background: 'transparent'}}
        />
        <IconButton type="submit" sx={{ p: '10px', color: '#A32BCA' }}>
            <Search />
        </IconButton>
    </Paper>
  )
}

export default SearchBar