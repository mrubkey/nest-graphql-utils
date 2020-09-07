import { Directive, ObjectType, ObjectTypeOptions } from '@mirco312312/nest-fgql';
import { applyDecorators } from '@nestjs/common';

interface ExtendedObjectTypeOptions extends ObjectTypeOptions {
  keyFields: string;
  name?: string;
}

export const ExtendedObjectType = ({ keyFields, name, ...options }: ExtendedObjectTypeOptions) => {
  return applyDecorators(
    Directive('@extends'),
    Directive(`@key(fields: "${keyFields}")`),
    ObjectType(name, options),
  );
};
