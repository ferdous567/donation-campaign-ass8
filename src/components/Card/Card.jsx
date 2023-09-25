
const Card = ({card}) => {
    const {image} =card;
    return (
        <div>
            <img src={image} alt="" />
        </div>
    );
};

export default Card;