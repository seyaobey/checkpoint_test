import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { UserCreateInput } from "../../../inputs/UserCreateInput";
import { UserUpdateInput } from "../../../inputs/UserUpdateInput";
import { UserWhereUniqueInput } from "../../../inputs/UserWhereUniqueInput";

@ArgsType()
export class UpsertUserArgs {
  @Field(_type => UserWhereUniqueInput, { nullable: false })
  where!: UserWhereUniqueInput;

  @Field(_type => UserCreateInput, { nullable: false })
  create!: UserCreateInput;

  @Field(_type => UserUpdateInput, { nullable: false })
  update!: UserUpdateInput;
}
