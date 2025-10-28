// import { connect } from "@/Database/Db";
// import Blog from "@/models/blog";
// import { categories, products } from "@/Data";

// export async function GET() {
//   const baseUrl = "https://barbendingmachinesupplier.com";

//   // 1️⃣ Static Pages
//   const staticUrls = [
//     { loc: `${baseUrl}/`, priority: 1.0, changefreq: "daily" },
//     { loc: `${baseUrl}/about-us`, priority: 0.7, changefreq: "monthly" },
//     { loc: `${baseUrl}/contact-us`, priority: 0.7, changefreq: "monthly" },
//   ].map((page) => ({
//     ...page,
//     lastmod: new Date().toISOString(),
//   }));

//   // 2️⃣ Category Pages
//   const categoryUrls =
//     categories?.map((cat) => ({
//       loc: `${baseUrl}/category/${cat.id}`,
//       lastmod: new Date().toISOString(),
//       changefreq: "weekly",
//       priority: 0.8,
//     })) || [];

//   // 3️⃣ Product Pages
//   const productUrls =
//     products?.map((product) => ({
//       loc: `${baseUrl}/products/${product.slug}`,
//       lastmod: new Date().toISOString(),
//       changefreq: "weekly",
//       priority: 0.7,
//     })) || [];

//   // 4️⃣ Blog Pages
//   await connect();
//   const blogs = await Blog.find().select("permalink updatedAt");
//   const blogUrls = blogs.map((blog) => ({
//     loc: `${baseUrl}/blogs/${blog.permalink}`,
//     lastmod: blog.updatedAt
//       ? blog.updatedAt.toISOString()
//       : new Date().toISOString(),
//     changefreq: "weekly",
//     priority: 0.6,
//   }));

//   // 5️⃣ Merge All
//   const all = [...staticUrls, ...categoryUrls, ...productUrls, ...blogUrls];

//   // 6️⃣ Build XML
//   let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
//   xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

//   all.forEach((item) => {
//     xml += `  <url>
//     <loc>${item.loc}</loc>
//     <lastmod>${item.lastmod}</lastmod>
//     <changefreq>${item.changefreq}</changefreq>
//     <priority>${item.priority}</priority>
//   </url>\n`;
//   });

//   xml += `</urlset>`;

//   return new Response(xml, {
//     headers: { "Content-Type": "application/xml" },
//   });
// }

