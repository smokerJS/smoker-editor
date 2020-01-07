class SmokerEditorHandler {
    constructor() {
        if(document.selection) {
            this.sel = document.selection;
        }else {
            this.sel = document.getSelection();
        }
        this.init();
    }

    getRange() {
        if(document.selection) {
            return this.sel.createRange();
        }else {
            return this.sel.getRangeAt(0);
        }
    }

    addCheckedByTagName(tagName) {
        switch(tagName.toString().toUpperCase()) {
            case 'B' :
            case 'STRONG' : document.querySelector('.btn_bold').classList.add('checked'); break;
            case 'I' : document.querySelector('.btn_italic').classList.add('checked'); break;
            case 'U' : document.querySelector('.btn_underline').classList.add('checked'); break;
        }
    }

    checkButtonUsed(e) {
        let resultName = e.nodeName.toString().toUpperCase();
        switch(resultName) {
            case 'B' :
            case 'STRONG' : document.querySelector('.btn_bold').classList.add('checked'); break;
            case 'I' : document.querySelector('.btn_italic').classList.add('checked'); break;
            case 'U' : document.querySelector('.btn_underline').classList.add('checked'); break;
        }
        e.className !== 'editor_contents' && this.checkButtonUsed(e.parentElement);
    }

    checkStateTag() {
        document.querySelector('.editor_contents').addEventListener('click',(e) => {
            if(!e.toElement.innerText) return;
            document.querySelectorAll('.btn_editor_action').forEach(ele => ele.classList.remove('checked'));
            let sel = document.getSelection();
            if(sel) {
                let nodeList = sel.getRangeAt(0).cloneContents().childNodes;
                if(nodeList) {
                    nodeList.forEach(ele => this.addCheckedByTagName(ele.nodeName));
                    // return;
                }
                console.dir(sel.getRangeAt(0).cloneContents())
                console.log(sel)
                console.log(sel.getRangeAt(0).commonAncestorContainer)
                this.checkButtonUsed(sel.getRangeAt(0).startContainer.parentElement)
                this.checkButtonUsed(sel.getRangeAt(0).endContainer.parentElement)
            }else {
                this.checkButtonUsed(e.toElement);
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

    mouseEventToggle() {
        document.querySelector('.editor_contents').addEventListener('mouseup',(e) => {
            let sel = document.getSelection();
            if(sel) {
                
                let range = sel.getRangeAt(0);
                console.log(sel)
                console.log(range)
                // let text = sel.toString();
                // node.innerHTML = text;
                // if(removeTag) {
                //     text = `</${tag}>${text}<${tag}>`;
                //     node = document.createDocumentFragment();
                //     node.appendChild(text);
                // }
                // range.deleteContents();
                // range.insertNode(node);
            }
        });
    }

    buttonToggle() {
        document.querySelectorAll('.btn_editor_action').forEach(ele => {
            ele.addEventListener('click', (e) => {
                document.querySelectorAll('.btn_editor_action').forEach(ele => ele.classList.remove('checked'));
                let sel = document.getSelection();
                if(sel) {
                    console.log(sel.getRangeAt(0))
                    this.checkButtonUsed(sel.getRangeAt(0).startContainer.parentElement)
                    this.checkButtonUsed(sel.getRangeAt(0).endContainer.parentElement)
                }else {
                    e.currentTarget.classList.toggle('checked');
                }
            })
        });
    }

    replaceBold() {
        document.querySelector('.btn_bold').addEventListener('click',(e) => {
            document.execCommand('bold', false);
        });
    }

    replaceItalic() {
        document.querySelector('.btn_italic').addEventListener('click',(e) => {
            document.execCommand('italic', false);
        });
    }

    replaceUnderline() {
        document.querySelector('.btn_underline').addEventListener('click',(e) => {
            document.execCommand('underline', false);
        });
    }

    replaceBlock() {
        document.querySelector('.btn_heading').addEventListener('click',(e) => {
            document.querySelector('.layer_heading').classList.toggle('on');
        });
        document.querySelectorAll('.layer_heading > ul > li > button').forEach( (ele) => {
            ele.addEventListener('click',(e) => {
                let replaceBlock = e.target.dataset.replaceBlock;

                // if(replaceBlock[0] !== 'H' || ) replaceBlock = '';
                // document.querySelector('.layer_heading').classList.toggle('on');
                console.log(e);
                console.log(e.target.dataset.replaceBlock);
                document.execCommand('formatBlock', false, e.target.dataset.replaceBlock)
                // document.execCommand('underline', false);
            });
        });
    }

    init() {
        this.checkStateTag();
        // this.mouseEventToggle();
        this.buttonToggle();
        this.replaceBold();
        this.replaceItalic();
        this.replaceUnderline();
        this.replaceBlock();
        document.execCommand('defaultParagraphSeparator', false, 'p');
    }
}

export default SmokerEditorHandler;