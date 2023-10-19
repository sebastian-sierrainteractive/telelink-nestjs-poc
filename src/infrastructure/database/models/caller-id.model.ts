import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { randomUUID } from 'crypto';

@Schema({ timestamps: true })
export class CallerId extends Document {
  @Prop({ default: () => randomUUID(), unique: true })
  id: string;

  @Prop({ type: String, sparse: true, default: null })
  vendorId: string;

  @Prop({
    type: String,
    required: true,
  })
  displayName: string;

  @Prop({ type: String, default: 'draft' })
  status: string;

  @Prop({ type: String, required: true })
  accountId: string;

  @Prop({ type: String, required: true })
  customerProfileId: string;
}

export const CallerIdSchema = SchemaFactory.createForClass(CallerId);
