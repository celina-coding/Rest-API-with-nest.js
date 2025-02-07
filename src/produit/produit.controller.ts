import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { ProduitService } from "./produit.service";
import { CreateProduitDto, updatedProduitDto } from "src/dto";


@Controller('Produits')
export class ProduitController{
    constructor(private produitService: ProduitService){}

    @Post('Create')
    createProduct(@Body() dto: CreateProduitDto ){
        return this.produitService.createProduct(dto);
    }

    @Patch('update/:id')
    updateProduct(@Param('id') id: string, @Body() dto: updatedProduitDto){
        const numericId = Number(id)
        return this.produitService.updateProduct(numericId,dto);
    }

    @Get('get/:id')
    getProduct(@Param('id') id: string){
        const numericId = Number(id)
        return this.produitService.getProduct(numericId);
    }

    @Get('getAll')
    getAllProduits() {
        return this.produitService.getAllProduits();
    }

    @Delete('delete/:id')
    deleteProduct(@Param('id') id: string){
        const numericId = Number(id)
        return this.produitService.deleteProduct(numericId);
    }
}