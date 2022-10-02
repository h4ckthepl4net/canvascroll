export namespace OrientationType {
    export enum Orientation {
        VERTICAL = 0,
        HORIZONTAL = 1,
    }

    export function typeCheck(orientation: Orientation) {
        if(!(orientation in Orientation)) {
            throw new InvalidOrientationError(orientation);
        }
    }

    export class InvalidOrientationError extends TypeError {
        constructor(value: Orientation) {
            super(`Invalid orientation value (not in Orientation enum type, expected 0 | 1, got ${value})`);

            Object.setPrototypeOf(this, InvalidOrientationError.prototype);
        }
    }
}
export default OrientationType.Orientation;