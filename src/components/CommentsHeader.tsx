import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { withWelcomeMessage } from "../hoc/withWelcomeMessage";
import { constants } from "../styles/constants";
import { Spacer } from "./Spacer";

const S: { [index: string]: React.CSSProperties } = {
  CommentsHeader: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: constants.light,
    padding: "8px 16px",
  },
};

interface CommentsHeaderProps {
  setIsCommentsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isCommentsOpen: boolean;
}

export const CommentsHeader = withWelcomeMessage<CommentsHeaderProps>(
  function CommentsHeader({ setIsCommentsOpen, isCommentsOpen, message }) {
    return (
      <div
        data-testid="commentsheader"
        style={S.CommentsHeader}
        onClick={() => setIsCommentsOpen(!isCommentsOpen)}
      >
        <h5 className="mb-0">Comments</h5>
        <Spacer message={message} />
        {isCommentsOpen ? <FaChevronUp /> : <FaChevronDown />}
      </div>
    );
  }
);
