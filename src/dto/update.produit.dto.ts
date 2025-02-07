import { IsNumber, IsOptional, IsString } from "class-validator";

export class updatedProduitDto{

    @IsOptional()
    @IsString({ message: 'Le nom doit être une chaîne de caractères.' })
    nom?: string;
  
    @IsOptional()
    @IsString({ message: 'La catégorie doit être une chaîne de caractères.' })
    categorie?: string;
  
    @IsOptional()
    @IsNumber({}, { message: 'Le prix doit être un nombre.' })
    prix?: number;
  
    @IsOptional()
    @IsNumber({}, { message: 'L\'id du fournisseur doit être un nombre.' })
    fournisseurId?: number;
}