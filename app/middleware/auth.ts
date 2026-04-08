export default defineNuxtRouteMiddleware((to, from) => {
  const token = useCookie("token");
  console.log(token.value, "token in middleware");
  if (!token.value) {
    return navigateTo("/auth/login");
  }
});
