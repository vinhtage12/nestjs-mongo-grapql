import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Translation, TranslationSchema } from '../schema/translation.schema';
import { TranslationService } from '../service/translation.service';
import { TranslationController } from '../controller/Translation.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Translation.name, schema: TranslationSchema },
    ]),
  ],
  providers: [TranslationService],
  controllers: [TranslationController],
})
export class TranslationModule {}
