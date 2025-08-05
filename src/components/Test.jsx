import { useEffect } from "react";
import axios from "axios";
export default function Test() {
  //

  async function fetchData() {
    try {
      const response = await axios.get(
        "http://localhost:8000/portfolio/api/v1/visitor/get-github"
      );
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);
  //
  return (
    <div>
      <h1>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis
        tenetur temporibus dolorum animi iusto officia nostrum enim rerum
        debitis quos est, facere sit aspernatur. Veritatis, voluptatum quasi!
        Corrupti expedita repellendus architecto minima repudiandae dolor
        placeat consequuntur eos molestias cum ipsa suscipit nobis, eveniet sit
        odio, consequatur minus, sint ullam nemo eligendi. Nesciunt, voluptates
        quam odio est ipsam reprehenderit pariatur ipsa sed aperiam inventore
        mollitia at, neque culpa. Perferendis, tempora temporibus hic placeat
        laudantium velit quod aliquam eligendi sint reiciendis fugiat dolorum
        nostrum veniam, aut non quisquam nesciunt. Explicabo recusandae in
        inventore officiis, rerum ratione, sequi amet repellat consequuntur odit
        quo cupiditate, ut necessitatibus minus alias corporis. Eum suscipit
        placeat, voluptatibus eius, ex tempora sapiente beatae dolore explicabo,
        ea ipsa. Eligendi nam rem exercitationem, at, dolorum, tempora quo
        laboriosam ratione illo maxime vero eos dolore reiciendis enim veniam
        ad. Consequuntur voluptatem atque impedit numquam quas ratione maxime
        veniam eaque deserunt? Repellat deserunt delectus quos at rem,
        perferendis odio dolorem repellendus temporibus mollitia libero est,
        unde vel. Omnis, assumenda quia. Pariatur consectetur tempora amet
        repudiandae, labore magnam molestias cumque blanditiis velit
        exercitationem minima necessitatibus, dicta ab suscipit? Maxime soluta
        laudantium quis debitis, suscipit dignissimos optio rerum omnis quasi
        quidem esse labore doloribus.
      </h1>
    </div>
  );
}
