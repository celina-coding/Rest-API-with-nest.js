import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsOptional, IsString } from 'class-validator';

@InputType()
export class UpdateFournisseurInput {
  @Field({ nullable: true })
  @IsOptional()
  @IsString({ message: 'Le nom doit être une chaîne de caractères.' })
  nom?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString({ message: "L'adresse doit être une chaîne de caractères." })
  adress?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsEmail({}, { message: 'Le contact doit être une adresse email valide.' })
  contact?: string;
}
