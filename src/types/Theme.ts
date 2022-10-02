export namespace ThemeType {
    export enum Theme {
        LIGHT = 0,
        DARK = 1,
    }

    export function typeCheck(theme: Theme) {
        if(!(theme in Theme)) {
            throw new InvalidThemeError(theme);
        }
    }

    export class InvalidThemeError extends TypeError {
        constructor(value: Theme) {
            super(`Invalid theme value (not in Theme enum type, expected 0 | 1, got ${value})`);

            Object.setPrototypeOf(this, InvalidThemeError.prototype);
        }
    }
}
export default ThemeType.Theme;