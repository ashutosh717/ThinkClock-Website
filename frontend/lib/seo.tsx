import type { Metadata } from "next";

export const siteConfig = {
  name: "ThinkClock Battery Labs",
  legalName: "ThinkClock Innovations Pvt. Ltd.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://thinkclock.com",
  description:
    "Fast, non-invasive battery cell testing equipment and AI diagnostics for gigafactories, EV makers, and pack assemblers. Supported by Innovate UK.",
  ogImage: "/icon.png",
  twitterHandle: "@thinkclock",
  contactEmail: "contact@thinkclock.com",
  founder: "ThinkClock Battery Labs",
  address: {
    country: "United Kingdom & India",
  },
};

export function constructMetadata({
  title,
  description,
  canonical,
  ogImage = siteConfig.ogImage,
  noIndex = false,
  type = "website",
}: {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  noIndex?: boolean;
  type?: "website" | "article";
}): Metadata {
  const url = canonical
    ? `${siteConfig.url}${canonical.startsWith("/") ? canonical : `/${canonical}`}`
    : siteConfig.url;

  return {
    title,
    description,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: url,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: "en_US",
      type,
      images: [
        {
          url: ogImage,
          width: 512,
          height: 512,
          alt: `${title} | ${siteConfig.name}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: siteConfig.twitterHandle,
      images: [ogImage],
    },
  };
}

// ── JSON-LD Structured Data Generators ──

export function getOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    logo: `${siteConfig.url}/icon.png`,
    description: siteConfig.description,
    email: siteConfig.contactEmail,
    sameAs: [
      "https://www.linkedin.com/company/thinkclock",
      "https://x.com/thinkclock",
    ],
    funding: {
      "@type": "Grant",
      name: "Innovate UK Grant Support",
      funder: {
        "@type": "Organization",
        name: "Innovate UK",
        url: "https://www.ukri.org/councils/innovate-uk/",
      },
    },
    knowsAbout: [
      "Battery Cell Testing",
      "Electrochemical Impedance Spectroscopy (EIS)",
      "Battery State of Health (SOH) Analysis",
      "Inline Battery Sorting",
      "Battery Pack Testing Equipment",
      "Lithium-ion Degradation Analytics",
    ],
  };
}

export function getProductJsonLd({
  name,
  description,
  model,
  category = "Battery Cell Testing Equipment",
  throughput,
}: {
  name: string;
  description: string;
  model: string;
  category?: string;
  throughput?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    model,
    category,
    brand: {
      "@type": "Brand",
      name: "ThinkClock",
    },
    manufacturer: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      priceValidUntil: "2027-12-31",
      url: `${siteConfig.url}/products`,
    },
    additionalProperty: throughput
      ? [
          {
            "@type": "PropertyValue",
            name: "Testing Speed / Throughput",
            value: throughput,
          },
        ]
      : undefined,
  };
}

export function getFaqJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function getBreadcrumbJsonLd(
  items: { name: string; path: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.path.startsWith("/") ? item.path : `/${item.path}`}`,
    })),
  };
}

export function getArticleJsonLd({
  title,
  description,
  slug,
  datePublished,
  dateModified,
  author = "ThinkClock Battery Engineering Team",
}: {
  title: string;
  description: string;
  slug: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/blog/${slug}`,
    },
    url: `${siteConfig.url}/blog/${slug}`,
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      "@type": "Organization",
      name: author,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/icon.png`,
      },
    },
  };
}

export function JsonLd({ data }: { data: Record<string, unknown> | Array<Record<string, unknown>> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
