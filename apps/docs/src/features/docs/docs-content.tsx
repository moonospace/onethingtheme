import { MDXContent } from "@content-collections/mdx/react";
import { ArticleContent } from "@shared/components";
import type { Doc } from "content-collections";

type Props = {
  doc: Doc;
};

export function DocsContent({ doc }: Props) {
  return (
    <article className="flex flex-col">
      <ArticleContent>
        <h1>{doc.title}</h1>
        <p className="-mt-2! text-foreground/60">{doc.description}</p>

        <MDXContent code={doc.mdx} />
      </ArticleContent>
    </article>
  );
}
