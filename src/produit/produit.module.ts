import { Module } from "@nestjs/common";
import { ProduitService } from './produit.service';
import { ProduitController } from './produit.controller';
import { PrismaModule } from "src/prisma/prisma.module";


@Module({
  imports: [PrismaModule],
  providers: [ProduitService],
  controllers: [ProduitController]
})
export class ProduitModule{

}