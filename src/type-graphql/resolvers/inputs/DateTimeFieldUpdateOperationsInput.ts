import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class DateTimeFieldUpdateOperationsInput {
  @Field(_type => Date, {
    nullable: true,
    description: undefined
  })
  set?: Date | undefined;
}
