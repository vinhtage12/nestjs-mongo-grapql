import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Translation {
  @Prop({ required: true })
  transKey!: string;

  @Prop()
  EN?: string;

  @Prop()
  VI?: string;
}

export const TranslationSchema = SchemaFactory.createForClass(Translation);
