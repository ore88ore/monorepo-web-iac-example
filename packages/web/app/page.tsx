import { generateUuid } from "shared";
import { UuidClient } from "./components/UuidClient";

export default function Home() {
  // サーバーサイドで初期UUIDを生成
  const uuid = generateUuid();
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-200 dark:from-gray-900 dark:to-blue-950">
      <UuidClient initialUuid={uuid} />
    </main>
  );
}
