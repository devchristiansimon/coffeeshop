import Produktliste from "@/components/Produktliste";
import Slider from "../components/Slider";
import mongodb from "@/utils/mongodb";
import Produkt from "@/models/Produkt";

export default function Home({ produkte }) {
  return (
    <>
      <Slider />
      <Produktliste produkte={produkte} />
    </>
  );
}

export async function getServerSideProps() {
  await mongodb.dbConnect();
  const produkte = await Produkt.find({}).lean();
  return {
    props: {
      produkte: JSON.parse(JSON.stringify(produkte)),
    },
  };
}
