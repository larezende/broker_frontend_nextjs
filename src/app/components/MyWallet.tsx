import { WalletAsset } from '@/models';
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from 'flowbite-react';
import React from 'react';
import Link from 'next/link';

async function getWalletAssets(wallet_id: string): Promise<WalletAsset[]> {
  const response = await fetch(`http://localhost:8000/wallets/${wallet_id}/assets`, {
    next: {
      revalidate: 1,
    },
  });
  return response.json();
}

export default async function MyWallet(props: { wallet_id: string }) {
  const walletAssets = await getWalletAssets(props.wallet_id);
  return (
    <Table>
      <TableHead>
        <TableHeadCell>Asset</TableHeadCell>
        <TableHeadCell>Price $</TableHeadCell>
        <TableHeadCell>Quantity</TableHeadCell>
        <TableHeadCell><span className='sr-only'>Buy/Sell</span></TableHeadCell>
      </TableHead>
      <TableBody className={'divide-y'}>
        {walletAssets.map((walletAsset) => (
          <TableRow
            className={'border-gray-700 bg-gray-800'}
            key={walletAsset.id}
          >
            <TableCell
              className={'whitespace-nowrap font-medium text-white'}>
              {walletAsset.Asset.id} ({walletAsset.Asset.symbol})
            </TableCell>
            <TableCell>{walletAsset.Asset.price}</TableCell>
            <TableCell>{walletAsset.shares}</TableCell>
            <TableCell>
              <Link className='font-medium hover:underline text-cyan-500'
                    href={`/${props.wallet_id}/home-broker/${walletAsset.Asset.id}`}>
                Buy/Sell
              </Link>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}