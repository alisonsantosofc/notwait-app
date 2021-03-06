import { ValidationError } from 'yup';

interface Errors {
  [key: string]: string;
}

function getValidationErrors(errors: ValidationError): Errors {
  const validationErrors: Errors = {};

  errors.inner.forEach(error => {
    validationErrors[error.path] = error.message;
  });

  return validationErrors;
}

export default getValidationErrors;
