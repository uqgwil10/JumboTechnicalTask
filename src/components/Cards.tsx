import Card from "./HomeCard";

const Cards = ({ searchResults }: any) => {
  if (!searchResults) {
    return;
  }
  return searchResults.map((show: any, index: number) => {
    return (
      <div key={show.id} className="col-sm-12 col-md-6 col-lg-6">
        <Card show={show} />
      </div>
    );
  });
};

export default Cards;
