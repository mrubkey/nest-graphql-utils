import { Field, Directive } from '@mirco312312/nest-fgql';
import { applyDecorators } from '@nestjs/common';

export const ExternalField = (...args: Parameters<typeof Field>) => {
  return applyDecorators(Directive('@external'), Field(...args));
};
