import SmokerEditorContainer from './container';

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
        this.element.innerHTML = '<div>ale</div>';
    }
}

export default SmokerEditor;