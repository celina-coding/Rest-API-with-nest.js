import { Module } from '@nestjs/common';
import { FournisseurController } from './fournisseur.controller';
import { FournisseurService } from './fournisseur.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { FournisseurResolver } from './fournisseur.resolver';

@Module({
    imports: [PrismaModule],
    controllers: [FournisseurController],
    providers: [FournisseurService, FournisseurResolver],
})
export class FournisseurModule {}
