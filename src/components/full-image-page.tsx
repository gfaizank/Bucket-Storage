import { clerkClient } from "@clerk/nextjs/server";
import { deleteImage, getImage } from "~/server/queries";
import { Button } from "./ui/button";

export default async function FullPageImageView(props: { id: number }) {
  const image = await getImage(props.id);
  const uploaderInfo = await clerkClient.users.getUser(image.userId);

  return (
    <div className="flex h-full w-full min-w-0 flex-row items-center justify-center gap-4 md:flex-col">
      <div className="flex-shrink">
        <img
          src={image.url}
          className="max-w-[600px] flex-shrink object-contain"
          alt={image.userId}
        />
      </div>
      <div className="border-1 flex w-48 flex-shrink-0 flex-col text-white">
        <p className="text-xl font-bold">{image.name}</p>
        <p>Uploaded by: {uploaderInfo.fullName}</p>
        <p>Created on: {image.createdAt.toLocaleDateString()}</p>

        <div className="p-2">
          <form
            action={async () => {
              "use server";
              await deleteImage(props.id);
            }}
          >
            <Button variant={"destructive"} type="submit">
              Delete
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
