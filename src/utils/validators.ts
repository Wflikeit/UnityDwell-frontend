function createValidator(
  minLength: number,
  maxLength: number,
  // this regex includes Basic Multilingual Plane
  // while excluding control characters and other non-printable characters
  // eslint-disable-next-line no-control-regex
  validCharactersRegex = /^[\u0000-\uD7FF\uE000-\uFFFF0-9a-zA-Z.,\s\-/]+$/,
) {
  return function validateField(value: string): string {
    const trimmedLength = value.trim().length;
    if (minLength === 0) return '';
    if (trimmedLength === 0) {
      return 'Required';
    }
    if (!validCharactersRegex.test(value)) {
      return 'Invalid value';
    } else if (trimmedLength < minLength) {
      return 'Value must be at least ' + minLength + ' characters';
    } else if (trimmedLength >= maxLength) {
      return 'Value is must be at most ' + maxLength + ' characters';
    }
    return '';
  };
}

export const validateName = createValidator(2, 100);
export const validateDescription = createValidator(0, 200);
export const validateAddress = createValidator(2, 150, /./);
export const validateCity = createValidator(2, 50);
export const validateZipCode = createValidator(4, 10, /^.{4,10}$/);
export const validateEmail = createValidator(17, 100, /^[A-Za-z]+\.[A-Za-z]+@(devbridge\.com|cognizant\.com)$/);
export const validatePassword = createValidator(8, 100);
export const validateNumberOfBuilding = createValidator(1,5,/^[0-9]{1,4}[a-zA-Z]?$|^5[a-zA-Z]?$/)