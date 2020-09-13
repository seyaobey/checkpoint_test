import { ArgsType, Field } from "@nestjs/graphql";

@ArgsType()
export class UserEmailPasswordArgs {
  @Field(_type => String, { nullable: false })
  email!: string;

  @Field(_type => String, { nullable: false })
  password!: string;
}