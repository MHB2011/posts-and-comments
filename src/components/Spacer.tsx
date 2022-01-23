import { withWelcomeMessage } from "../hoc/withWelcomeMessage";

export const Spacer = withWelcomeMessage(function Spacer() {
  return <div style={{ width: "16px", height: "16px" }} />;
});
