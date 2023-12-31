import MyOrders from '@/app/components/MyOrders';
import { OrderForm } from '@/app/components/OrderForm';
import { HiShoppingCart, HiArrowUp } from '../../../components/react-icons/hi';
import { Card, TabItem, Tabs } from 'flowbite-react';
import { ChartComponent } from '@/app/components/ChartComponent';

export default async function HomeBrokerPage({ params }: {
  params: { wallet_id: string, asset_id: string }
}) {
  return (
    <main className={'flex flex-grow flex-col container mx-auto p-2'}>
      <article className={'format format-invert'}>
        <h1>Home broker - {params.asset_id}</h1>
      </article>
      <div className='grid grid-cols-5 flex-grow gap-2 mt-2'>
        <div className='col-span-2 '>
          <div>
            <Card
              theme={{
                root: {
                  children:
                    'flex h-full flex-col justify-center gap-4 py-4 px-2',
                },
              }}>
              <Tabs aria-label='Default tabs' style='pills'>
                <TabItem active title='Buy' icon={HiShoppingCart}>
                  <OrderForm
                    wallet_id={params.wallet_id}
                    asset_id={params.asset_id}
                    type='BUY'
                  />
                </TabItem>
                <TabItem title='Sell' icon={HiArrowUp}>
                  <OrderForm
                    wallet_id={params.wallet_id}
                    asset_id={params.asset_id}
                    type='SELL'
                  />
                </TabItem>
              </Tabs>
            </Card>
          </div>
          <div>
            <Card
              theme={{
                root: {
                  children:
                    'flex h-full flex-col justify-center gap-4 py-4 px-2',
                },
              }}>
              <MyOrders wallet_id={params.wallet_id} />
            </Card>
          </div>
        </div>
        <div className={'col-span-3 flex flex-grow'}>
          <ChartComponent header='Asset i' data={[
            { time: '2018-12-22', value: 32.51 },
            { time: '2018-12-23', value: 31.11 },
            { time: '2018-12-24', value: 27.02 },
            { time: '2018-12-25', value: 27.32 },
            { time: '2018-12-26', value: 25.17 },
            { time: '2018-12-27', value: 28.89 },
            { time: '2018-12-28', value: 25.46 },
            { time: '2018-12-29', value: 23.92 },
            { time: '2018-12-30', value: 22.68 },
            { time: '2018-12-31', value: 22.67 },
          ]}
          />
        </div>

      </div>
    </main>
  );
}