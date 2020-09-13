import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { NestedDateTimeFilter } from "../inputs/NestedDateTimeFilter";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class DateTimeFilter {
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

  @Field(_type => NestedDateTimeFilter, {
    nullable: true,
    description: undefined
  })
  not?: NestedDateTimeFilter | undefined;
}
