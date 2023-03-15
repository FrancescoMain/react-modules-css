import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import styles from "./Like.module.css";

interface Props {
  onClick: () => void;
}

const Like = ({ onClick }: Props) => {
  const [status, setStatus] = useState(false);

  const toggle = () => {
    setStatus(!status);
    onClick();
  };
  if (status) {
    return <AiFillHeart color="#ff6b81" onClick={toggle}></AiFillHeart>;
  } else {
    return <AiOutlineHeart onClick={toggle}></AiOutlineHeart>;
  }
};

export default Like;
