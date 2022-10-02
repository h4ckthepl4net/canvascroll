export namespace DirectionType {
    export enum Direction {
        BACKWARD = -1,
        NEUTRAL = 0,
        FORWARD = 1,
    }

    export function typeCheck(direction: Direction) {
        if(!(direction in Direction)) {
            throw new InvalidDirectionError(direction);
        }
    }

    export class InvalidDirectionError extends TypeError {
        constructor(value: Direction) {
            super(`Invalid direction value (not in Direction enum type, expected -1 | 0 | 1, got ${value})`);

            Object.setPrototypeOf(this, InvalidDirectionError.prototype);
        }
    }
}
export default DirectionType.Direction;