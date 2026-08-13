import "./CtaBanner.css";
import ctaImg from "../assets/utensils.png";

export function CtaBanner() {
  return (
    <section className="cta">
      <div className="cta__content">
        <p className="cta__eyebrow">Designing Better Experience</p>
        <h2 className="cta__heading">Problems trying to resolve the conflict between</h2>
        <p className="cta__description">
          Problems trying to resolve the conflict between the two major realms of Classical physics:
        </p>
        <p className="cta__price">$16.48</p>
        <button type="button" className="cta__button">ADD YOUR CALL TO ACTION</button>
      </div>

      <div className="cta__image-wrap">
        <img src={ctaImg} alt="Kitchen utensils in a jar" className="cta__image" />
      </div>
    </section>
  );
}