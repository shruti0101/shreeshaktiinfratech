export function transformImage(url, options = {}) {
  if (!url) return "";

  const transformations = [];

  if (options.width) transformations.push(`w-${options.width}`);
  if (options.height) transformations.push(`h-${options.height}`);
  if (options.crop) transformations.push(`c-${options.crop}`);
  if (options.quality) transformations.push(`q-${options.quality}`);
  transformations.push("f-auto");

  return `${url}?tr=${transformations.join(",")}`;
}
