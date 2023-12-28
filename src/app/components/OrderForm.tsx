import { revalidateTag } from 'next/cache';

async function initTransaction(formData: FormData) {
  'use server';
  const shares = formData.get('shares');
  const price = formData.get('price');
  const asset_id = formData.get('asset_id');
  const wallet_id = formData.get('wallet_id');
  const type = formData.get('type');

  const body = JSON.stringify({
    shares,
    price,
    asset_id,
    wallet_id,
    type,
    status: 'OPEN',
    Asset: {
      id: asset_id,
      symbol: 'PETR4',
      price: price,
    },
  });

  const resp = await fetch(`http://localhost:8000/wallets/$wallets_id/orders`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: body,
  });
  revalidateTag(`orders-wallet-${wallet_id}`);
  console.log(resp.status);
  return await resp.json();

}

export function OrderForm(params: {
  asset_id: string,
  wallet_id: string,
}) {
  return (
    <div>
      <form action={initTransaction}>
        <input name='asset_id' type='hidden' defaultValue={params.asset_id} />
        <input name='wallet_id' type='hidden' defaultValue={params.wallet_id} />
        <input name='type' type='hidden' defaultValue={'BUY'} />
        <input name='shares' type='number' min={1} step={1} placeholder='quantidade' />
        <br />
        <input name='price' type='number' min={1} step={0.01} placeholder='preço' />
        <br />
        <button>Comprar</button>
      </form>
    </div>
  );
}