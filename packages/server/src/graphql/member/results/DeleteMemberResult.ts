import { createUnionType } from "type-graphql";
import { FieldsValidationError } from "../../common/errors/FieldsValidationError";

export const DeleteMemberResult = createUnionType({
  name: "DeleteMemberResult",
  types: () => [FieldsValidationError] as const,
});
