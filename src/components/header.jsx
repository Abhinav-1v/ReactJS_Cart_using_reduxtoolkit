import {useSelector} from 'react-redux';
import CartButtonWithPopup from './cartbutton';

export default function Header(){
    const cartitems=useSelector(state=>state.cart);
    const itemcount=cartitems.length;
    let amount=0;
    for(const i of cartitems){
        amount+=i.price;
    }
    return(
        <header className="header">
            <div className="block">
                <h1>Total Items: {itemcount} (₹ {amount})/-</h1>
            </div>
            <CartButtonWithPopup ></CartButtonWithPopup>
        </header>
    )
}   