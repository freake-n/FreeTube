import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import { logo } from '../utils/constants';
import SearchBar from './SearchBar';

const Navbar = () => (
    <Stack 
        direction="row" 
        alignItems="center" 
        p={2} 
        sx={{ position: 'sticky', background: '#000', top: 0, justifyContent: 'space-between', maxHeight: '70px', zIndex: '100' }}
    >
        <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
            <img src={logo} alt="logo" style={{ height: '90px', width: '100px', objectFit: 'cover', overflow: 'hidden' }} />
        </Link>
        <SearchBar />
    </Stack>
)

export default Navbar