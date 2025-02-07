import { Query, Resolver, Args, Mutation } from '@nestjs/graphql';
import { FournisseurService } from "./fournisseur.service";
import { Fournisseur } from "./graphql/fournisseur.model";
import { CreateFounisseurInput } from './graphql/create-fournisseur.input';
import { UpdateFournisseurInput } from './graphql/update-Fournisseur';

@Resolver(() => Fournisseur)
export class FournisseurResolver{
    constructor(private readonly fournisseurService: FournisseurService){}

    @Query(() => [Fournisseur])
    async fournisseurs(){
        return this.fournisseurService.getAllFournisseurs()
    }

    @Query(() => Fournisseur)
    async fournisseur(@Args('id') id: number){
        return this.fournisseurService.getFounisseur(id);
    }

    @Mutation(() => Fournisseur)
    async createFournisseur(@Args('input') createFournisseurData: CreateFounisseurInput){
        return this.fournisseurService.createFounisseur(createFournisseurData);
    }
    
    @Mutation(() => Fournisseur)
    async updateFournisseur(
        @Args('id') id: number,
        @Args('input') updateFournisseurData: UpdateFournisseurInput,
    ){
        return this.fournisseurService.updateFournisseur(id,updateFournisseurData);
    }
    
    @Mutation(() => Boolean)
    async deleteFournisseur(
        @Args('id') id: number,
    ){
        await this.fournisseurService.deleteFournisseur(id);
        return true;
    }

}