import { Injectable } from "@nestjs/common";
import { CreateFournisseurDto, UpdateFournisseurDto } from "src/dto";
import { PrismaService } from "src/prisma/prisma.service";


@Injectable({})
export class FournisseurService{
    constructor(private prisma: PrismaService){}
    async createFounisseur(dto: CreateFournisseurDto){
        const fournisseur = await this.prisma.fournisseur.create({
            data: {
                nom: dto.nom,
                adress: dto.adress,
                contact: dto.contact,
            },
        });
        return fournisseur;
    }

    async updateFournisseur(id: number, dto: UpdateFournisseurDto){

        const updatedFournisseur = await this.prisma.fournisseur.update({
            where: { id: id },
            data: dto,
        });

        return updatedFournisseur;
    }

    async getFounisseur(id: number){
        const fournisseur = await this.prisma.fournisseur.findUnique({where: {id}});

        return fournisseur;
    }

    deleteFournisseur(id: number){
        return this.prisma.fournisseur.delete({where: {id}});
    }

}