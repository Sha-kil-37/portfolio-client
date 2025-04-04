//
export default function MaskedText({ text, className = "" }) {
  //
  return (
    <div className={`masked-text ${className}`}>
      <span className={`${className} masked-text`}>{text}</span>
    </div>
  );
}
