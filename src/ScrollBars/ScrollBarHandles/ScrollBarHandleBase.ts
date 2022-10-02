import Length, { LengthType } from "../../types/Length";

export default abstract class ScrollBarHandleBase {
    private _handlePosition: Number = 0;
    constructor(length: Length) {
        LengthType.typeCheck(length);
    }
}