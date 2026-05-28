export default function QuizBtn({ text, onClick }) {
  return (
    <button onClick={onClick} className="quiz-opt"
      style={{ padding: '18px 20px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.09)', borderRadius: 14, cursor: 'pointer', fontFamily: "'Oxanium',sans-serif", fontSize: 14, fontWeight: 500, color: 'rgba(255,255,255,0.62)', textAlign: 'left', transition: 'all 0.2s ease' }}>{text}</button>
  );
}
