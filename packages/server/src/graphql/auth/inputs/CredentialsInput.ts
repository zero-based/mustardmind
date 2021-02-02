import { IsEmail, MinLength } from "class-validator";
import { Field, InputType } from "type-graphql";

@InputType()
export class CredentialsInput {
  @Field()
  @IsEmail({}, { message: "invalid email" })
  email: string;

  @Field()
  @MinLength(8)
  password: string;
}
