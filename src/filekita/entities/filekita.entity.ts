import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Filekita {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length : 500})
    nama: string;

    @Column('text')
    deskripsi: string;

    @Column()
    isPublik: Boolean;
}
