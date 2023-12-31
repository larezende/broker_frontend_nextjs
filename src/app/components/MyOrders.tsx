import { Order } from '@/models';
import { Badge, Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from 'flowbite-react';

async function getOrders(wallet_id: string): Promise<Order[]> {
  const response = await fetch(`http://localhost:8000/wallets/${wallet_id}/orders`, {
    next: {
      tags: [`orders-wallet-${wallet_id}`],
      revalidate: 1,
    },
  });
  return response.json();
}

export default async function MyOrders(props: { wallet_id: string }) {
  const orders = await getOrders(props.wallet_id);
  return (
    <div>
      <article className="format format-invert">
        <h2>My Orders</h2>
      </article>
      <Table className="mt-2">
        <TableHead>
          <TableHeadCell>Symbol</TableHeadCell>
          <TableHeadCell>quantity</TableHeadCell>
          <TableHeadCell>price</TableHeadCell>
          <TableHeadCell>type</TableHeadCell>
          <TableHeadCell>status</TableHeadCell>
        </TableHead>
        <TableBody>
          {orders.map((order) => (
            <TableRow
              className=" border-gray-700 bg-gray-800"
              key={order.id}
            >
              <TableCell className="whitespace-nowrap font-medium text-white">
                {order.Asset.symbol}
              </TableCell>
              <TableCell>{order.shares}</TableCell>
              <TableCell>{order.price}</TableCell>
              <TableCell>
                <Badge>{order.type}</Badge>
              </TableCell>
              <TableCell>
                <Badge>{order.status}</Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}