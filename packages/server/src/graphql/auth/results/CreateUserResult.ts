import { createUnionType } from "type-graphql";
import { User } from "../../../generated/typegraphql-prisma/models/User";
import { FieldsValidationError } from "../../common/errors/FieldsValidationError";
import { ExistingUserError } from "../errors/ExistingUserError";

export const CreateUserResult = createUnionType({
  name: "CreateUserResult",
  types: () => [User, FieldsValidationError, ExistingUserError] as const,
});
