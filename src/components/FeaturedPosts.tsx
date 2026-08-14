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
                  <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
                    <path d="M12 7v5l3.5 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M3.5 8A9 9 0 0 1 6 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                    <path d="M3 8L3.5 5.5L6 6.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {post.date}
                </span>
                <span className="post-card__meta">
                  <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M3 16l5-5 4 3 6-7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M14 7h4v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M3 20h18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                  {post.comments} comments
                </span>
              </div>
            </div>

            <a href="#" className="post-card__link">
              Learn More
              <svg aria-hidden="true" width="9" height="16" viewBox="0 0 9 16" fill="none" color="#23A6F0">
                <path d="M1 1L7 8L1 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}