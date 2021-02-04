import { ObjectType } from "type-graphql";
import { IError } from "../../common/errors/IError";

@ObjectType({ implements: IError })
export class NonExistingMemberError implements IError {
  message: string = "member doesn't exist";
}
