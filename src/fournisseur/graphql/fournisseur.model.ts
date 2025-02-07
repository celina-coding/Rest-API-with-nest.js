import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Produit } from 'src/produit/produit.model';

@ObjectType()
export class Fournisseur{
    @Field(() => ID)
    id: number;

    @Field()
    nom: string;

    @Field()
    adress: string

    @Field()
    contact: string

    @Field(() => [Produit],{nullable: true} )
    produits?: Produit[];
}