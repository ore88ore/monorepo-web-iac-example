import { v4 as uuidv4 } from "uuid";

/**
 * 新しいUUIDを生成する
 * @returns 生成されたUUID文字列
 */
export function generateUuid(): string {
  return uuidv4();
}
