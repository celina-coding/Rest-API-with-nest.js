import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

@InputType()
export class CreateProduitInput {

    @Field()
    @IsNotEmpty({ message: "Le nom du produit est requis" })
    @IsString({ message: "Le nom doit être une chaîne de caractères" })
    nom: string;

    @Field()
    @IsNotEmpty({ message: "La catégorie est requise" })
    @IsString({ message: "La catégorie doit être une chaîne de caractères" })
    categorie: string;

    @Field()
    @IsNotEmpty({ message: "Le prix est requis" })
    @IsNumber({}, { message: "Le prix doit être un nombre" })
    prix: number;

    @Field()
    @IsNotEmpty({ message: "L'ID du fournisseur est requis" })
    @IsNumber({}, { message: "L'ID du fournisseur doit être un nombre" })
    fournisseurId: number;  
}
