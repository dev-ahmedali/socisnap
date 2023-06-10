import React from "react";
import Sidebar from "../components/sidebar/Sidebar";
import ConversationList from "./components/ConversationList";
import getConversation from "../actions/getConversation";

export default async function conversationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const conversations = await getConversation()
  return (
    // @ts-expect-error Server Component
    <Sidebar>
      <div className="h-full">
        <ConversationList initialItems={[conversations]}/>
        {children}</div>
    </Sidebar>
  );
}
