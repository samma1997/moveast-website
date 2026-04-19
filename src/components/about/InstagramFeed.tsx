import { Eyebrow } from "@/components/ui/Eyebrow";
import { PillBtn } from "@/components/ui/PillBtn";
import { igPosts, igHandle, igProfileUrl, type IgPost } from "@/content/instagram";
import styles from "./InstagramFeed.module.css";

export function InstagramFeed() {
  return (
    <section className={styles.section} id="instagram" aria-labelledby="ig-title">
      <div className={styles.head}>
        <div>
          <Eyebrow>Latest from Instagram</Eyebrow>
          <h2 id="ig-title" className={styles.title}>
            The view from <em>Shenzhen</em>, updated daily.
          </h2>
        </div>
        <div className={styles.headR}>
          <p className={styles.lede}>
            Institutional meetings, factory visits, and industry events. Follow{" "}
            <b>@{igHandle}</b> for a behind-the-scenes look.
          </p>
          <PillBtn href={igProfileUrl} external>
            Follow on Instagram
          </PillBtn>
        </div>
      </div>

      <div className={styles.grid}>
        {igPosts.map((post) => (
          <IgCard key={post.id} post={post} />
        ))}
      </div>

      <div className={styles.foot}>
        <PillBtn href={igProfileUrl} external>
          See all posts on Instagram
        </PillBtn>
      </div>
    </section>
  );
}

function IgCard({ post }: { post: IgPost }) {
  return (
    <a
      className={styles.card}
      href={post.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Instagram post: ${post.caption.slice(0, 80)}…`}
    >
      <div className={styles.top}>
        <div className={styles.who}>
          <span className={styles.avatar} aria-hidden="true">
            <span className={styles.avatarInner}>AP</span>
          </span>
          <span className={styles.handle}>
            <b>{igHandle}</b>
            <span>{post.location}</span>
          </span>
        </div>
        <span className={styles.follow}>Follow</span>
      </div>

      <div className={styles.media}>
        <div className="ph" />
        <span className={styles.type} aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <rect x="9" y="9" width="6" height="6" rx="1" />
          </svg>
        </span>
        <span className={styles.date}>{post.dateLabel}</span>
      </div>

      <div className={styles.meta}>
        <span className={styles.stat}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-label="Likes">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21l8.84-8.61a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
          {post.likes}
        </span>
        <span className={styles.stat}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-label="Comments">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
          {post.comments}
        </span>
        <span className={styles.spacer} />
        <time dateTime={post.dateIso}>{post.dateFormatted}</time>
      </div>

      <p className={styles.caption}>
        <b>{igHandle}</b>
        {post.caption}
      </p>
    </a>
  );
}
