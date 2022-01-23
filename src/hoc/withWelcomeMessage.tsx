import React, { useEffect } from "react";

interface WithWelcomeMessageProps {
  message: string;
}

export function withWelcomeMessage<P>(
  Component: React.ComponentType<P & WithWelcomeMessageProps>
): React.FC<P & WithWelcomeMessageProps> {
  return function ComponentWithMessage({
    message,
    ...props
  }: WithWelcomeMessageProps) {
    const name = Component.name || Component.displayName;

    useEffect(() => {
      console.log(`${message} ${name}`);
    }, [name, message]);

    return <Component message={message} {...(props as P)} />;
  };
}
