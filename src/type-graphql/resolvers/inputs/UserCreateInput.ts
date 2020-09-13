import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class UserCreateInput {
  @Field(_type => String, {
    nullable: false,
    description: undefined
  })
  id!: string;

  @Field(_type => String, {
    nullable: false,
    description: undefined
  })
  name!: string;

  @Field(_type => String, {
    nullable: false,
    description: undefined
  })
  surname!: string;

  @Field(_type => String, {
    nullable: false,
    description: undefined
  })
  email!: string;

  @Field(_type => String, {
    nullable: true,
    description: undefined
  })
  phoneNumber?: string | undefined;

  @Field(_type => String, {
    nullable: true,
    description: undefined
  })
  photoUrl?: string | undefined;

  @Field(_type => String, {
    nullable: false,
    description: undefined
  })
  password!: string;

  @Field(_type => Date, {
    nullable: true,
    description: undefined
  })
  created_at?: Date | undefined;

  @Field(_type => Date, {
    nullable: true,
    description: undefined
  })
  updated_at?: Date | undefined;
}
