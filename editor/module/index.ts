// class SmokerEditorModulesss {

//     /**
//      * 
//      * @param {String} moduleName  
//      */
//     constructor({moduleName, buttonId, buttonClass, iconText, iconId, iconClass, iconImageURL, entryHandler}) {
//         /**
//          * @type {string}
//          * @private
//          */
//         this._moduleName = moduleName || '';
        
//         /**
//          * @type {string}
//          * @private
//          */
//         this._buttonId = buttonId;
        
//         /**
//          * @type {string}
//          * @private
//          */
//         this._buttonClass = buttonClass;
        
//         /**
//          * @type {string}
//          * @private
//          */
//         this._iconText = iconText;
        
//         /**
//          * @type {string}
//          * @private
//          */
//         this._iconId = iconId;
        
//         /**
//          * @type {string}
//          * @private
//          */
//         this._iconClass = iconClass;
        
//         /**
//          * @type {string}
//          * @private
//          */
//         this._iconImageURL = iconImageURL;

//         /**
//          * @type {string}
//          * @private
//          */
//         this._entryHandler = entryHandler;
//     }

//     capitalizeFirstLetter(string) {
//         return string.charAt(0).toUpperCase() + string.slice(1);
//     }

//     /**
//      * @param {String} moduleName 
//      */
//     set moduleName(moduleName) {
//         if(moduleName) this._moduleName = this.capitalizeFirstLetter(String(moduleName));
//     }
//     get moduleName() {
//         return this._moduleName;
//     }

//     /**
//      * @param {String} buttonId 
//      */
//     set buttonId(buttonId) {
//         this._buttonId = String(buttonId);
//     }
//     get buttonId() {
//         return this._buttonId;
//     }
    
//     /**
//      * @param {String} buttonClass 
//      */
//     set buttonClass(buttonClass) {
//         this._buttonClass = String(buttonClass);
//     }
//     get buttonClass() {
//         return this._buttonClass;
//     }
    
//     /**
//      * @param {String} iconText 
//      */
//     set iconText() {
//         this._iconText = String(iconText);
//     }
//     get iconText() {
//         return this._iconText;
//     }
    
//     /**
//      * @param {String} iconId 
//      */
//     set iconId() {
//         this._iconId = String(iconId);
//     }
//     get iconId() {
//         return this._iconId;
//     }
    
//     /**
//      * @param {String} iconClass 
//      */
//     set iconClass() {
//         this._iconClass = String(iconClass);
//     }
//     get iconClass() {
//         return this._iconClass;
//     }
    
//     /**
//      * @param {String} iconImageURL 
//      */
//     set iconImageURL() {
//         this._iconImageURL = String(iconImageURL);
//     }
//     get iconImageURL() {
//         return this._iconImageURL;
//     }
    
//     /**
//      * @param {Function} entryHandler  
//      */
//     set entryHandler(entryHandler) {
//         this._entryHandler = entryHandler;
//     }
//     get entryHandler() {
//         return this._entryHandler;
//     }


//     toggleHandler(moduleName) {
//         console.error(`SmokerEditor :: toggleHandler is not defined - ${moduleName}`);
//     }
// }

// const temp  = new SmokerEditorModule()
// temp.moduleName = '123'
// console.log(temp.moduleName)
// console.log(temp._moduleName)