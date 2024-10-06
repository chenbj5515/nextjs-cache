import { promises as fs } from 'fs';
import path from 'path';
import OtherClientComp from "./_components/other-client";

export default async function OtherRoute() {
  const filePath = path.join(process.cwd(), 'data.json');

  const fileContents = await fs.readFile(filePath, 'utf-8');
  const data = JSON.parse(fileContents);
  // await new Promise(resolve => setTimeout(resolve, 2000));
  
  return (
    <div>
      OtherRoute：{data.sharedValue}
      <OtherClientComp message={123} />
    </div>
  );
}

// export const dynamic = 'force-dynamic';
// export const revalidate = 30;
