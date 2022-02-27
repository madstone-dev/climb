import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor/dist/i18n/ko-kr';
import { Editor } from '@toast-ui/react-editor';

export default function TUIEditor() {
  return (
    <Editor
      language="ko-KR"
      initialEditType="wysiwyg"
      initialValue="내용을 입력하세요!"
      previewStyle="vertical"
      height="600px"
      useCommandShortcut={true}
    />
  );
}
