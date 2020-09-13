import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { NestedStringFilter } from "../inputs/NestedStringFilter";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class StringFilter {
  @Field(_type => String, {
    nullable: true,
    description: undefined
  })
  equals?: string | undefined;

  @Field(_type => [String], {
    nullable: true,
    description: undefined
  })
  in?: string[] | undefined;

  @Field(_type => [String], {
    nullable: true,
    description: undefined
  })
  notIn?: string[] | undefined;

  @Field(_type => String, {
    nullable: true,
    description: undefined
  })
  lt?: string | undefined;

  @Field(_type => String, {
    nullable: true,
    description: undefined
  })
  lte?: string | undefined;

  @Field(_type => String, {
    nullable: true,
    description: undefined
  })
  gt?: string | undefined;

  @Field(_type => String, {
    nullable: true,
    description: undefined
  })
  gte?: string | undefined;

  @Field(_type => String, {
    nullable: true,
    description: undefined
  })
  contains?: string | undefined;

  @Field(_type => String, {
    nullable: true,
    description: undefined
  })
  startsWith?: string | undefined;

  @Field(_type => String, {
    nullable: true,
    description: undefined
  })
  endsWith?: string | undefined;

  @Field(_type => NestedStringFilter, {
    nullable: true,
    description: undefined
  })
  not?: NestedStringFilter | undefined;
}
