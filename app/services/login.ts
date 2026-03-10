interface loginForm {
  useName: string;
  password: string;
}
export const login = (params: loginForm) => {
  const { $api } = useNuxtApp();
  $api.post("/auth/login", params);
};
