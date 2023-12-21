import { UserOrderItem, ChangeQuantity } from "@/type";
import OrderCard from "../OrderCard";

type UserOrderProps = {
	removeOrder: any;
	changeQuantity: ChangeQuantity;
	newOrderItems: UserOrderItem[];
}

export default function UserOrder({ removeOrder, changeQuantity, newOrderItems }: UserOrderProps) {
	return (
		<div id="order" className="bg-white w-[22vw] h-full fixed right-0 bottom-0 p-6 overflow-y-scroll py-12">
			<p className="mb-6 font-semibold text-black">Your Order</p>
			<div className="px-2">
				{
					newOrderItems.map((item, id) => <OrderCard removeOrder={removeOrder} changeQuantity={changeQuantity} key={id} orderItem={item} />).reverse()
				}
			</div>
		</div>
	);
}
