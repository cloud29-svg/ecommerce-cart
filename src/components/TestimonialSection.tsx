import "./TestimonialSection.css";
import profile from "../assets/51b41f20db95c385c8df9dbc1cafee5ea93687e3.png";
import gallery1 from "../assets/unsplash_0y8p69vwIYM.png";
import gallery2 from "../assets/unsplash_ah7yIXWrtKs.png";
import gallery3 from "../assets/unsplash_6_dx4H4yi1Y.png";
import gallery4 from "../assets/unsplash_GHztzvLLOdQ.png";
import gallery5 from "../assets/unsplash_UUTOuXqaExk.png";
import gallery6 from "../assets/unsplash_rhn8ff1G_QY.png";
import gallery7 from "../assets/unsplash_jo40QKbxUP0.png";
import gallery8 from "../assets/unsplash_QLGA5Zv3doo.png";
import gallery9 from "../assets/unsplash_1R1ecHV4i0Y.png";

const galleryImages = [
  gallery1, gallery2, gallery3,
  gallery4, gallery5, gallery6,
  gallery7, gallery8, gallery9,
];

export function TestimonialSection() {
  return (
    <section className="testimonial">
      <div className="testimonial__content">
        <h2 className="testimonial__heading">What they say about us</h2>

        <img className="testimonial__avatar" src={profile} alt="Regina Miles" />

        <p className="testimonial__stars">{"\u2605\u2605\u2605\u2605\u2606"}</p>

        <p className="testimonial__quote">
          Slate helps you see how many more days you need to work to reach your financial goal.
        </p>
        <p className="testimonial__name">Regina Miles</p>
        <p className="testimonial__role">Designer</p>
      </div>

      <div className="testimonial__gallery">
        {galleryImages.map((img, index) => (
          <img
            key={index}
            className="testimonial__gallery-img"
            src={img}
            alt=""
            role="presentation"
          />
        ))}
      </div>
    </section>
  );
}