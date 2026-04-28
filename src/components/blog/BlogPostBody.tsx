"use client";

import { useEffect, useRef } from "react";
import { RichText } from "@payloadcms/richtext-lexical/react";
import type { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";

type Props = {
  data: SerializedEditorState;
  headingSlugs: readonly string[];
};

export function BlogPostBody({ data, headingSlugs }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const h2s = Array.from(el.querySelectorAll("h2"));
    h2s.forEach((h, i) => {
      if (!h.id && headingSlugs[i]) h.id = headingSlugs[i]!;
    });
  }, [headingSlugs]);

  return (
    <div ref={ref}>
      <RichText data={data} />
    </div>
  );
}
