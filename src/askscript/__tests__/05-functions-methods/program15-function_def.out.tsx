import * as askjsx from '../../../askjsx';
askjsx;

export const expectedOutput = (
  <ask>
    <fun name={'square'} args={[['a', 'int']]} returns={'int'}>
      <call name={'times'} args={[<ref name={'a'} />, <ref name={'a'} />]} />
    </fun>
    <call
      name={'plus'}
      args={[
        <call name={'square'} args={[<ref name={'a'} />]} />,
        <call name={'square'} args={[<ref name={'a'} />]} />,
      ]}
    />
  </ask>
);