import type { PropsWithChildren } from "react"
import { ErrorBoundary } from "react-error-boundary"
import GlobalErrorBoundoryFallback from "./GlobalErrorBoundoryFallback"

const GlobalErrorBoundory = ({children}: PropsWithChildren) => {
    return(
        <ErrorBoundary FallbackComponent={GlobalErrorBoundoryFallback}>
            {children}
        </ErrorBoundary>
    )
}

export default GlobalErrorBoundory