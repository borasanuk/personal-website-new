import "./featuredWork.scss";
import AOSImage from "./aos_img.png";
import { CSSProperties } from "react";

interface FeaturedWorkProps {
  style?: CSSProperties;
}

const FeaturedWork = (props: FeaturedWorkProps) => {
  return (
    <section className="b-featured-work bg-olive border-olive text-olive p-3 p-sm-4" style={props.style}>
      <div className="b-featured-title">Featured Work</div>
      <div className="py-1"></div>
      <img className="b-featured-img border-olive" src={AOSImage} alt="" />
      <div className="py-1"></div>
      <div className="b-featured-subtitle">Açık Ofis Saati</div>
    </section>
  );
};

export default FeaturedWork;
