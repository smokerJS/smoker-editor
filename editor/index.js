class SmokerEditor {

    /**
     * @param {Object} element 
     */
    constructor(element) {
        this.element = element;
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