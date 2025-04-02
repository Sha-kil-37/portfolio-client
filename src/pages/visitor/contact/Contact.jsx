import { lazy, Suspense } from "react";
import Loader from "../../../components/Loader";
const ContactPage = lazy(() =>
  import("../../../layout/visitor/MainLayout.jsx")
);
//
export default function Contact() {
  return (
    <Suspense fallback={<Loader />}>
      <ContactPage>
        <h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          voluptatibus explicabo esse eveniet, velit, enim aspernatur deleniti
          quo itaque sunt, voluptates nostrum! Inventore perspiciatis minima
          sequi excepturi dolor similique, itaque fuga obcaecati, quaerat ipsa
          cupiditate doloremque placeat ipsum asperiores quibusdam deleniti
          commodi cumque tenetur. Voluptatem illum similique tempora, voluptates
          perspiciatis at, adipisci facere dolor officia placeat veniam. Facilis
          architecto quisquam unde assumenda, reprehenderit autem, quibusdam
          expedita voluptate ad tenetur sint repellat deleniti facere corporis
          nobis possimus atque qui provident ipsa inventore error! Temporibus
          repudiandae harum exercitationem, aspernatur sit, magni explicabo
          necessitatibus neque aut architecto provident eligendi laborum.
          Mollitia porro iste aut quasi, dolore earum magni hic culpa labore
          laborum eveniet tenetur vero ipsum a voluptatem illo minus ex nihil
          eaque ducimus unde. Distinctio alias rem maxime provident sequi
          excepturi dolore, et soluta ducimus perspiciatis totam, magni nulla
          rerum quam tenetur libero qui explicabo, iure cum veniam culpa
          repudiandae aliquid suscipit aut! Odit magni repellat, totam debitis
          laudantium autem est modi assumenda voluptatibus nemo placeat ipsam
          perspiciatis qui error vero quidem excepturi ullam soluta quos sit
          quia odio. Quas explicabo velit, neque error porro sed! Reiciendis
          fugiat, velit, voluptatem ullam soluta numquam aspernatur assumenda
          dolorum expedita repellendus id quibusdam, maiores alias!
        </h2>
      </ContactPage>
    </Suspense>
  );
}
