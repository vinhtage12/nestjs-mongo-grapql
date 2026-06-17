import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { TranslationCreateDto } from '../dto/TranslationCreate.dto';
import { TranslationService } from '../service/translation.service';

@Controller('translation')
export class TranslationController {
  constructor(private readonly translationService: TranslationService) {}
  @Post()
  create(@Body() createDto: TranslationCreateDto) {
    return this.translationService.createTranslation(createDto);
  }

  @Get('')
  async list(
    @Query('transKeys') transKeys?: string | string[],
  ): Promise<Record<string, string>> {
    const keys = Array.isArray(transKeys)
      ? transKeys
      : transKeys
        ? [transKeys]
        : [];

    return await this.translationService.list(keys);
  }
}
