import { gql } from 'graphql-request';

// Combined query for Home Page data (Hero + Location)
export const GET_PAGE_HOME_QUERY = gql`
  query GetPageHome {
    pageHomes(first: 1) {
      heroBadge
      heroTitle
      heroQuote
      heroDescription
      heroCtaPrimary
      heroCtaSecondary
      heroImage {
        url
      }
      locationTitle
      locationDescription
      locationMapUrl
      contactEmail
      contactPhone
      contactAddress
    }
  }
`;

export const GET_PRICING_QUERY = gql`
  query GetPricing {
    pricingPlans(first: 100) {
      name
      price
      period
      features
      isPopular
      level {
        name
        slug
      }
    }
  }
`;

export const GET_POSTS_QUERY = gql`
  query GetPosts {
    blogPosts(first: 100, orderBy: publishedDate_DESC) {
      id
      title
      slug
      excerpt
      coverImage {
        url
      }
      bannerImage {
        url
      }
      thumbnail {
        url
      }
      category {
        name
        slug
      }
      publishedDate
      author {
        name
        photo {
          url
        }
      }
    }
  }
`;

export const GET_POST_BY_SLUG_QUERY = gql`
  query GetPostBySlug($slug: String!) {
    blogPost(where: { slug: $slug }) {
      title
      content {
        html
        text
      }
      coverImage {
        url
      }
      bannerImage {
        url
      }
      thumbnail {
        url
      }
      publishedDate
      author {
        name
        bio
        photo {
          url
        }
      }
      category {
        name
        slug
      }
    }
  }
`;

export const GET_POSTS_BY_CATEGORY_QUERY = gql`
  query GetPostsByCategory($category: String!) {
    category(where: { slug: $category }) {
      blogPosts(orderBy: publishedDate_DESC) {
        id
        title
        slug
        excerpt
        coverImage {
          url
        }
        bannerImage {
          url
        }
        thumbnail {
          url
        }
        category {
          name
          slug
        }
        publishedDate
        author {
          name
          photo {
            url
          }
        }
      }
    }
  }
`;

export const GET_FACILITIES_QUERY = gql`
  query GetFacilities {
    facilities(orderBy: order_ASC) {
      title
      description
      icon
    }
  }
`;

export const GET_GALLERIES_QUERY = gql`
  query GetGalleries {
    galleryImages(orderBy: order_ASC) {
      title
      image {
        url
      }
    }
  }
`;

export const GET_FAQS_QUERY = gql`
  query GetFAQs {
    faqs(orderBy: order_ASC) {
      question
      answer
    }
  }
`;

export const GET_TESTIMONIALS_QUERY = gql`
  query GetTestimonials {
    testimonials(orderBy: createdAt_DESC) {
      name
      role
      quote
      photo {
        url
      }
    }
  }
`;

export const GET_CATEGORIES_QUERY = gql`
  query GetCategories {
    categories {
      name
      slug
    }
  }
`;
