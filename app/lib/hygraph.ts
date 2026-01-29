import { GraphQLClient } from 'graphql-request';

const HYGRAPH_ENDPOINT = process.env.HYGRAPH_ENDPOINT || '';
const HYGRAPH_TOKEN = process.env.HYGRAPH_TOKEN;

console.log('--- Hygraph Config Check ---');
console.log('Endpoint:', HYGRAPH_ENDPOINT ? 'Defined' : 'Missing');
console.log('Token:', HYGRAPH_TOKEN ? `Defined (starts with ${HYGRAPH_TOKEN.substring(0, 5)}...)` : 'Missing');
console.log('----------------------------');

export const hygraph = new GraphQLClient(HYGRAPH_ENDPOINT, {
  headers: HYGRAPH_TOKEN ? {
    Authorization: `Bearer ${HYGRAPH_TOKEN}`,
  } : {},
});

export async function getPageHome() {
  const { GET_PAGE_HOME_QUERY } = await import('./queries');
  return hygraph.request(GET_PAGE_HOME_QUERY);
}

export async function getPricing() {
  const { GET_PRICING_QUERY } = await import('./queries');
  return hygraph.request(GET_PRICING_QUERY);
}

export async function getPosts() {
  const { GET_POSTS_QUERY } = await import('./queries');
  return hygraph.request(GET_POSTS_QUERY);
}

export async function getPostBySlug(slug: string) {
  const { GET_POST_BY_SLUG_QUERY } = await import('./queries');
  return hygraph.request(GET_POST_BY_SLUG_QUERY, { slug });
}

export async function getPostsByCategory(category: string) {
  const { GET_POSTS_BY_CATEGORY_QUERY } = await import('./queries');
  return hygraph.request(GET_POSTS_BY_CATEGORY_QUERY, { category });
}

export async function getTestimonials() {
  const { GET_TESTIMONIALS_QUERY } = await import('./queries');
  return hygraph.request(GET_TESTIMONIALS_QUERY);
}

export async function getFacilities() {
  const { GET_FACILITIES_QUERY } = await import('./queries');
  return hygraph.request(GET_FACILITIES_QUERY);
}

export async function getGalleries() {
  const { GET_GALLERIES_QUERY } = await import('./queries');
  return hygraph.request(GET_GALLERIES_QUERY);
}

export async function getFAQs() {
  const { GET_FAQS_QUERY } = await import('./queries');
  return hygraph.request(GET_FAQS_QUERY);
}

export async function getCategories() {
  const { GET_CATEGORIES_QUERY } = await import('./queries');
  return hygraph.request(GET_CATEGORIES_QUERY);
}
