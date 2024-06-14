import axios from "axios";
import { useEffect, useState } from "react";
import Container from "../../../Components/Shared/Container/Container";
import TitleSection from "../../../Components/Shared/TitleSection/TitleSection";
import Card from "../../../Components/Shared/Card/Card";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("/decor.json")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(products);
  return (
    <div className="bg-[#30cfbd] py-16">
      <Container>
        <div>
          <TitleSection
            title={"Our Products"}
            subTitle={
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dolorum quae nostrum, repellendus nihil dolores!"
            }
          ></TitleSection>
        </div>
        <div className="flex justify-center items-center lg:flex-none">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6 mt-10 mb-6">
            {products?.map((product) => (
              <Card key={product.id} product={product}></Card>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Products;
