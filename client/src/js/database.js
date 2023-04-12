import { openDB } from "idb";

const initdb = async () =>
  openDB("jate", 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains("jate")) {
        console.log("jate database already exists");
        return;
      }
      db.createObjectStore("jate", { keyPath: "id", autoIncrement: true });
      console.log("jate database created");
    },
  });

// Method that accepts some content and adds it to the database
export const putDb = async (content) => {
  const contactDb = await openDB("jate", 1);
  const tx = contactDb.transaction("jate", "readwrite");
  const store = tx.objectStore("jate");
  const request = store.put({
    value: content,
    id: 1,
  });

  // Get confirmation of the request.
  const result = await request;
  console.log("🚀 - data saved to the database", result);
};

// Method that gets all the content from the database
export const getDb = async () => {
  const contactDb = await openDB("jate", 1);
  const tx = contactDb.transaction("jate", "readonly");
  const store = tx.objectStore("jate");
  const request = store.getAll();
  const result = await request;
  console.log("result.value", result);
  return result;
};

initdb();
