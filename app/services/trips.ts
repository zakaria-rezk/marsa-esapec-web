export async function deleteImage(id: number) {
  const { $api } = useNuxtApp();
  return await $api.delete(`/trip/images/${id}`);
}
export async function getTrips(id: number) {
  const { $api } = useNuxtApp();
  return await $api.get(`/trip`);
}
export async function addImage(id: number, param: any) {
  const { $api } = useNuxtApp();
  return await $api.patch(`/trip/${id}`, param);
}
