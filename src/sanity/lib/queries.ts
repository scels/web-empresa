import { defineQuery } from "next-sanity";

export const PRODUCTS_QUERY = defineQuery(`
  *[_type == "product" && defined(slug.current) && defined(images[0].image.asset->url)]
    | order(featured desc, _createdAt desc) {
      "slug": slug.current,
      name,
      description,
      "category": category->{
        "slug": slug.current,
        name
      },
      "images": images[]{
        "url": image.asset->url,
        alt
      },
      status,
      price,
      dimensions,
      material,
      technique,
      reference,
      featured
    }
`);

export const PRODUCT_BY_SLUG_QUERY = defineQuery(`
  *[_type == "product" && slug.current == $slug][0]{
    "slug": slug.current,
    name,
    description,
    "category": category->{
      "slug": slug.current,
      name
    },
    "images": images[]{
      "url": image.asset->url,
      alt
    },
    status,
    price,
    dimensions,
    material,
    technique,
    reference,
    featured
  }
`);

export const CATEGORIES_QUERY = defineQuery(`
  *[_type == "category" && defined(slug.current)] | order(name.es asc) {
    "slug": slug.current,
    name,
    description,
    "parent": parent->{
      "slug": slug.current,
      name
    }
  }
`);

export const CATEGORY_BY_SLUG_QUERY = defineQuery(`
  *[_type == "category" && slug.current == $slug][0]{
    "slug": slug.current,
    name,
    description,
    "parent": parent->{
      "slug": slug.current,
      name
    }
  }
`);

export const PRODUCTS_BY_CATEGORY_QUERY = defineQuery(`
  *[_type == "product" && defined(slug.current) && defined(images[0].image.asset->url)
    && (category->slug.current == $slug || category->parent->slug.current == $slug)]
    | order(featured desc, _createdAt desc) {
      "slug": slug.current,
      name,
      description,
      "category": category->{
        "slug": slug.current,
        name
      },
      "images": images[]{
        "url": image.asset->url,
        alt
      },
      status,
      price,
      dimensions,
      material,
      technique,
      reference,
      featured
    }
`);

export const SITE_CONTENT_QUERY = defineQuery(`
  *[_type == "siteContent"][0]{
    homeHeroKicker,
    homeHeroTitle,
    homeHeroIntro,
    "homeHeroImage": homeHeroImage{
      "url": image.asset->url,
      alt
    },
    homeWorkshopTitle,
    homeStoryEyebrow,
    homeStoryTitle,
    homeStoryBody,
    "homeStoryImage": homeStoryImage{
      "url": image.asset->url,
      alt
    },
    workshopTitle,
    workshopIntro,
    "workshopImage": workshopImage{
      "url": image.asset->url,
      alt
    },
    workshopProcessEyebrow,
    workshopProcessTitle,
    workshopParagraphOne,
    workshopParagraphTwo,
    workshopStepsLabel,
    workshopSteps[]{title, body},
    contactTitle,
    contactIntro,
    contactPanelEyebrow,
    contactPanelTitle,
    contactPanelBody,
    contactLinkText,
    contactLinkUrl
  }
`);