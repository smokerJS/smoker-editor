interface SE_ModuleBase {
    moduleName: string;
    buttonId?: string;
    buttonClass?: string;
    iconText?: string;
    iconId?: string;
    iconClass?: string;
    iconImageURL?: string;
    entryHandler: Function;
}

interface SE_ModuleObject {
    moduleName: string;
    module: HTMLElement;
}