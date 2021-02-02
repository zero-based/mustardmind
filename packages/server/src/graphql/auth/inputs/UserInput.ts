import { IsPhoneNumber, MinLength } from "class-validator";
import { Field, InputType } from "type-graphql";
import { CredentialsInput } from "./CredentialsInput";

@InputType()
export class UserInput extends CredentialsInput {
  @Field()
  @MinLength(2)
  name: string;

  @Field()
  @IsPhoneNumber('EG') // TODO: Support more regions
  phone: string;
}
