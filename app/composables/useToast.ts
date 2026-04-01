export function useToast() {
  interface Toast {
    id: number;
    type: string;
    message: string;
  }
  const toasts = useState<Toast[]>("toasts", () => []);
  const id = useState<number>("toast_id", () => 0);
  function addToast(message: string, type: string) {
    id.value++;
    toasts.value.push({
      id: id.value,
      message,
      type,
    });
    setTimeout(() => {
      toasts.value = toasts.value.filter((t) => {
        t.id != id.value;
      });
    }, 3000);
  }
  return { addToast, toasts };
}
