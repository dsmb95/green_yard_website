import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const Home = () => {

    return (
        <>
            <div>
                <p>Image carousel here.</p>
                <Stack spacing={2} direction="row">
                    <Button variant="outlined" href="./Book.jsx">Check Rates</Button>
                </Stack>
            </div>
            <div>
                <p>Your home away from home.</p>
            </div>
            <div>
                <h2>About Us</h2>
                <p>About us here.</p>
            </div>
        </>
    );
};

export default Home;