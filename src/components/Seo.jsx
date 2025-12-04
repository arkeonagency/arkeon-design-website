import React from 'react';

const Seo = ({ 
  title, 
  description, 
  image = '/images/seo.jpg', // <--- UPDATED DEFAULT
  url 
}) => {
  const siteTitle = "Arkeon — Premium Digital Studio";
  const finalTitle = title ? `${title} | Arkeon` : siteTitle;
  const finalDesc = description || "Arkeon crafts premium, story-driven websites and brand identities that elevate businesses.";
  
  // Ensure absolute URL for social images (Social platforms require https://...)
  // You can hardcode your Vercel URL here if you don't have a domain yet
  const domain = "https://arkeon-design-website.vercel.app"; 
  const absoluteImage = image.startsWith('http') ? image : `${domain}${image}`;

  return (
    <>
      <title>{finalTitle}</title>
      <meta name="description" content={finalDesc} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charset="UTF-8" />
      
      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDesc} />
      <meta property="og:image" content={absoluteImage} />
      {url && <meta property="og:url" content={url} />}
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDesc} />
      <meta name="twitter:image" content={absoluteImage} />
    </>
  );
};

export default Seo;