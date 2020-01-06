

const module = [
    {
        key: 'bold',
    },
]


const container = `
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
                            <li><button><i>H1</i></button></li>
                            <li><button><i>H2</i></button></li>
                            <li><button><i>H3</i></button></li>
                            <li><button><i>H4</i></button></li>
                            <li><button><i>H5</i></button></li>
                            <li><button><i>H6</i></button></li>
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

            </div>
        </div>
    </div>
`;


class SmokerEditorContainer {
    getContainer() {
        return container;
    }
}

export default SmokerEditorContainer;