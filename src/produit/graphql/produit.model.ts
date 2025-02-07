import { Field, Float, ID, ObjectType } from "@nestjs/graphql";
import { Fournisseur } from "src/fournisseur/graphql/fournisseur.model";

@ObjectType()
export class Produit{
    @Field(() => ID)
    id: number;

    @Field()
    nom: string;

    @Field()
    categorie: string;

    @Field(() => Float)
    prix: number;

    @Field(() => Fournisseur,{nullable: false})
    fournisseur: Fournisseur;
}