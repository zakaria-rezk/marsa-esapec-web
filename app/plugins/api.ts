import axios from "axios";
import { useRuntimeConfig, defineNuxtPlugin } from "#app";
import type { AxiosInstance, InternalAxiosRequestConfig } from "axios";
export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();

  const instance = axios.create({
    baseURL: config.public.apiBase as string,
  });
  instance.interceptors.request.use(
    (axiosConfig: InternalAxiosRequestConfig) => {
      console.log(config.public.apiBase, "Sdfffff");
      const token = "a";
      axiosConfig.headers.Authorization = `Barear ${token}`;
      return axiosConfig;
    },
  );
  instance.interceptors.response.use((response: any) => {
    return response;
  });
  return {
    provide: {
      api: instance,
    },
  };
});
