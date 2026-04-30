export const getImageUrl = (path?: string | null) => {
  const config = useRuntimeConfig();

  if (!path) return "/placeholder.png";
  if (path.startsWith("http")) return path;

  return config.public.apiBase +  path;
};
