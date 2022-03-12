import { ErrorBoundary } from "react-error-boundary";

function ErrorFallback({ error, resetErrorBoundary }: any) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

export function Error({ children }: any) {
  return (
    <ErrorBoundary fallbackRender={ErrorFallback}>{children}</ErrorBoundary>
  );
}
