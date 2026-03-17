export default function Title({children}) {
    return(
        <h2 className="font-title text-dark text-4xl lg:text-5xl mb-8 relative inline-block">
            {children}
            <span className="absolute -bottom-4 lg:-bottom-6 left-0 w-64 lg:w-96 h-12 bg-[url('/after_vector.svg')] bg-bottom bg-contain bg-no-repeat"></span>
        </h2>
    )
}