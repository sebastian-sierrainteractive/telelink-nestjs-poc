import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  AccountId,
  CallerIdentification,
  CallerIdentificationId,
  CallerIdService as CallerIdServiceDomain,
} from '@application/caller-id/domain';
import { CallerId } from '../models/caller-id.model';

@Injectable()
export class CallerIdServiceImpl implements CallerIdServiceDomain {
  constructor(
    @InjectModel(CallerId.name)
    private readonly callerIdModel: Model<CallerId>,
  ) {}

  async create(
    callerIdentification: Omit<CallerIdentification, 'id'>,
  ): Promise<CallerIdentification> {
    const createdCallerIdentification = await this.callerIdModel.create(
      callerIdentification,
    );

    if (!createdCallerIdentification) {
      throw new Error('Failed to create caller identification');
    }

    return createdCallerIdentification.toObject();
  }

  async get(id: CallerIdentificationId): Promise<CallerIdentification> {
    const callerIdentification = await this.callerIdModel.findOne({
      id,
    });

    if (!callerIdentification) {
      throw new Error(`Caller identification not found for id: ${id}`);
    }

    return callerIdentification.toObject();
  }

  getByAccountId(accountId: AccountId): Promise<CallerIdentification> {
    return this.callerIdModel
      .findOne({
        accountId,
      })
      .lean();
  }

  async update(
    id: CallerIdentificationId,
    update: Partial<CallerIdentification>,
  ): Promise<CallerIdentification> {
    const callerIdentification = await this.callerIdModel.findOneAndUpdate(
      { id },
      update,
      {
        returnDocument: 'after',
      },
    );

    if (!callerIdentification) {
      throw new Error(`Caller identification not updated for id: ${id}`);
    }

    return callerIdentification.toObject();
  }

  async delete(id: CallerIdentificationId): Promise<void> {
    const deleted = await this.callerIdModel.deleteOne({
      id,
    });

    if (!deleted) {
      throw new Error(`Failed to delete caller identification for id: ${id}`);
    }
  }
}

export const CallerIdService = {
  provide: CallerIdServiceDomain,
  useClass: CallerIdServiceImpl,
};
