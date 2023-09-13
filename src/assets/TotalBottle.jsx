const TotalBottle = ({ bottles }) => {

    return (
        <div>
            <h1 className="text-4xl font-semibold 
      text-center mt-3">Total Bottle: {bottles.length} </h1>
        </div>
    );
};

export default TotalBottle;