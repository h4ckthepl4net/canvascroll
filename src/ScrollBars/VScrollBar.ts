import Length, { LengthType } from '../types/Length';
import ScrollBarBase from './ScrollBarBase';
import Orientation from '../types/Orientation';
import HelpersFacade from '../HelpersFacade';

export default class VScrollBar extends ScrollBarBase {
    constructor(length: Length) {
        LengthType.typeCheck(length);
        const handle = HelpersFacade.createScrollBarHandle(Orientation.VERTICAL);
        super(handle, Orientation.VERTICAL, length);
    }
}