export function useValidation(
  formObj: Record<string, any>,
  errors: Record<string, any>,
  requiredFailds: string[],
) {
  const validateRequiredInput = () => {
    let isVaild = true;
    requiredFailds.forEach((input) => {
      if (!formObj[input]) {
        errors[input] = "هذا الحقل مطلوب";
        isVaild = false;
      }
    });

    return isVaild;
  };
  const resetValues = () => {
    Object.keys(formObj).forEach((el) => {
      formObj[el] = null;
    });
  };
  const resetErrors = () => {
    Object.keys(errors).forEach((el) => {
      errors[el] = null;
    });
  };
  return { validateRequiredInput, resetValues, resetErrors };
}
