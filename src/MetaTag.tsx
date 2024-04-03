import { Helmet } from "react-helmet-async";

interface MetaTagProps {
  title: string;
  description: string;
  url: string;
  img: string;
}
export const MetaTag = ({ title, description, url, img }: MetaTagProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />

      <meta property="og:title" content={title} />
      <meta property="og:site_name" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={img} />
      <meta property="og:url" content={url} />

      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={img} />

      <link rel="canonical" href={url} />
    </Helmet>
  );
};
