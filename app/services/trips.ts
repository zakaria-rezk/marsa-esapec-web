export async function deleteImage(id: number) {
  const { $api } = useNuxtApp();
  return await $api.delete(`/trip/images/${id}`);
}
export async function deleteTrip(id: number) {
  const { $api } = useNuxtApp();
  return await $api.delete(`/trip/${id}`);
}
export async function deleteResarvation(id: number) {
  const { $api } = useNuxtApp();
  return await $api.delete(`/reservations/${id}`);
}
export async function deleteTripType(id: number) {
  const { $api } = useNuxtApp();
  return await $api.delete(`/trip-type/${id}`);
}
export async function getTrips() {
  const { $api } = useNuxtApp();
  return await $api.get(`/trip`);
}
export async function addImage(id: number, param: any) {
  const { $api } = useNuxtApp();
  return await $api.patch(`/trip/${id}`, param);
}
export async function getTripTypes() {
  const { $api } = useNuxtApp();
  return await $api.get("trip-type");
}
export async function addTrip(param: any) {
  const { $api } = useNuxtApp();
  return await $api.post("/trip", param);
}
export async function addResvartion(param: any) {
  const { $api } = useNuxtApp();
  return await $api.post("/reservations", param);
}
export async function addTripType(param: any) {
  const { $api } = useNuxtApp();
  return await $api.post("/trip-type", param);
}
export async function editTrip(id: number, param: any) {
  const { $api } = useNuxtApp();
  return await $api.patch(`/trip/${id} `, param);
}
export async function editTripType(id: number, param: any) {
  const { $api } = useNuxtApp();
  return await $api.put(`/trip-type/${id} `, param);
}
export async function edtiReviewStatus(id: number, param: any) {
  const { $api } = useNuxtApp();
  return await $api.patch(`/trip-reviews/${id} `, param);
}
export async function edtiReservationStatus(id: number, param: any) {
  const { $api } = useNuxtApp();
  return await $api.patch(`/reservations/${id}/status`, param);
}
export async function getTripType(id: number, param: any) {
  const { $api } = useNuxtApp();
  return await $api.get(`/trip-type`, param);
}
