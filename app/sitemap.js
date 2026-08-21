export default function sitemap() {
  const base = 'https://www.nextstepoverseas.com';
  return ['', '/about', '/services', '/contact'].map((path) => ({ url: `${base}${path}`, changeFrequency: 'monthly', priority: path === '' ? 1 : 0.8 }));
}
