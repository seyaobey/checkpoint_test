import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class UserWhereInput {
  @Field(_type => [UserWhereInput], {
    nullable: true,
    description: undefined
  })
  AND?: UserWhereInput[] | undefined;

  @Field(_type => [UserWhereInput], {
    nullable: true,
    description: undefined
  })
  OR?: UserWhereInput[] | undefined;

  @Field(_type => [UserWhereInput], {
    nullable: true,
    description: undefined
  })
  NOT?: UserWhereInput[] | undefined;

  @Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  id?: StringFilter | undefined;

  @Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  name?: StringFilter | undefined;

  @Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  surname?: StringFilter | undefined;

  @Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  email?: StringFilter | undefined;

  @Field(_type => StringNullableFilter, {
    nullable: true,
    description: undefined
  })
  phoneNumber?: StringNullableFilter | undefined;

  @Field(_type => StringNullableFilter, {
    nullable: true,
    description: undefined
  })
  photoUrl?: StringNullableFilter | undefined;

  @Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  password?: StringFilter | undefined;

  @Field(_type => DateTimeFilter, {
    nullable: true,
    description: undefined
  })
  created_at?: DateTimeFilter | undefined;

  @Field(_type => DateTimeNullableFilter, {
    nullable: true,
    description: undefined
  })
  updated_at?: DateTimeNullableFilter | undefined;
}
