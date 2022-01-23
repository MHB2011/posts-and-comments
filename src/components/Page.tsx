import { withWelcomeMessage } from "../hoc/withWelcomeMessage";
interface PageProps {
  children: React.ReactNode;
}

export const Page = withWelcomeMessage<PageProps>(function Page({ children }) {
  return <div className="container">{children}</div>;
});
