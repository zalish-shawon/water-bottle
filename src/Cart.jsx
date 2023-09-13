/* eslint-disable react/jsx-key */



/* eslint-disable react/prop-types */
const Cart = ({cart}) => {
    return (
        <div>
            <h1 className=" text-4xl"> Items Cart</h1>
            <h1 className=" text-2xl">Selected Items: {cart.length}</h1>
            {
                cart.map(item => 
                    <div className=" bg-slate-200 mt-3 flex items-center">
                        <img className="w-[100px]" src={item.img} alt="" />
                        <div>
                        <p>{item.name}</p>
                        <p>Price: {item.price}$</p>
                        </div>
                    </div>
                    
                    )
            }
            
        </div>
    );
};

export default Cart;