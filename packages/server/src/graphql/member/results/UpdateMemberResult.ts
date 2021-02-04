import { createUnionType } from "type-graphql";
import { TenantUser } from "../../../generated/typegraphql-prisma/models/TenantUser";
import { FieldsValidationError } from "../../common/errors/FieldsValidationError";
import { NonExistingMemberError } from "../errors/NonExistingMemberError";

export const UpdateMemberResult = createUnionType({
  name: "UpdateMemberResult",
  types: () =>
    [TenantUser, FieldsValidationError, NonExistingMemberError] as const,
});
