export async function deleteImage(id: number) {
  const { $api } = useNuxtApp();
  return await $api.delete(`/trip/images/${id}`);
}
export async function deleteTrip(id: number) {
  const { $api } = useNuxtApp();
  return await $api.delete(`/trip/${id}`);
}
export async function deleteReservation(id: number) {
  const { $api } = useNuxtApp();
  return await $api.delete(`/reservations/${id}`);
}
export async function deleteTripType(id: number) {
  const { $api } = useNuxtApp();
  return await $api.delete(`/trip-type/${id}`);
}
export async function deletePackage(id: number) {
  const { $api } = useNuxtApp();
  return await $api.delete(`/packages/${id}`);
}
export async function getTrips() {
  const { $api } = useNuxtApp();
  return await $api.get(`/trip`);
}
export async function getTripTypes() {
  const { $api } = useNuxtApp();
  return await $api.get("/trip-type");
}
export async function filterReservation(query: any) {
  const { $api } = useNuxtApp();
  return await $api.get("/reservations/search", {
    params: query,
  });
}
export async function addImage(id: number, param: any) {
  const { $api } = useNuxtApp();
  return await $api.patch(`/trip/${id}`, param);
}
export async function addTrip(param: any) {
  const { $api } = useNuxtApp();
  return await $api.post("/trip", param);
}
export async function addPackage(param: any) {
  const { $api } = useNuxtApp();
  return await $api.post("/packages", param);
}
export async function addResvartion(param: any) {
  const { $api } = useNuxtApp();
  return await $api.post("/reservations", param);
}
export async function addTripType(param: any) {
  const { $api } = useNuxtApp();
  return await $api.post("/trip-type", param);
}export async function addTaxiTransfer(param: any) {
  const { $api } = useNuxtApp();
  return await $api.post("/taxi", param);
}
export async function editTrip(id: number, param: any) {
  const { $api } = useNuxtApp();
  return await $api.patch(`/trip/${id} `, param);
}export async function editTaxiTransfer(id: number, param: any) {
  const { $api } = useNuxtApp();
  return await $api.patch(`/taxi/${id} `, param);
}
export async function editTripType(id: number, param: any) {
  const { $api } = useNuxtApp();
  return await $api.put(`/trip-type/${id} `, param);
}
export async function editPackage(id: number, param: any) {
  const { $api } = useNuxtApp();
  return await $api.put(`/packages/${id} `, param);
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
