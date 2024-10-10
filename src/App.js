import React, { useState, useEffect } from "react";

function App() {
  const [flag, setFlag] = useState("");
  const [loading, setLoading] = useState(true);
  const [displayedFlag, setDisplayedFlag] = useState("");

  useEffect(() => {
    // Fetch the flag from the hidden URL
    const fetchFlag = async () => {
      const response = await fetch(
        "https://wgg522pwivhvi5gqsn675gth3q0otdja.lambda-url.us-east-1.on.aws/756e63"
      );
      const data = await response.text();
      setFlag(data);
      setLoading(false);
    };
    fetchFlag();
  }, []);

  useEffect(() => {
    if (!loading && flag) {
      let index = 0;
      const interval = setInterval(() => {
        setDisplayedFlag(flag.slice(0, index + 1));
        index++;
        if (index === flag.length) clearInterval(interval);
      }, 500);
    }
  }, [loading, flag]);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {displayedFlag.split("").map((char, index) => (
            <li key={index}>{char}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
///the script that i used to to get the URL in step 2
// let url = '';
// document.querySelectorAll('code[data-class^="23"] div[data-tag$="93"] span[data-id*="21"] i.char').forEach(el => {
//     url += el.getAttribute('value');
// });
// console.log(url);
