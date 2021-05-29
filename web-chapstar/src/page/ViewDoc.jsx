import React, {useState} from 'react';
import {CKeditor} from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function Check() {
    const [data, setData] = useState('');
    
    const handlerChange = (e, editor) => {
        const data = editor.getData();
        setData(data);
    }
    
    return(
        <div>
            <h1>Test</h1>
            <CKeditor
                editor={ClassicEditor}
                onChange={(e,editor) => {handlerChange(e,editor)}}
             />
        </div>
    )
}

export default Check;