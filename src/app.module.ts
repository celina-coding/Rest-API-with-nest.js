import { Module } from '@nestjs/common';
import { ProduitModule } from './produit/produit.module';
import { FournisseurModule } from './fournisseur/fournisseur.module';
import { PrismaModule } from './prisma/prisma.module';


@Module({
  imports: [ProduitModule, FournisseurModule, PrismaModule],
 
})
export class AppModule {}
