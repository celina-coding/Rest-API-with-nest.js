
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
export class CreateFournisseurDto{
  
  @IsNotEmpty({ message: 'Le nom du fournisseur est requis.' })
  @IsString({ message: 'Le nom doit être une chaîne de caractères.' })
  nom: string;

  @IsNotEmpty({ message: "L'adresse est requise."})
  @IsString({ message: "L'adresse doit être une chaîne de caractères." })
  adress: string;

  @IsNotEmpty({ message: 'Le contact est requis.' })
  @IsEmail()
  contact: string;
}