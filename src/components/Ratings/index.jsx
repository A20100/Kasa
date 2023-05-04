import Star from "../../assets/empty_star.png"
import FullStar from "../../assets/star-full.png"

export default function Ratings({ rating }) {
    const stars = [1, 2, 3, 4, 5];
    return (
        <div className="star-wrapper">
            {stars.map((star) =>
                rating >= star ? (
                    <img
                        key={star}
                        className="star"
                        src={FullStar}
                        alt="star"
                    />
                ) : (
                    <img
                        key={star}
                        className="star"
                        src={Star}
                        alt="empty star"
                    />
                )
            )}
        </div>
    );
}