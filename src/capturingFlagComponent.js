import React, { useEffect, useState } from "react";

const CapturingFlagComponent = () => {
  const [flag, setFlag] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://wgg522pwivhvi5gqsn675gth3q0otdja.lambda-url.us-east-1.on.aws/616e79"
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.text();
        console.log(result);
        setFlag(result);
      } catch (error) {
        console.log(error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < flag.length) {
        setCurrentIndex(currentIndex + 1);
      } else {
        clearInterval(interval);
      }
    }, 500);

    return () => clearInterval(interval);
  }, [currentIndex, flag]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <div>
      <ul style={{ "list-style-type": "none" }}>
        {flag
          .slice(0, currentIndex)
          .split("")
          .map((char, index) => (
            <li style={{ display: "inline" }} key={index}>
              {char}
            </li>
          ))}
        <li style={{ display: "inline" }} className="cursor">
          _
        </li>
      </ul>
    </div>
  );
};

export default CapturingFlagComponent;
