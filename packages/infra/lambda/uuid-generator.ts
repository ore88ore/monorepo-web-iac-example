import { generateUuid } from "shared";

export const handler = async () => {
  const id = generateUuid();
  console.log("Generated UUID:", id);

  return {
    statusCode: 200,
    body: JSON.stringify({
      id,
    }),
  };
};
