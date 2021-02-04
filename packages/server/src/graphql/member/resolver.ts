import { Arg, Ctx, Mutation, Query, Resolver } from "type-graphql";
import { Context } from "../../context";
import { MemberInput } from "./inputs/memberInput";
import { UpdateMemberResult } from "./results/UpdateMemberResult";
import { DeleteMemberResult } from "./results/DeleteMemberResult";
import { validate } from "class-validator";
import { FieldsValidationError } from "../common/errors/FieldsValidationError";
import { NonExistingMemberError } from "./errors/NonExistingMemberError";
import { TenantUser } from "../../generated/typegraphql-prisma/models/TenantUser";
import { Role } from "../../generated/typegraphql-prisma/enums/Role";

@Resolver()
class MemberResolver {
  @Query(() => [TenantUser], { nullable: true })
  async getMembers(@Ctx() ctx: Context): Promise<TenantUser[] | null> {
    return await ctx.prisma.tenantUser.findMany({
      include: {
        User: true,
        Tenant: true,
      },
    });
  }

  @Mutation(() => DeleteMemberResult)
  async deleteMember(
    @Arg("input", () => MemberInput) input: MemberInput,
    @Ctx() ctx: Context
  ): Promise<typeof DeleteMemberResult> {
    const errors = await validate(input);
    if (errors.length > 0) return FieldsValidationError.from(errors);

    await ctx.prisma.tenantUser.delete({
      where: {
        userId_tenantId: input,
      },
    });
  }

  @Mutation(() => UpdateMemberResult)
  async updateMember(
    @Arg("input") input: MemberInput,
    @Arg("role", () => Role) role: Role,
    @Ctx() ctx: Context
  ): Promise<typeof UpdateMemberResult> {
    const errors = await validate(input);
    if (errors.length > 0) return FieldsValidationError.from(errors);

    try {
      const updateMember = await ctx.prisma.tenantUser.update({
        where: {
          userId_tenantId: input,
        },
        data: {
          role: role,
        },
      });
      return Object.assign(new TenantUser(), updateMember);
    } catch (err) {
      return new NonExistingMemberError();
    }
  }
}
