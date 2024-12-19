// React
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
// Styles
import styles from "./FetchData.module.css";
// Components
import FetchDataWord from "../fetchDataWord/FetchDataWord";

const URL = "https://wordsapiv1.p.rapidapi.com/words/?random=true";
const OPTIONS = {
  method: "GET",
  headers: {
    "x-rapidapi-key": import.meta.env.VITE_API_KEY,
    "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
  },
};

export default function FetchData() {
  const [data, setData] = useState([]);
  const [dataIsLoading, setDataIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      // Create a timeout promise - prevents the app from hanging if data cannot be fetched
      // Waits 10 seconds
      const timeout = new Promise((_, reject) =>
        setTimeout(() => reject(new Error("Request timed out")), 10000)
      );

      // Fetch data
      try {
        const fetchPromise = fetch(URL, OPTIONS).then((response) => {
          if (!response.ok) {
            throw new Error("Failed to fetch data");
          }
          return response.json();
        });
        const result = await Promise.race([fetchPromise, timeout]);
        setData(() => {
          return [result];
        });
      } catch (err) {
        setError(err);
      } finally {
        // Always set to false if data is fetched or there is an error
        setDataIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const uuidFromUuidV4 = () => {
    return uuidv4();
  };

  return (
    <main className={styles.main} aria-live="polite">
      {error !== null && <p className={styles.error}>{error.message}. Please try again</p>}
      {dataIsLoading ? (
        <div>
          <h1>Loading...</h1>
        </div>
      ) : (
        <div>
          <ul>
            {data &&
              data.map(wordData => {
                const word = wordData?.word ? wordData.word : "N/A";
                const partOfSpeech = wordData?.results?.[0]?.["partOfSpeech"]
                  ? wordData.results[0]["partOfSpeech"]
                  : "No part of speech available";
                const definition = wordData?.results?.[0]?.["definition"]
                  ? wordData.results[0]["definition"]
                  : "No definition available";
                return (
                  <FetchDataWord
                    key={uuidFromUuidV4}
                    word={word}
                    partOfSpeech={partOfSpeech}
                    definition={definition}
                    styles={styles}
                  />
                );
              })}
          </ul>
        </div>
      )}
    </main>
  );
}
