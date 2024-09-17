import { SignedOut, SignedIn, SignInButton, UserButton } from "@clerk/nextjs";
import { SimpleUploadButton } from "./simple-upload-button";
import Link from "next/link";

export default function TopNav() {
  return (
    <nav className="flex h-24 items-center justify-between border-b px-6 text-xl font-semibold">
      <Link href={"/"}>T3 Gallary</Link>
      <div>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <div className="flex gap-4 items-center">
            <SimpleUploadButton />
            <UserButton />
          </div>
        </SignedIn>
      </div>
    </nav>
  );
}
