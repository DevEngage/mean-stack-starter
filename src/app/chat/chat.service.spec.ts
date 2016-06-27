/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { ChatService } from './chat.service';

describe('Chat Service', () => {
  beforeEachProviders(() => [ChatService]);

  it('should ...',
      inject([ChatService], (service: ChatService) => {
    expect(service).toBeTruthy();
  }));
});
