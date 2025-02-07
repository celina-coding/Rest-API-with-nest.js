import { Field, ID, InputType } from "@nestjs/graphql";
import { IsNumber, IsOptional, IsString } from "class-validator";

@InputType()
export class UpdateProduitInput {
    @Field({ nullable: true })
    @IsOptional()
    @IsString({ message: "Le nom doit être une chaîne de caractères." })
    nom?: string;

    @Field({ nullable: true })
    @IsOptional()
    @IsString({ message: "La catégorie doit être une chaîne de caractères." })
    categorie?: string;

    @Field({ nullable: true })
    @IsOptional()
    @IsNumber({}, { message: "Le prix doit être un nombre." })
    prix?: number;

    @Field(() => ID, { nullable: false})
    @IsOptional()
    @IsNumber({}, { message: "Le fournisseurId doit être un nombre." })
    fournisseurId?: number; 
}
