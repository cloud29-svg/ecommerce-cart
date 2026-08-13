import "./CategoryGrid.css";
import category1 from "../assets/molded-pot.png";
import category2 from "../assets/flower-pot.png";
import category3 from "../assets/lamp.png";
import category4 from "../assets/molded-pots.png";

interface Category {
  id: number;
  title: string;
  itemCount: number;
  image: string;
}

const categories: Category[] = [
  { id: 1, title: "Furniture", itemCount: 5, image: category1 },
  { id: 2, title: "Furniture", itemCount: 5, image: category2 },
  { id: 3, title: "Furniture", itemCount: 5, image: category3 },
  { id: 4, title: "Furniture", itemCount: 5, image: category4 },
];

export function CategoryGrid() {
  return (
    <div className="category-grid">
      {categories.map((category, index) => (
        <div
          key={category.id}
          className={`category-card category-card--${index + 1}`}
          style={{ backgroundImage: `url(${category.image})` }}
        >
          <p className="category-card__count">{category.itemCount} Items</p>
          <h3 className="category-card__title">{category.title}</h3>
          <a href="#" className="category-card__link">Read More</a>
        </div>
      ))}
    </div>
  );
}