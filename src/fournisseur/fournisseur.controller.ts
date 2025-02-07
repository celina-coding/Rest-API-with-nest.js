import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { FournisseurService } from "./fournisseur.service";
import { CreateFournisseurDto, UpdateFournisseurDto } from "src/dto";

@Controller('Founisseurs')
export class FournisseurController{
    constructor(private fournisseurService: FournisseurService){}

    @Post('Create')
    createFournisseur(@Body() dto: CreateFournisseurDto){
        console.log({
            dto,
        });
        return this.fournisseurService.createFounisseur(dto);
    }

    @Patch('update/:id')
    updateFournisseur(@Param('id') id:string, @Body() dto: UpdateFournisseurDto){
        const numericId = Number(id);
        return this.fournisseurService.updateFournisseur(numericId, dto);
    }

    @Get('getAll')
    getAllFournisseurs(){
        return this.fournisseurService.getAllFournisseurs()
    }

    @Get('get/:id')
    getFournisseur(@Param('id') id:string){
        const numericId = Number(id);
        return this.fournisseurService.getFounisseur(numericId);
    }
    @Delete('delete/:id')
    deleteFournisseur(@Param('id') id:string){
        const numericId = Number(id);
        return this.fournisseurService.deleteFournisseur(numericId);
    }
}