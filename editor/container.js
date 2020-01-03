

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
                    <button class="btn_bold"><i>B</i></button>
                </li>
                <li>
                    <i>ㅁㄴㅍㅈ븁쥽ㅈ</i>
                </li>
                <li>
                    <i></i>
                </li>
                <li>
                    <i></i>
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