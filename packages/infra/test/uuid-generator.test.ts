import { handler } from '../lambda/uuid-generator';

describe('uuid-generator handler', () => {
  it('statusCodeが200で返ること', async () => {
    const result = await handler();
    expect(result.statusCode).toBe(200);
  });

  it('bodyがパース可能なJSON文字列で、idプロパティが含まれること', async () => {
    const result = await handler();
    const body = JSON.parse(result.body);
    expect(typeof body.id).toBe('string');
  });

  it('呼び出しごとに異なるUUIDが返ること', async () => {
    const result1 = await handler();
    const result2 = await handler();
    const id1 = JSON.parse(result1.body).id;
    const id2 = JSON.parse(result2.body).id;
    expect(id1).not.toBe(id2);
  });
});
