import Module from '..';

class Bold extends Module {
    constructor() {
        super();
        this.moduleName = 'Blod';
        this.buttonId = 'smokerEditorModuleBold';
        this.buttonClass = 'smoker_editor_btn_bold';
        this.iconText = 'Blod';
        this.iconId = 'smokerEditorModuleBoldIcon';
        this.iconClass = 'smoker_editor_btn_bold_Icon';
        this.iconImageURL = null;
        this.entryHandler = this.replaceBoldHandler;
    }

    replaceBoldHandler() {
        document.execCommand('bold', false);
    }
}