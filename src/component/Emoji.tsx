import { Image, ImageProps } from "@chakra-ui/react";
import bullseye from "../assets/bullseye.jpg";
import neutral from "../assets/neutral.png";
import thumsup from "../assets/thumsup.jpg";
interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  const emojiMap: { [key: number]: ImageProps } = {
    3: {
      src: neutral,
      alt: "neutral",
      boxSize: "25px",
      borderRadius: "8px",
      marginTop: 3,
    },
    4: {
      src: thumsup,
      alt: "recomended",
      boxSize: "25px",
      borderRadius: "8px",
      marginTop: 3,
    },
    5: {
      src: bullseye,
      alt: "exceptional",
      boxSize: "25px",
      borderRadius: "8px",
      marginTop: 3,
    },
  };
  if (rating < 3) return null;
  return <Image {...emojiMap[rating]} />;
};

export default Emoji;
