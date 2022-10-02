import Length from "../../types/Length";
import ScrollBarHandleBase from "./ScrollBarHandleBase";

export class HScrollBarHandle extends ScrollBarHandleBase {
    constructor(length: Length) {
        super(length);
    }
}