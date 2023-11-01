import jsondb from "../jsondb/produkte";
import { Card, Button } from "react-bootstrap";
import Link from "next/link";

export default function Produktliste() {
  return (
    <div>
      <div className="row row-cols-3">
        {jsondb.produkte.map((produkt) => (
          <div key={produkt.name} className="mt-3 col">
            <Card>
              <Link href={`/produkt/${produkt.url}`}>
                <Card.Img variant="top" src={produkt.bild} />
              </Link>
              <Card.Body>
                <Card.Title>
                  {produkt.name} {produkt.preis} €
                </Card.Title>
                <Card.Text>{produkt.beschreibung}</Card.Text>
                <Button variant="danger">zum Warenkorb</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
      <br></br>
      <br></br>
    </div>
  );
}
