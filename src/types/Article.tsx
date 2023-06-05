import { ArticleDatas } from "@/articles";

type ElementType<T extends ReadonlyArray<unknown>> = T extends ReadonlyArray<
  infer ElementType
>
  ? ElementType
  : never;

export type ArticleType = ElementType<typeof ArticleDatas>;

export interface ArticlePropsInterface {
  isHero?: boolean;
  post: ArticleType;
}
