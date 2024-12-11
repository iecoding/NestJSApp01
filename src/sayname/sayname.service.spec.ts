import { Test, TestingModule } from '@nestjs/testing';
import { SaynameService } from './sayname.service';

describe('SaynameService', () => {
  let service: SaynameService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SaynameService],
    }).compile();

    service = module.get<SaynameService>(SaynameService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
