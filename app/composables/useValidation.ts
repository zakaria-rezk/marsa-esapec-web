export function useValidation(
  formObj: Record<string, any>,
  errors: Record<string, string>,
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
    console.log(isVaild, errors);
    return isVaild;
  };
  const resetValues = () => {
    Object.keys(formObj).forEach((el) => {
      formObj[el] = null;
    });
    Object.keys(errors).forEach((el) => {
      formObj[el] = null;
    });
  };
  return { validateRequiredInput, resetValues };
}
