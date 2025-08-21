import type { FallbackProps } from "react-error-boundary";

const GlobalErrorBoundoryFallback = ({
    error,
    resetErrorBoundary   
}: FallbackProps) => {
    return(
        <div
            onClick={resetErrorBoundary}
        >
            I'm fall...
            {error}
        </div>
    )
}

export default GlobalErrorBoundoryFallback;