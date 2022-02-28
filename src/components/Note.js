import "./Note.css";

const Note = ({ onRemoveNote, item }) => {
  return (
    <div className="note-container">
      <p className="note-text">{item.text}</p>
      <div className="note-flex-container">
        <p>{item.date}</p>
        <button className="delete-btn" onClick={() => onRemoveNote(item.id)}>
          Delete
        </button>
      </div>
    </div>
  );
};
export default Note;
