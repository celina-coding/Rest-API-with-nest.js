import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateProduitDto{
  @IsNotEmpty({ message: 'Le nom du produit est requis.' })
  @IsString({ message: 'Le nom doit être une chaîne de caractères.' })
  nom: string;

  @IsNotEmpty({ message: 'La catégorie est requise.' })
  @IsString({ message: 'La catégorie doit être une chaîne de caractères.' })
  categorie: string;

  @IsNotEmpty({ message: 'Le prix est requis.' })
  @IsNumber({}, { message: 'Le prix doit être un nombre.' })
  prix: number;

  @IsNotEmpty({ message: 'L\'id du fournisseur est requis.' })
  @IsNumber({}, { message: 'L\'id du fournisseur doit être un nombre.' })
  fournisseurId: number;
}