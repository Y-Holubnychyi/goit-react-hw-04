import { useEffect } from "react";
import toast from "react-hot-toast";

let hasErrorBeenShown = false;

function ErrorMessage() {
  useEffect(() => {
    if (!hasErrorBeenShown) {
      toast.error("Oops! Something went wrong, please try again.");
      hasErrorBeenShown = true;
    }
  }, []);

  return (
    <p style={{ color: "red" }}>
      Oops! Something went wrong, please try again.
    </p>
  );
}

export default ErrorMessage;
