import { useRef } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const hotelPhotos = Object.entries(
    import.meta.glob('../assets/hotel_photos/*.{jpg,JPG,jpeg,JPEG,png,PNG}', {
        eager: true,
        import: 'default',
    })
)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([path, src]) => ({
        src,
        alt: path.split('/').pop()?.split('.')[0].replace(/[_-]/g, ' ') || 'Hotel photo',
    }));

const Home = () => {
    const carouselRef = useRef(null);

    const scrollCarousel = (direction) => {
        const carousel = carouselRef.current;

        if (!carousel) {
            return;
        }

        const scrollAmount = carousel.clientWidth;

        carousel.scrollBy({
            left: direction === 'left' ? -scrollAmount : scrollAmount,
            behavior: 'smooth',
        });
    };

    return (
        <>
            <div>
                <div className="carousel-wrapper">
                    <button
                        type="button"
                        className="carousel-arrow carousel-arrow-left"
                        onClick={() => scrollCarousel('left')}
                        aria-label="Previous slide"
                    >
                        &#8249;
                    </button>

                    <ul className="carousel-home" ref={carouselRef}>
                        {hotelPhotos.map((photo) => (
                            <li key={photo.src} className="carousel-list">
                                <img src={photo.src} alt={photo.alt} className="indiv-photo" />
                            </li>
                        ))}
                    </ul>

                    <button
                        type="button"
                        className="carousel-arrow carousel-arrow-right"
                        onClick={() => scrollCarousel('right')}
                        aria-label="Next slide"
                    >
                        &#8250;
                    </button>
                </div>

                <Stack spacing={2} direction="row">
                    <Button variant="outlined" href="/our-rooms">Our Rooms</Button>
                </Stack>
            </div>
            <div>
                <p>Your home away from home.</p>
            </div>
            <div>
                <h2>About Us</h2>
                <p>Welcome to Green Yard Hotel, your premier destination for comfort and relaxation in the heart of Cauayan City, Isabela.We price ourselves on offering a "home away from home" experience that blends modern convenience with warm hospitality.
                     Weather you are visiting for business, a quick weekedn escape, or a special family celebration, Green Yard provides a versatile sanctuary designed to meet all your needs.</p>
            </div>
        </>
    );
};

export default Home;
