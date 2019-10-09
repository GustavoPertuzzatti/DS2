import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn} from 'typeorm';
import { CidadeEntity } from './cidade.entity';

// Para nomear a entidade/Tabela (Para poder buscar no banco a tabela correta)
@Entity({name: 'cliente'})


export class ClienteEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: false, length: 6})
    CODIGO: string;


    @Column({nullable: false, length: 100})
    nome: string;

    @Column({nullable: false, length: 100})
    email: string;

    // eager vai fazer um inner join com a tabela pai ? True; Layz True
    @ManyToOne(type => CidadeEntity, {eager: true})
    @JoinColumn({name: 'CIDADE_ID'})
    cidade: CidadeEntity;

}