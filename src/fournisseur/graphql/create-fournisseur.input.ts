import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateFounisseurInput {
    @Field()
    @IsNotEmpty({ message: 'Le nom du fournisseur est requis.' })
    @IsString({ message: 'Le nom doit être une chaîne de caractères.' })
    nom: string;

    @Field()
    @IsNotEmpty({ message: "L'adresse est requise." })
    @IsString({ message: "L'adresse doit être une chaîne de caractères." })
    adress: string;

    @Field()
    @IsNotEmpty({ message: 'Le contact est requis.' })
    @IsEmail()
    contact: string;
}