import * as askjsx from '../askjsx';
import { ask } from './lib';
askjsx;

test('jsx', async () => {
  const sum = <call name="sum" args={[4, 5]} />;
  await expect(ask(sum)).resolves.toBe(9);
});
