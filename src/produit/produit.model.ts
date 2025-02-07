import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Produit {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  description: string;

  @Field()
  prix: number;
}
