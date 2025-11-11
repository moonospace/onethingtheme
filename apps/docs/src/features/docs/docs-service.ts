import { createServerFn } from "@tanstack/react-start";
import { allDocs, type Doc } from "content-collections";
import z from "zod";

export type BreadScrumb = {
  title: string;
  link: string;
};

function parseSlug(slug: string): string {
  return slug === "" ? "introduction" : slug;
}

export const getBreadcrumb = createServerFn()
  .inputValidator(z.object({ slug: z.string() }))
  .handler((ctx): BreadScrumb[] => {
    const slug = parseSlug(ctx.data.slug);
    const docs = allDocs;
    const filteredDocs = docs.filter((d) => d._meta.path === slug);
    const bds =
      filteredDocs.map((d) => ({
        title: d.title,
        link: d._meta.path,
      })) || [];
    return bds;
  });

export const getDocDetail = createServerFn()
  .inputValidator(z.object({ slug: z.string() }))
  .handler((ctx): Doc => {
    const slug = parseSlug(ctx.data.slug);
    const docs = allDocs;
    const doc = docs.filter((d) => d._meta.path === slug)[0];
    return doc;
  });
