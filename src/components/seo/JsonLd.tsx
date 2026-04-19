/**
 * Inline JSON-LD script (server component).
 * Usage: <JsonLd data={organizationSchema()} />
 */

type Props = {
  data: unknown | unknown[];
};

export function JsonLd({ data }: Props) {
  const payload = Array.isArray(data) ? data.filter(Boolean) : [data];
  return (
    <>
      {payload.map((d, i) => (
        <script
          key={i}
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(d) }}
        />
      ))}
    </>
  );
}
