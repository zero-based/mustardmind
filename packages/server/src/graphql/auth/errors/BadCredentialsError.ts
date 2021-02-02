import { ObjectType } from "type-graphql";
import { IError } from "../../common/errors/IError";

@ObjectType({ implements: IError })
export class BadCredentialsError implements IError {
  message: string = "invalid email or password";
}
