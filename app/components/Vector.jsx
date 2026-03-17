export default function Vector({ position = "bottom" }) {
    const isBottom = position === "bottom";
    
    const positionClasses = isBottom 
        ? "bottom-[-3]" 
        : "top-[-3] scale-y-[-1] scale-x-[-1]";

    return (
        <img 
            className={`absolute right-0 z-0 pointer-events-none ${positionClasses}`} 
            src="/vector.svg" 
            alt="" 
            aria-hidden="true"
        />
    );
}
