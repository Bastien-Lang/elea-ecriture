export default function Cta({children, href = "#"}) {
    return(
         <a href={href} className="btn-main">
            {children}
         </a>
    )
}