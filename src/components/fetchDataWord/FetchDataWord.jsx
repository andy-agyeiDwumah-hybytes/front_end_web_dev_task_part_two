export default function FetchDataWord({word, partOfSpeech, definition, styles}) {
  return (
    <li className={styles.liWordData}>
      <p>
        <strong>Word:</strong> {word}
      </p>
      <p>
        <strong>Part of Speech:</strong> {partOfSpeech}
      </p>
      <p>
        <strong>Definition:</strong> {definition}
      </p>
    </li>
  );
}
