import Star from "../../assets/star-inactive 2.png"

export default function Ratings({ rating }) {
    const stars = [1, 2, 3, 4, 5];
    return (
        <div className="star-rating">
            {stars.map((star) =>
                rating >= star ? (
                    <span className="checked">&#9733</span>
                ) : (
                    <img
                        className="star"
                        src={Star}
                        alt="empty star"
                    />
                )
            )}
        </div>
    );
}