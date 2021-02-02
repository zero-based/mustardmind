import { createUnionType } from "type-graphql";
import { User } from "../../../generated/typegraphql-prisma/models/User";
import { FieldsValidationError } from "../../common/errors/FieldsValidationError";
import { BadCredentialsError } from "../errors/BadCredentialsError";
import { NonExistingUserError } from "../errors/NonExistingUserError";

export const AuthResult = createUnionType({
  name: "AuthResult",
  types: () =>
    [
      User,
      FieldsValidationError,
      NonExistingUserError,
      BadCredentialsError,
    ] as const,
});
