import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateUserArgs } from "./args/AggregateUserArgs";
import { CreateUserArgs } from "./args/CreateUserArgs";
import { DeleteManyUserArgs } from "./args/DeleteManyUserArgs";
import { DeleteUserArgs } from "./args/DeleteUserArgs";
import { FindManyUserArgs } from "./args/FindManyUserArgs";
import { FindOneUserArgs } from "./args/FindOneUserArgs";
import { UpdateManyUserArgs } from "./args/UpdateManyUserArgs";
import { UpdateUserArgs } from "./args/UpdateUserArgs";
import { UpsertUserArgs } from "./args/UpsertUserArgs";
import { User } from "../../../models/User";
import { AggregateUser } from "../../outputs/AggregateUser";
import { BatchPayload } from "../../outputs/BatchPayload";

@Resolver(_of => User)
export class UserCrudResolver {
  @Query(_returns => User, {
    nullable: true,
    description: undefined
  })
  async user(@Context() ctx: any, @Args() args: FindOneUserArgs): Promise<User | undefined> {
    return ctx.prisma.user.findOne(args);
  }

  @Query(_returns => [User], {
    nullable: false,
    description: undefined
  })
  async users(@Context() ctx: any, @Args() args: FindManyUserArgs): Promise<User[]> {
    return ctx.prisma.user.findMany(args);
  }

  @Mutation(_returns => User, {
    nullable: false,
    description: undefined
  })
  async createUser(@Context() ctx: any, @Args() args: CreateUserArgs): Promise<User> {
    return ctx.prisma.user.create(args);
  }

  @Mutation(_returns => User, {
    nullable: true,
    description: undefined
  })
  async deleteUser(@Context() ctx: any, @Args() args: DeleteUserArgs): Promise<User | undefined> {
    return ctx.prisma.user.delete(args);
  }

  @Mutation(_returns => User, {
    nullable: true,
    description: undefined
  })
  async updateUser(@Context() ctx: any, @Args() args: UpdateUserArgs): Promise<User | undefined> {
    return ctx.prisma.user.update(args);
  }

  @Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManyUser(@Context() ctx: any, @Args() args: DeleteManyUserArgs): Promise<BatchPayload> {
    return ctx.prisma.user.deleteMany(args);
  }

  @Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManyUser(@Context() ctx: any, @Args() args: UpdateManyUserArgs): Promise<BatchPayload> {
    return ctx.prisma.user.updateMany(args);
  }

  @Mutation(_returns => User, {
    nullable: false,
    description: undefined
  })
  async upsertUser(@Context() ctx: any, @Args() args: UpsertUserArgs): Promise<User> {
    return ctx.prisma.user.upsert(args);
  }

  @Query(_returns => AggregateUser, {
    nullable: false,
    description: undefined
  })
  async aggregateUser(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: AggregateUserArgs): Promise<AggregateUser> {
    function transformFields(fields: Record<string, any>): Record<string, any> {
      return Object.fromEntries(
        Object.entries(fields)
          .filter(([key, value]) => !key.startsWith("_"))
          .map<[string, any]>(([key, value]) => {
            if (Object.keys(value).length === 0) {
              return [key, true];
            }
            return [key, transformFields(value)];
          }),
      );
    }

    return ctx.prisma.user.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
