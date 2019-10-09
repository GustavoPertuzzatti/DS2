import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn} from 'typeorm';
import { EstadoEntity } from './estado.entity';

// Para nomear a entidade/Tabela (Para poder buscar no banco a tabela correta)
@Entity({name: 'cidade'})


export class CidadeEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: false, length: 100})
    nome: string;

    // eager vai fazer um inner join com a tabela pai ? True; Layz True
    @ManyToOne(type => EstadoEntity, {eager: true, nullable: false})
    @JoinColumn({name: 'estado_id'})
    estado: EstadoEntity;

    @Column({type: 'double', nullable: false})
    lat: number;

    @Column({type: 'double', nullable: false})
    lng: number;
}