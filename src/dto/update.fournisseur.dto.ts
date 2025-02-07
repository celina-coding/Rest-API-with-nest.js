import { IsEmail, IsOptional, IsString } from "class-validator";

export class UpdateFournisseurDto{
  @IsOptional()
  @IsString({ message: 'Le nom doit être une chaîne de caractères.' })
  nom?: string;

  @IsOptional()
  @IsString({ message: "L'adresse doit être une chaîne de caractères." })
  adress?: string;

  @IsOptional()
  @IsEmail()
  contact?: string;
}