import { FieldError } from "../generated/codegen";

type ErrorMap = { [key: string]: string };

export const toErrorMap = (errors: FieldError[]): ErrorMap => {
  return errors.reduce((map: ErrorMap, { path, message }) => {
    return (map[path] = message), map;
  }, {});
};