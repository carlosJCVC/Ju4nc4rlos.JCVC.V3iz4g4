// import { SetMetadata } from '@nestjs/common';
import { registerDecorator, ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator';


export function Match(property: string, validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
        registerDecorator({
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [property],
            validator: MatchValidator,
        });
    };
}

@ValidatorConstraint({ name: 'matchPassword' })
export class MatchValidator implements ValidatorConstraintInterface {
    validate(value: String, args: ValidationArguments): boolean {
        const [relatedPropertyName] = args.constraints;
        const relatedValue = (args.object as any)[relatedPropertyName];

        return value === relatedValue;
    }

    defaultMessage?(validationArguments?: ValidationArguments): string {
        const {property, constraints: [propertyCompared]} = validationArguments;

        return `${property} must be equals to ${propertyCompared}.`;
    }
}
