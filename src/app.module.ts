import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity';


@Module({
  imports: [UsersModule,
      TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3308,
      username: 'root',
      password: '',
      database: 'prueba',
      entities: [ User ],
      synchronize: true,//En modo produccion la sincronizacion se debe desactivar para que no haya perdida de informacion por algun error
      //solo se debe tener la sincronizacion activada en entorno de desarrollo
    }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
