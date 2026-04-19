import { team, type TeamMember } from "@/content/team";
import { site } from "@/content/site";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ArrowUp } from "@/components/ui/ArrowIcon";
import styles from "./Team.module.css";

export function Team() {
  return (
    <section className={styles.section} id="team" aria-labelledby="team-title">
      <div className={styles.head}>
        <div>
          <Eyebrow>Leadership</Eyebrow>
          <h2 id="team-title" className={styles.title}>
            The people behind <em>MoveEast</em>.
          </h2>
        </div>
        <p className={styles.lede}>
          A multicultural team operating between {site.offices.map((o) => o.city).join(", ")} — bridging European demand with Chinese industrial capability.
        </p>
      </div>

      <div className={styles.grid}>
        {team.map((m) => (
          <TeamCard key={m.slug} member={m} />
        ))}
      </div>

      <div className={styles.foot}>
        <span className={styles.footL}>
          <span className={styles.arrowUp} aria-hidden="true"><ArrowUp /></span>
          Four offices · Three continents
        </span>
        <span>{site.offices.map((o) => o.city).join(" · ")}</span>
      </div>
    </section>
  );
}

/**
 * Renderizza la bio con <b> per bioBolds e <span class="hl"> per bioHighlights.
 * Zero dangerouslySetInnerHTML — tutto JSX safe.
 */
function renderBio(bio: string, bolds: readonly string[], highlights: readonly string[]) {
  type Chunk = { text: string; style?: "b" | "hl" };
  let chunks: Chunk[] = [{ text: bio }];

  const applyMarker = (marker: string, style: "b" | "hl") => {
    const next: Chunk[] = [];
    for (const chunk of chunks) {
      if (chunk.style) {
        next.push(chunk);
        continue;
      }
      const parts = chunk.text.split(marker);
      parts.forEach((part, i) => {
        if (part) next.push({ text: part });
        if (i < parts.length - 1) next.push({ text: marker, style });
      });
    }
    chunks = next;
  };

  for (const m of bolds) applyMarker(m, "b");
  for (const h of highlights) applyMarker(h, "hl");

  return chunks.map((c, i) => {
    if (c.style === "b") return <b key={i}>{c.text}</b>;
    if (c.style === "hl") return <span key={i} className="hl">{c.text}</span>;
    return <span key={i}>{c.text}</span>;
  });
}

function TeamCard({ member }: { member: TeamMember }) {
  return (
    <article className={styles.card}>
      <span className={styles.num}>
        {String(member.order).padStart(2, "0")} / {member.roleCategory}
      </span>
      <div className={styles.photo} data-initials={member.initials} aria-hidden="true" />
      <div className={styles.body}>
        <h3 className={styles.name}>{member.name}</h3>
        <p className={styles.role}>{member.role}</p>
        <p className={styles.bio}>
          {renderBio(member.bio, member.bioBolds, member.bioHighlights)}
        </p>
      </div>
    </article>
  );
}
