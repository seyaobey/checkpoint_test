import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { User, FindManyUserArgs } from 'src/type-graphql';
import { PrismaService } from '../prisma/prisma.service';
import { UserEmailPasswordArgs } from './users.args';
import { HttpException, HttpStatus } from '@nestjs/common';

@Resolver(of => User)
export class UsersResolver {

  constructor(
    private readonly prisma: PrismaService,
  ) { }

  @Query(returns => [User])
  async getUsers(args: FindManyUserArgs): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  @Query(returns => User)
  async userLogin(@Args() args: UserEmailPasswordArgs): Promise<User> {
    const { email, password } = args;
    const users = await this.prisma.user.findMany({
      where: { email, password }
    });
    if (!users.length) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    return users[0]
  }

  @Mutation(returns => User)
  async userUpdatePassword(@Args() args: UserEmailPasswordArgs): Promise<User> {
    const { email, password } = args;
    return this.prisma.user.update({
      where: { email },
      data: { password }
    })
  }
}