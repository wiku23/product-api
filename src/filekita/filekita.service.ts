import { Injectable } from '@nestjs/common';
import { Repository} from 'typeorm';
import { Filekita } from './entities/filekita.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class FilekitaService {
    constructor(
        @InjectRepository(Filekita)
        private fileKitaRepository: Repository<Filekita>,
    ) {}

    async showAll(): Promise<Filekita[]> {
        return await this.fileKitaRepository.find();
    } 
    
    async lihatSemua() {
        return "ini di service";
    }

  }
  