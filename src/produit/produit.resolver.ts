import { Query, Resolver, Args, Mutation } from '@nestjs/graphql';
import { Produit } from './produit.model';
import { ProduitService } from './produit.service';
import { CreateProduitInput } from './graphql/create-produit.input';
import { UpdateProduitInput } from './graphql/update-produit.input';

@Resolver(() => Produit)
export class ProduitResolver {
  constructor(private readonly produitService: ProduitService) {}

  // Récupérer tous les produits
  @Query(() => [Produit])
  async produits() {
    return this.produitService.getAllProduits();
  }

  // Récupérer un produit par ID
  @Query(() => Produit)
  async produit(@Args('id') id: number) {
    return this.produitService.getProduct(id);
  }

  // Créer un produit
  @Mutation(() => Produit)
  async createProduit(
    @Args('input') createProduitData: CreateProduitInput,
  ) {
    return this.produitService.createProduct(createProduitData);
  }

  // Mettre à jour un produit
  @Mutation(() => Produit)
  async updateProduit(
    @Args('id') id: number,
    @Args('input') updateProduitData: UpdateProduitInput,
  ) {
    return this.produitService.updateProduct(id, updateProduitData);
  }

  // Supprimer un produit
  @Mutation(() => Boolean)
  async deleteProduit(@Args('id') id: number) {
    await this.produitService.deleteProduct(id);
    return true;
  }
}
