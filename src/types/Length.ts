export type LengthUnit = 'px' | '%' | 'vh' | 'vw';

export type Length = [Number, LengthUnit];

export namespace LengthType {

    export enum LengthPart {
        VALUE = 0,
        UNIT = 1,
    }

    export function typeCheck(length: Length) {
        const unit = length[LengthPart.UNIT];
        const value = length[LengthPart.VALUE];
        if(unit !== '%' &&
           unit !== 'px' &&
           unit !== 'vh' &&
           unit !== 'vw') {
            throw new InvalidLengthUnitError(unit);
        } else if (typeof value !== 'number') {
            throw new InvalidLengthValueError(value);
        }
    }

    export class InvalidLengthValueError extends TypeError {
        constructor(value: Number) {
            super(`Invalid length value (expected number, got ${typeof value}(${value}))`);

            Object.setPrototypeOf(this, InvalidLengthValueError.prototype);
        }
    }

    export class InvalidLengthUnitError extends TypeError {
        constructor(value: LengthUnit) {
            super(`Invalid length value (expected 'px' | '%' | 'vh' | 'vw' got ${typeof value}(${value}))`);

            Object.setPrototypeOf(this, InvalidLengthValueError.prototype);
        }
    }

}

export default Length;