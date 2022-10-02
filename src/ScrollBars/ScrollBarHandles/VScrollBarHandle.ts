import Length from "../../types/Length";
import ScrollBarHandleBase from "./ScrollBarHandleBase";

export class VScrollBarHandle extends ScrollBarHandleBase {
    constructor(length: Length) {
        super(length);
    }
}