class SmokerEditorModule {

    private _moduleInfo: SE_ModuleBase;

    constructor(moduleInfo?: SE_ModuleBase) {
        moduleInfo && (this._moduleInfo = moduleInfo);
    }

    private capitalizeFirstLetter(string: string): string {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    set moduleName(moduleName: string) {
        if(moduleName) this._moduleInfo.moduleName = this.capitalizeFirstLetter(moduleName);
    }
    get moduleName(): string {
        return this._moduleInfo.moduleName;
    }

    set buttonId(buttonId: string) {
        this._moduleInfo.buttonId = buttonId;
    }
    get buttonId(): string {
        return this._moduleInfo.buttonId;
    }
    
    set buttonClass(buttonClass: string) {
        this._moduleInfo.buttonClass = buttonClass;
    }
    get buttonClass(): string {
        return this._moduleInfo.buttonClass;
    }

    set iconText(iconText: string) {
        this._moduleInfo.iconText = iconText;
    }
    get iconText(): string {
        return this._moduleInfo.iconText;
    }
    
    set iconId(iconId: string) {
        this._moduleInfo.iconId = iconId;
    }
    get iconId(): string {
        return this._moduleInfo.iconId;
    }

    set iconClass(iconClass: string) {
        this._moduleInfo.iconClass = iconClass;
    }
    get iconClass(): string {
        return this._moduleInfo.iconClass;
    }
    
    set iconImageURL(iconImageURL: string) {
        this._moduleInfo.iconImageURL = iconImageURL;
    }
    get iconImageURL(): string {
        return this._moduleInfo.iconImageURL;
    }
    
    set entryHandler(entryHandler: Function) {
        this._moduleInfo.entryHandler = entryHandler;
    }
    get entryHandler(): Function {
        return this._moduleInfo.entryHandler;
    }

    createModule(): SE_ModuleObject {
        const button: HTMLElement = document.createElement('button');
        this.buttonId && (button.id = this.buttonId);
        this.buttonClass && (button.className = this.buttonClass);
        this.entryHandler && (button.addEventListener('click', e => this.entryHandler(e)));

        const icon: HTMLElement = document.createElement('i');
        this.iconText && (icon.innerText = this.iconText);
        this.iconId && (icon.id = this.iconText);
        this.iconClass && (icon.className = this.iconText);
        this.iconImageURL && (icon.style.backgroundImage = this.iconImageURL);
        
        button.append(icon);
        
        return {moduleName: this.moduleName, module: button};
    }
}

export default SmokerEditorModule;