// React
import { useState } from "react";
// Styles
import styles from "./List.module.css";

const selectedColour = "rgba(255 0 0 / 1)";
const notSelectedColour = "transparent";

export default function List({ listArr }) {
  const [itemReference, setItemReference] = useState(null);

    return (
      <main>
        <h1 className={styles.heading}>Dynamic List Component</h1>
        <div className={styles.listContainer}>
          {listArr.map((item, idx) => {
            let itemPosition = idx+1;
            return (
              <div
                key={`item-${item}-${itemPosition}`}
                className={styles.listItem}
                style={
                  // Use index instead as there may more than one item in the list with the same value
                  itemReference === idx
                    ? { backgroundColor: selectedColour }
                    : { backgroundColor: notSelectedColour }
                }
                // On re-render update the item reference to clicked item
                // Loop through items again and style clicked item
                onClick={() => setItemReference(idx)}
              >
                {item}
              </div>
            );
          })}
        </div>
      </main>
    );
}
