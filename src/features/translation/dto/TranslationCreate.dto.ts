import { IsNotEmpty, IsString } from 'class-validator';

export class TranslationCreateDto {
  @IsNotEmpty()
  @IsString()
  transKey: string;

  @IsString()
  EN?: string;

  @IsString()
  VI?: string;
}
