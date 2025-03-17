import { Controller, Get, Param } from '@nestjs/common';
import { FilekitaService } from './filekita.service';

@Controller('filekita')
export class FilekitaController {
    constructor(private filekitaService: FilekitaService) { }

    @Get()
    lihatOutput() {
        return this.filekitaService.showAll();
    }

    @Get('service')
    lihatSemua() {
        return this.filekitaService.lihatSemua();
    }

    @Get(':id')
    lihatDetail(@Param('id') id: string): string {
        return 'ini controller detail ' + id;
    }

}