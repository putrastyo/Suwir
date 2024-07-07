type CardProps = {
  onClick: () => void;
  image: string;
};

const Card = ({ onClick, image }: CardProps) => {
  return (
    <button
      className="w-[90px] h-[90px] rounded-full bg-cover border border-black"
      style={{ backgroundImage: `url(${image})` }}
      onClick={onClick}
    ></button>
  );
};

export default Card;
