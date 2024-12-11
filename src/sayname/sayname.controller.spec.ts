import { Test, TestingModule } from '@nestjs/testing';
import { SaynameController } from './sayname.controller';

describe('SaynameController', () => {
  let controller: SaynameController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SaynameController],
    }).compile();

    controller = module.get<SaynameController>(SaynameController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
