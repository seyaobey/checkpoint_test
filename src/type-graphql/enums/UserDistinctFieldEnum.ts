import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";

export enum UserDistinctFieldEnum {
  id = "id",
  name = "name",
  surname = "surname",
  email = "email",
  phoneNumber = "phoneNumber",
  photoUrl = "photoUrl",
  password = "password",
  created_at = "created_at",
  updated_at = "updated_at"
}
registerEnumType(UserDistinctFieldEnum, {
  name: "UserDistinctFieldEnum",
  description: undefined,
});
