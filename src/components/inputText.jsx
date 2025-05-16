import "../styles/inputText.css";
import { Send } from "../assets/icons/send";

export const InputText = ({ text, onTextChange, onSend }) => {
  return (
    <div className="inputText">
      <input
        type="text"
        value={text}
        className="inputText__input"
        onChange={(e) => onTextChange(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") onSend();
        }}
        placeholder="Type your message here..."
      />
      <div onClick={onSend}>
        <Send />
      </div>
    </div>
  );
};
