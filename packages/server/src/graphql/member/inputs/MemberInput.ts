import { Field, InputType, Int } from "type-graphql";
import { IsNotEmpty } from "class-validator";

@InputType()
export class MemberInput {
  @IsNotEmpty({ message: "required field" })
  @Field()
  userId: number;

  @IsNotEmpty({ message: "required field" })
  @Field()
  tenantId: number;
}
