import { lazy, Suspense } from "react";
import Loader from "../../../components/Loader";
const AboutPage = lazy(() => import("../../../layout/visitor/MainLayout.jsx"));
import {Link} from "react-router-dom";
// import About from "../../../components/About.jsx";
export default function About() {
  return (
    <Suspense fallback={<Loader />}>
      <AboutPage>
        {/* <About /> */}
        <h2 className="font-bold text-3xl dark:text-white relative z-50">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.luptatum quo
          praesentium. Dignissimos praesentium nobis magni similique iure sit
          aspernatur molestiae quisquam mollitia excepturi aut, libero in cum
          illo amet!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam culpa architecto ullam doloribus ab, in debitis illo perspiciatis veniam impedit illum consequatur nobis aperiam. Ratione omnis accusantium tempora nulla cumque animi nisi nesciunt, repellendus saepe dicta magni esse quam assumenda alias ad perferendis reiciendis amet rerum necessitatibus fuga neque quis minima fugit voluptate? Itaque, fuga nam corrupti ad alias dolorem porro commodi dolorum assumenda ipsa consequatur ducimus dicta perspiciatis voluptates voluptatibus illo quos consectetur. Dicta, sapiente odio! Necessitatibus vitae, quod voluptatum earum ut dignissimos tempore reiciendis, aliquam laborum fugiat doloremque quisquam molestiae recusandae fuga nesciunt? Minima, animi nobis vel id, impedit voluptates iure sequi voluptatem reiciendis doloremque corrupti? Facilis porro eius error accusantium laboriosam consequuntur explicabo vero modi adipisci. Ad incidunt, sit, obcaecati odio tempore aperiam aspernatur quae sunt reprehenderit totam, iure est perferendis itaque! Enim voluptate vitae facilis consequuntur! Minus, quibusdam ullam iure facere repudiandae facilis. Quam, ad sint laudantium molestias, ipsa voluptatum dolore, amet animi optio at sapiente dicta obcaecati odit voluptates cumque! Qui, sed dicta labore molestias at, aspernatur vitae expedita commodi officia eos maiores officiis quos. Ex, expedita minima, eum ducimus soluta dolorum eaque assumenda rem tempore eveniet perspiciatis repellendus saepe quia autem nesciunt a. Reprehenderit!
        </h2>
        <Link to="/" className="text-center block text-secondary hover:underline my-10 font-bold">Home</Link>
      </AboutPage>
    </Suspense>
  );
}
