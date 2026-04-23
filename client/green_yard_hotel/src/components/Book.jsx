import { useEffect, useState, useRef } from "react";

const RoomCarousel = ({ roomName, images }) => {
  const carouselRef = useRef(null);

  const scrollCarousel = (direction) => {
    const carousel = carouselRef.current;

    if (!carousel) {
      return;
    }

    const scrollAmount = carousel.clientWidth;

    carousel.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="room-carousel-wrapper">
      <button
        type="button"
        className="carousel-arrow carousel-arrow-left"
        onClick={() => scrollCarousel("left")}
        aria-label={`Previous ${roomName} image`}
      >
        &#8249;
      </button>

      <ul ref={carouselRef} className="room-carousel">
        {images.map((img, index) => (
          <li key={img || index} className="room-carousel-list">
            <img src={img} alt={roomName} className="room-carousel-image" />
          </li>
        ))}
      </ul>

      <button
        type="button"
        className="carousel-arrow carousel-arrow-right"
        onClick={() => scrollCarousel("right")}
        aria-label={`Next ${roomName} image`}
      >
        &#8250;
      </button>
    </div>
  );
};

const Book = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const findRoomData = async () => {
      try {
        const res = await fetch("/rooms");

        if (!res.ok) {
          let message = "Failed to fetch rooms.";

          try {
            const errorData = await res.json();
            message = errorData.error || message;
          } catch {
            // Ignore JSON parse errors and keep the fallback message.
          }

          throw new Error(message);
        }

        const data = await res.json();
        setRooms(data);
      } catch (err) {
        console.log(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    findRoomData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      {rooms.map((room) => (
        <div key={room._id || room.room}>
          <RoomCarousel roomName={room.room} images={room.imgUrl || []} />
          <h2>{room.room}</h2>
        </div>
      ))}
    </div>
  );
};

export default Book;
