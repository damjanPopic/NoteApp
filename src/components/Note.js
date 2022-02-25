import "./Note.css";

const Note = ({ text, date, onRemoveNote, item }) => {
  return (
    <div className="note-container">
      <p className="note-text">{text}</p>
      <div className="note-flex-container">
        <p>{date}</p>
        <button className="delete-btn" onClick={() => onRemoveNote(item.id)}>
          Delete
        </button>
      </div>
    </div>
  );
};
export default Note;
