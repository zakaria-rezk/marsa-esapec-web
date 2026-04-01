interface loginForm {
  useName: string | null;
  password: string | null;
}
export const login = async (params: loginForm) => {
  const { $api } = useNuxtApp();
  return await $api.post("/auth/login", params);
};
