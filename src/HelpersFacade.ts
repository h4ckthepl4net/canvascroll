import ScrollBar from './ScrollBars/VScrollBar';
import ScrollBarHandleBase from './ScrollBars/ScrollBarHandles/ScrollBarHandleBase';
import ScrolledCanvas from './ScrolledCanvas';
import Orientation, { OrientationType } from './types/Orientation';
import ScrollBarBase from './ScrollBars/ScrollBarBase';
import VScrollBar from './ScrollBars/VScrollBar';
import Length, { LengthType } from './types/Length';
import HScrollBar from './ScrollBars/HScrollBar';
import { VScrollBarHandle } from './ScrollBars/ScrollBarHandles/VScrollBarHandle';
import { HScrollBarHandle } from './ScrollBars/ScrollBarHandles/HScrollBarHandle';

export default class HelpersFacade {

    public static createScrollBar(orientation: Orientation, length: Length = [10, 'px']): ScrollBarBase {
        OrientationType.typeCheck(orientation);
        LengthType.typeCheck(length);
        switch (orientation) {
            case Orientation.VERTICAL:
                return new VScrollBar(length);
                break;
            case Orientation.HORIZONTAL:
                return new HScrollBar(length);
                break;
        }
    }

    public static createScrollBarHandle(orientation: Orientation, length: Length = [10, 'px']): ScrollBarHandleBase {
        OrientationType.typeCheck(orientation);
        LengthType.typeCheck(length);
        switch (orientation) {
            case Orientation.VERTICAL:
                return new VScrollBarHandle(length);
                break;
            case Orientation.HORIZONTAL:
                return new HScrollBarHandle(length);
                break;
        }
    }

}