import { notFound } from 'next/navigation';
import { LocalizedBlogPostContentPage } from '@/components/public/LocalizedPublicPages';
import { buildMarketingPostMetadata } from '@/lib/marketingSeo';
import { getMarketingContent, isMarketingLocale, secondaryMarketingLocales } from '@/lib/marketingContent';

type Props = {
  params: Promise<{ lang: string; slug: string }>;
};

export function generateStaticParams() {
  return secondaryMarketingLocales.flatMap((lang) =>
    getMarketingContent(lang).blog.posts.map((post) => ({ lang, slug: post.slug })),
  );
}

export async function generateMetadata({ params }: Props) {
  const { lang, slug } = await params;
  if (!isMarketingLocale(lang) || lang === 'es') return {};
  return buildMarketingPostMetadata(lang, slug);
}

export default async function LocalizedBlogPostPage({ params }: Props) {
  const { lang, slug } = await params;
  if (!isMarketingLocale(lang) || lang === 'es') notFound();
  const page = <LocalizedBlogPostContentPage locale={lang} slug={slug} />;
  if (!getMarketingContent(lang).blog.posts.some((post) => post.slug === slug)) notFound();
  return page;
}
