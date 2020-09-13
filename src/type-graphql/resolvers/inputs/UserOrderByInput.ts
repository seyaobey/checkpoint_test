import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { SortOrder } from "../../enums/SortOrder";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class UserOrderByInput {
  @Field(_type => SortOrder, {
    nullable: true,
    description: undefined
  })
  id?: keyof typeof SortOrder | undefined;

  @Field(_type => SortOrder, {
    nullable: true,
    description: undefined
  })
  name?: keyof typeof SortOrder | undefined;

  @Field(_type => SortOrder, {
    nullable: true,
    description: undefined
  })
  surname?: keyof typeof SortOrder | undefined;

  @Field(_type => SortOrder, {
    nullable: true,
    description: undefined
  })
  email?: keyof typeof SortOrder | undefined;

  @Field(_type => SortOrder, {
    nullable: true,
    description: undefined
  })
  phoneNumber?: keyof typeof SortOrder | undefined;

  @Field(_type => SortOrder, {
    nullable: true,
    description: undefined
  })
  photoUrl?: keyof typeof SortOrder | undefined;

  @Field(_type => SortOrder, {
    nullable: true,
    description: undefined
  })
  password?: keyof typeof SortOrder | undefined;

  @Field(_type => SortOrder, {
    nullable: true,
    description: undefined
  })
  created_at?: keyof typeof SortOrder | undefined;

  @Field(_type => SortOrder, {
    nullable: true,
    description: undefined
  })
  updated_at?: keyof typeof SortOrder | undefined;
}
