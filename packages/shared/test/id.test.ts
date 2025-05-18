import { generateUuid } from '../src/id';

describe('UUID機能', () => {
  describe('generateUuid', () => {
    it('UUIDを生成すること', () => {
      const uuid = generateUuid();
      expect(typeof uuid).toBe('string');
      expect(uuid.length).toBe(36); // UUIDの標準的な長さ
      expect(uuid).toMatch(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i);
    });

    it('呼び出しごとに異なるUUIDを生成すること', () => {
      const uuid1 = generateUuid();
      const uuid2 = generateUuid();
      expect(uuid1).not.toBe(uuid2);
    });
  });
});
