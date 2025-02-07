import { Module } from "@nestjs/common";
import { ProduitService } from './produit.service';
import { ProduitController } from './produit.controller';
import { PrismaModule } from "src/prisma/prisma.module";
import { ProduitResolver } from "./produit.resolver";


@Module({
  imports: [PrismaModule],
  providers: [ProduitService, ProduitResolver],
  controllers: [ProduitController]
})
export class ProduitModule{

}