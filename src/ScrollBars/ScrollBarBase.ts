import ScrollBarHandleBase from "./ScrollBarHandles/ScrollBarHandleBase";
import { OrientationType } from "../types/Orientation";
import Orientation from '../types/Orientation';
import { LengthType } from "../types/Length";
import Length from "../types/Length";
import ScrollBarButtonBase from "./ScrollBarButtons/ScrollBarButtonBase";

export default abstract class ScrollBarBase {
    private _scrollBarButtons: Array<ScrollBarButtonBase> = [];
    private _scrollBarHandle: ScrollBarHandleBase;
    private _scrollBarWidth: Length;
    
    private _orientation: Orientation;
    public get orientation(): Orientation {
        return this._orientation;
    }

    constructor(scrollBarHandle: ScrollBarHandleBase,
                orientation: Orientation = Orientation.VERTICAL,
                scrollBarWidth: Length = [10, 'px']) {
        OrientationType.typeCheck(orientation);
        LengthType.typeCheck(scrollBarWidth);
        this._scrollBarHandle = scrollBarHandle;
        this._scrollBarWidth = scrollBarWidth;
        this._orientation = orientation;
    }

        
}