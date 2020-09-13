import { UserCrudResolver } from "./User/UserCrudResolver";
import { FindOneUserResolver } from "./User/FindOneUserResolver";
import { FindManyUserResolver } from "./User/FindManyUserResolver";
import { CreateUserResolver } from "./User/CreateUserResolver";
import { DeleteUserResolver } from "./User/DeleteUserResolver";
import { UpdateUserResolver } from "./User/UpdateUserResolver";
import { DeleteManyUserResolver } from "./User/DeleteManyUserResolver";
import { UpdateManyUserResolver } from "./User/UpdateManyUserResolver";
import { UpsertUserResolver } from "./User/UpsertUserResolver";
import { AggregateUserResolver } from "./User/AggregateUserResolver";
import { Module } from "@nestjs/common";

export { UserCrudResolver } from "./User/UserCrudResolver";
export { FindOneUserResolver } from "./User/FindOneUserResolver";
export { FindManyUserResolver } from "./User/FindManyUserResolver";
export { CreateUserResolver } from "./User/CreateUserResolver";
export { DeleteUserResolver } from "./User/DeleteUserResolver";
export { UpdateUserResolver } from "./User/UpdateUserResolver";
export { DeleteManyUserResolver } from "./User/DeleteManyUserResolver";
export { UpdateManyUserResolver } from "./User/UpdateManyUserResolver";
export { UpsertUserResolver } from "./User/UpsertUserResolver";
export { AggregateUserResolver } from "./User/AggregateUserResolver";
export * from "./User/args";

@Module({
  providers: [
    UserCrudResolver,
    FindOneUserResolver,
    FindManyUserResolver,
    CreateUserResolver,
    DeleteUserResolver,
    UpdateUserResolver,
    DeleteManyUserResolver,
    UpdateManyUserResolver,
    UpsertUserResolver,
    AggregateUserResolver
  ],
  exports: [
    UserCrudResolver,
    FindOneUserResolver,
    FindManyUserResolver,
    CreateUserResolver,
    DeleteUserResolver,
    UpdateUserResolver,
    DeleteManyUserResolver,
    UpdateManyUserResolver,
    UpsertUserResolver,
    AggregateUserResolver
  ]
})
export class CrudResolversModule {
}
