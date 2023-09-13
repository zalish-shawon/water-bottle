/* eslint-disable react/prop-types */
const SingleBottle = ({ bottle, handleItemPrice }) => {

 // eslint-disable-next-line react/prop-types
 const {name, img, price} = bottle
    return (

        <div className="">
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src= {img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>Price: {price}$</p>
                    <div className="card-actions">
                        <button onClick={() => handleItemPrice(bottle)} className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default SingleBottle;