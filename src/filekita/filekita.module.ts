import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Filekita } from './entities/filekita.entity';
import { FilekitaService } from './filekita.service';
import { FilekitaController } from './filekita.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Filekita])],
  controllers: [FilekitaController],
  providers: [FilekitaService],
})
export class FilekitaModule {

  }