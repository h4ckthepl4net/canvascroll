import HelpersFacade from './HelpersFacade';
import Orientation from './types/Orientation';
import ScrollBarBase from './ScrollBars/ScrollBarBase';
import VScrollBar from './ScrollBars/VScrollBar';
import HScrollBar from './ScrollBars/HScrollBar';

/**
 * @class ScrolledCanvas
 */
export default class ScrolledCanvas {

    private _canvas: HTMLCanvasElement;

    private _scrollBars: Array<ScrollBarBase> = [];

    constructor(canvas: HTMLCanvasElement, orientations: Array<Orientation> = [Orientation.VERTICAL]) {
        this._canvas = canvas ?? document.createElement('canvas');
        for(const o of orientations) {
            this.addScrollBar(o);
        }
    }

    public addScrollBar(orientation: Orientation = Orientation.VERTICAL) {
        const newScrollBar = HelpersFacade.createScrollBar(orientation);
        this.addCustomScrollBar(newScrollBar);
    }

    public addCustomScrollBar(scrollBar: ScrollBarBase) {
        this._scrollBars[scrollBar.orientation] = scrollBar;
    }
}