import { PartialType } from '@nestjs/mapped-types';
import { CreateFilekitaDto } from './create-filekita.dto';

export class UpdateFilekitaDto extends PartialType(CreateFilekitaDto) {}
