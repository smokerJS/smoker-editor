class SmokerEditorModule {
    constructor({moduleName, buttonId, buttonClass, iconText, iconId, iconClass, iconImageURL}) {
        this._moduleName = moduleName;
        this._buttonId = buttonId;
        this._buttonClass = buttonClass;
        this._iconText = iconText;
        this._iconId = iconId;
        this._iconClass = iconClass;
        this._iconImageURL = iconImageURL;
    }

    capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    /**
     * @param {String} moduleName 
     */
    set moduleName(moduleName) {
        if(moduleName) this._moduleName = this.capitalizeFirstLetter(String(moduleName));
    }
    get moduleName() {
        return this._moduleName;
    }

    /**
     * @param {String} buttonId 
     */
    set buttonId(buttonId) {
        this._buttonId = String(buttonId);
    }
    get buttonId() {
        return this._buttonId;
    }



    toggleHandler(moduleName) {
        console.error(`SmokerEditor :: toggleHandler is not defined - ${moduleName}`);
    }
}

const temp  = new SmokerEditorModule()
temp.moduleName = '123'
console.log(temp.moduleName)
console.log(temp._moduleName)