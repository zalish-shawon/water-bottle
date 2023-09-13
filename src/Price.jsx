/* eslint-disable react/prop-types */
const Price = ({price}) => {
    console.log(price);
    return (
        <div className=" bg-slate-200 mt-2 text-center">
            <h1 className="text-xl">Total Price: {price}</h1>
        </div>
    );
};

export default Price;