import scss from './assets/scss/default.scss';

class SmokerEditor {
    private _element: HTMLElement
    private _container: String
    private _modules: Object

    constructor(element: HTMLElement) {
        this._element = element;
        // this.container = new SmokerEditorContainer();
    }

    set element(element: HTMLElement) {
        this._element = element;
    }
    get element(): HTMLElement {
        return this._element;
    }

    set SE_Module(SE_Module: SE_ModuleObject) {
        this._modules[SE_Module.moduleName] = SE_Module;
    }

    private getDefaultModules() {
        const modules = this._modules;
    }

    private getModules() {

    }

    init() {
        this._element.innerHTML = `
            <style>
                ${scss}
            </style>
            <div class="smoker_editor_container">
                <div class="editor_header">
                    <ul>
                        <li>
                            <button class="btn_editor_action btn_bold"><i>Bold</i></button>
                        </li>
                        <li>
                            <button class="btn_editor_action btn_italic"><i>Italic</i></button>
                        </li>
                        <li>
                            <button class="btn_editor_action btn_underline"><i>Underline</i></button>
                        </li>
                        <li>
                            <button class="btn_editor_action btn_heading"><i>Heading</i></button>
                            <div class="layer_editor_action layer_heading">
                                <ul>
                                    <li><button><i data-replace-block="H1">H1</i></button></li>
                                    <li><button><i data-replace-block="H2">H2</i></button></li>
                                    <li><button><i data-replace-block="H3">H3</i></button></li>
                                    <li><button><i data-replace-block="H4">H4</i></button></li>
                                    <li><button><i data-replace-block="H5">H5</i></button></li>
                                    <li><button><i data-replace-block="H6">H6</i></button></li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <i></i>
                        </li>
                    </ul>
                </div>
                <div class="editor_body">
                    <div class="editor_contents" contenteditable="true">
                        <p><br/></p>
                    </div>
                </div>
            </div>
        `;
        // new SmokerEditorHandler();
    }
}

export default SmokerEditor;