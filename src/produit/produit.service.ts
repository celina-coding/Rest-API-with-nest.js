import { Injectable } from "@nestjs/common";
import { CreateProduitDto, updatedProduitDto } from "src/dto";
import { PrismaService } from "src/prisma/prisma.service";


@Injectable({})
export class ProduitService{
    constructor(private prisma: PrismaService){}
    async createProduct(dto: CreateProduitDto){
        const produit = await this.prisma.produit.create({
            data: {
                nom: dto.nom,
                categorie: dto.categorie,
                prix: dto.prix,
                fournisseurId: dto.fournisseurId,
            },
        });
        return produit;
    }

    async updateProduct(id: number, dto: updatedProduitDto){
        const updatedProduit = await this.prisma.produit.update({
            where: { id: id },
            data: dto,
          });
          return updatedProduit;
    }

    async getProduct(id: number){
        return await this.prisma.produit.findUnique({
            where: {id},
        });
        
    }

    async getAllProduits(){
        return await this.prisma.produit.findMany();
    }

    async deleteProduct(id: number){
        return await this.prisma.produit.delete({where: {id}});
    }

}