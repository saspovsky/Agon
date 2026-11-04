import { NavLink } from "react-router";

export default function NotFoundPage() {
   return (
      <>
         <div>Content not found</div>
         <NavLink to="/" end>Go to Home</NavLink>
      </>
   )
}