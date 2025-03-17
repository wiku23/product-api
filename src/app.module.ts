import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FilekitaModule } from './filekita/filekita.module';

@Module({
  imports: [TypeOrmModule.forRoot(
    {
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '#wikuaditama23',
      database: 'postgres',
      entities: [],
      synchronize: true
    }
  ), FilekitaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}