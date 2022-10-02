import HelpersFacade from '../HelpersFacade';
import Length from '../types/Length';
import Orientation from '../types/Orientation';
import ScrollBarBase from './ScrollBarBase';

export default class HScrollBar extends ScrollBarBase {
    constructor(length: Length) {
        const orientation = Orientation.VERTICAL;
        const handle = HelpersFacade.createScrollBarHandle(orientation);
        super(handle, orientation, length);
    }
}