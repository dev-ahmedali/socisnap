import React from "react";
import Sidebar from "../components/sidebar/Sidebar";

export default async function conversationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // @ts-expect-error Server Component
    <Sidebar>
      <div className="h-full">
        <ConversationList initialItems={[]}/>
        {children}</div>
    </Sidebar>
  );
}
