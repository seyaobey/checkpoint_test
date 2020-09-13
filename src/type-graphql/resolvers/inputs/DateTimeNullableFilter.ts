import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { NestedDateTimeNullableFilter } from "../inputs/NestedDateTimeNullableFilter";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class DateTimeNullableFilter {
  @Field(_type => Date, {
    nullable: true,
    description: undefined
  })
  equals?: Date | undefined;

  @Field(_type => [Date], {
    nullable: true,
    description: undefined
  })
  in?: Date[] | undefined;

  @Field(_type => [Date], {
    nullable: true,
    description: undefined
  })
  notIn?: Date[] | undefined;

  @Field(_type => Date, {
    nullable: true,
    description: undefined
  })
  lt?: Date | undefined;

  @Field(_type => Date, {
    nullable: true,
    description: undefined
  })
  lte?: Date | undefined;

  @Field(_type => Date, {
    nullable: true,
    description: undefined
  })
  gt?: Date | undefined;

  @Field(_type => Date, {
    nullable: true,
    description: undefined
  })
  gte?: Date | undefined;

  @Field(_type => NestedDateTimeNullableFilter, {
    nullable: true,
    description: undefined
  })
  not?: NestedDateTimeNullableFilter | undefined;
}
