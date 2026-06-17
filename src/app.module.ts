import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TranslationModule } from './features/translation/module/translation.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://root:example@localhost:27017'),
    TranslationModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
