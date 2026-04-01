export async function getUser() {
  const { $api } = useNuxtApp();

  return await $api.get("users");
}
