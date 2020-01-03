class SmokerEditorHandler {
    constructor() {
        this.init();
        this.ele = selector => document.querySelector(selector);
    }

    checkStateTag() {
        document.querySelector('.editor_contents').addEventListener('click',(e) => {
            switch(e.toElement.nodeName) {
                case 'B' :
                case 'STRONG' : document.querySelector('.btn_bold').classList.add('checked'); break;
            }
        });
    }

    replace(tag = 'p', removeTag) {
        let sel = document.getSelection();
        if(sel) {
            let range = sel.getRangeAt(0);
            let node = document.createElement(tag);
            let text = sel.toString();
            node.innerHTML = text;
            if(removeTag) {
                text = `</${tag}>${text}<${tag}>`;
                node = document.createDocumentFragment();
                node.appendChild(text);
            }
            range.deleteContents();
            range.insertNode(node);
        }
    }

    replaceBoldText() {
        document.querySelector('.btn_bold').addEventListener('click',(e) => {
            let removeTag = false;
            if(this.ele('.btn_bold').classList.contains('checked')) removeTag = true;
            document.execCommand('bold', false);
            // this.replace('strong', removeTag);
        });
    }

    init() {
        this.checkStateTag();
        this.replaceBoldText();
    }
}

export default SmokerEditorHandler;