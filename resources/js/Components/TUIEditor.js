import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor/dist/i18n/ko-kr';
import { Editor } from '@toast-ui/react-editor';

export default function TUIEditor({ ...rest }) {
  return (
    <Editor
      language="ko-KR"
      initialEditType="wysiwyg"
      placeholder="내용을 입력하세요."
      previewStyle="vertical"
      useCommandShortcut={true}
      {...rest}
    />
  );
}
