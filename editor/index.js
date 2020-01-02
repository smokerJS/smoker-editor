import SmokerEditorContainer from './container';
import scss from './assets/scss/default.scss';

class SmokerEditor {

    /**
     * @param {Object} element 
     */
    constructor(element) {
        this.element = element;
        this.container = new SmokerEditorContainer();
    }

    /**
     * @param {Object} element 
     */
    setElement(element) {
        this.element = element;
    }

    init() {
        this.element.innerHTML = this.container.getContainer();
    }
}

export default SmokerEditor;