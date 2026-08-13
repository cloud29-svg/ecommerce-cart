import "./ServicesSection.css";
import iconBook from "../assets/icon cool-icon-1153.png";
import iconNewspaper from "../assets/carbon_book.png";
import iconGraph from "../assets/Vector (1).png";

interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

const services: Service[] = [
  { id: 1, title: "Easy Wins", description: "Get your best looking smile now!", icon: iconBook },
  { id: 2, title: "Concrete", description: "Defalcate is most focused in helping you discover your most beautiful smile", icon: iconNewspaper },
  { id: 3, title: "Hack Growth", description: "Overcame any hurdle or any other problem.", icon: iconGraph },
];

export function ServicesSection() {
  return (
    <section className="services">
      <p className="services__eyebrow">Featured Products</p>
      <h2 className="services__heading">THE BEST SERVICES</h2>
      <p className="services__subtitle">Problems trying to resolve the conflict between</p>

      <div className="services__grid">
        {services.map((service) => (
          <div key={service.id} className="service-item">
            <img className="service-item__icon" src={service.icon} alt="" role="presentation" />
            <h3 className="service-item__title">{service.title}</h3>
            <p className="service-item__description">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}