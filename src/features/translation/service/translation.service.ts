import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Translation } from '../schema/translation.schema';
import { Model } from 'mongoose';
import { TranslationCreateDto } from '../dto/TranslationCreate.dto';

@Injectable()
export class TranslationService {
  constructor(
    @InjectModel(Translation.name)
    private readonly translationModel: Model<Translation>,
  ) {}

  async createTranslation(
    createDto: TranslationCreateDto,
  ): Promise<Translation> {
    const newTranslation = new this.translationModel(createDto);
    return await newTranslation.save();
  }

  async list(transKeys: string[]): Promise<Record<string, string>> {
    const query = transKeys.length ? { transKey: { $in: transKeys } } : {};

    const translations = await this.translationModel.find(query).exec();
    return translations.reduce(
      (acc, translation) => {
        acc[translation.transKey] = translation.EN || '';
        return acc;
      },
      {} as Record<string, string>,
    );
  }
}
