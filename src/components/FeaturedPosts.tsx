import "./FeaturedPosts.css";
import post1 from "../assets/unsplash_hHdHCfAifHU.png";
import post2 from "../assets/unsplash_tVEqStC2uz8.png";
import post3 from "../assets/unsplash_dEGu-oCuB1Y.png";

interface Post {
  id: number;
  image: string;
  tags: string[];
  title: string;
  description: string;
  date: string;
  comments: number;
}

const posts: Post[] = [
  {
    id: 1,
    image: post1,
    tags: ["Google", "Trending", "New"],
    title: "Loudest à la Madison #1 (L'integral)",
    description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: "22 April 2021",
    comments: 10,
  },
  {
    id: 2,
    image: post2,
    tags: ["Google", "Trending", "New"],
    title: "Loudest à la Madison #1 (L'integral)",
    description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: "22 April 2021",
    comments: 10,
  },
  {
    id: 3,
    image: post3,
    tags: ["Google", "Trending", "New"],
    title: "Loudest à la Madison #1 (L'integral)",
    description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: "22 April 2021",
    comments: 10,
  },
];

export function FeaturedPosts() {
  return (
    <section className="posts">
      <p className="posts__eyebrow">Practice Advice</p>
      <h2 className="posts__heading">Featured Posts</h2>

      <div className="posts__grid">
        {posts.map((post) => (
          <div key={post.id} className="post-card">
            <div className="post-card__image-wrap">
              <img className="post-card__image" src={post.image} alt={post.title} />
              <span className="post-card__badge">NEW</span>
            </div>

            <div className="post-card__body">
              <div className="post-card__tags">
                {post.tags.map((tag) => (
                  <span key={tag} className="post-card__tag">{tag}</span>
                ))}
              </div>

              <h3 className="post-card__title">{post.title}</h3>
              <p className="post-card__description">{post.description}</p>

              <div className="post-card__footer">
                <span className="post-card__meta">
                  <svg aria-hidden="true" width="16" height="16" viewBox="0 0 14 14" fill="none">
                    <rect x="1.5" y="2.5" width="11" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.2" />
                    <line x1="1.5" y1="5.5" x2="12.5" y2="5.5" stroke="currentColor" strokeWidth="1.2" />
                    <line x1="4" y1="1" x2="4" y2="3.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                    <line x1="10" y1="1" x2="10" y2="3.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                  </svg>
                  {post.date}
                </span>
                <span className="post-card__meta">
                  <svg aria-hidden="true" width="16" height="14.67" viewBox="0 0 14 14" fill="none">
                    <path d="M1.5 3.5C1.5 2.67 2.17 2 3 2H11C11.83 2 12.5 2.67 12.5 3.5V8.5C12.5 9.33 11.83 10 11 10H5L2 12.5V10H3C2.17 10 1.5 9.33 1.5 8.5V3.5Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
                  </svg>
                  {post.comments} comments
                </span>
              </div>
            </div>

            <a href="#" className="post-card__link">
              Learn More
              <svg aria-hidden="true" width="9" height="16" viewBox="0 0 9 16" fill="none">
                <path d="M1 1L7 8L1 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}